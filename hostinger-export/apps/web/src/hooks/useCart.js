import { useCartContext } from '@/contexts/CartContext.jsx';

export const useCart = () => {
  return useCartContext();
};