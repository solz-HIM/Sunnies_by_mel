"use client";

import { CartProvider } from "@/lib/cart-context";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "hsl(224 71% 7%)",
            color: "hsl(213 31% 91%)",
            border: "1px solid hsl(216 34% 17%)",
          },
        }}
      />
    </CartProvider>
  );
}
