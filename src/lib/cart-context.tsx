"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { Product } from "./products";

export interface CartItem extends Product {
  cartItemId: string;
  quantity: number;
  selectedVariationImage: string;
}

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product, selectedVariationImage?: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const STORAGE_KEY = "sunnies-cart";

/**
 * localStorage is an external store, so the cart is modelled as one rather than
 * as state mirrored into it by an effect. Reading it in `useEffect` +
 * `setCartItems` caused a cascading render on every mount (and tripped
 * react-hooks/set-state-in-effect); `useSyncExternalStore` reads it during
 * render on the client and falls back to an empty cart on the server, so
 * hydration stays consistent.
 */

/** Stable empty reference — getSnapshot must not return a new array each call. */
const EMPTY: CartItem[] = [];

const listeners = new Set<() => void>();

/** Cached parse of the persisted cart. Invalidated whenever we write. */
let cache: CartItem[] = EMPTY;
let cacheRaw: string | null = null;
let initialised = false;

function readStorage(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private mode / blocked storage — behave as an empty cart.
    return null;
  }
}

/**
 * localStorage is attacker- and accident-writable (another tab, an extension, a
 * half-finished write). The cart page calls `price.toFixed()` and renders
 * `image` as a src, so an entry missing those fields would throw during render
 * and blank the page. Validate the shape and drop anything malformed.
 */
function isCartItem(value: unknown): value is CartItem {
  if (typeof value !== "object" || value === null) return false;
  const item = value as Record<string, unknown>;
  return (
    typeof item.cartItemId === "string" &&
    typeof item.id === "string" &&
    typeof item.name === "string" &&
    typeof item.image === "string" &&
    typeof item.price === "number" &&
    Number.isFinite(item.price) &&
    typeof item.quantity === "number" &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  );
}

function getSnapshot(): CartItem[] {
  const raw = readStorage();
  if (!initialised || raw !== cacheRaw) {
    initialised = true;
    cacheRaw = raw;
    if (!raw) {
      cache = EMPTY;
    } else {
      try {
        const parsed: unknown = JSON.parse(raw);
        const valid = Array.isArray(parsed) ? parsed.filter(isCartItem) : [];
        cache = valid.length ? valid : EMPTY;
      } catch {
        cache = EMPTY;
      }
    }
  }
  return cache;
}

/** The server has no cart; matching this on first client render avoids a mismatch. */
const getServerSnapshot = (): CartItem[] => EMPTY;

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  // Keep the cart in sync when it is changed in another tab.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function write(items: CartItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage unavailable — the update still applies for this render pass.
  }
  cacheRaw = readStorage();
  cache = items;
  initialised = true;
  listeners.forEach((listener) => listener());
}

function update(updater: (previous: CartItem[]) => CartItem[]): void {
  write(updater(getSnapshot()));
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const cartItems = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const addToCart = useCallback(
    (product: Product, selectedVariationImage?: string) => {
      update((prev) => {
        const variationImage = selectedVariationImage || product.image;
        const cartItemId = `${product.id}-${btoa(variationImage).substring(0, 15)}`;
        const existing = prev.find((i) => i.cartItemId === cartItemId);
        if (existing) {
          return prev.map((i) =>
            i.cartItemId === cartItemId ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [
          ...prev,
          { ...product, cartItemId, quantity: 1, selectedVariationImage: variationImage },
        ];
      });
    },
    []
  );

  const removeFromCart = useCallback((cartItemId: string) => {
    update((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  }, []);

  const updateQuantity = useCallback(
    (cartItemId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(cartItemId);
        return;
      }
      update((prev) =>
        prev.map((i) => (i.cartItemId === cartItemId ? { ...i, quantity } : i))
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => write(EMPTY), []);

  const getCartTotal = useCallback(
    () => cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [cartItems]
  );

  const getCartCount = useCallback(
    () => cartItems.reduce((sum, i) => sum + i.quantity, 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
    }),
    [cartItems, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
