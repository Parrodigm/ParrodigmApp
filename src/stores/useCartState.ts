import { create } from "zustand";

import { CartItem } from "@/src/types/types";

export const useCartState = create<{
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
  clearCart: () => void;
  addCartItem: (productId: number, quantity: number) => void;
  updateCartItem: (productId: number, quantity: number) => void;
  removeCartItem: (productId: number) => void;
  getCartItemCount: () => number;
}>((set, get) => ({
  cart: [],
  setCart: (cart) => set({ cart: cart }),
  clearCart: () => set({ cart: [] }),
  addCartItem: (productId: number, quantity: number) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.productId === productId);
      if (existingItem) {
        return {
          cart: state.cart.map((item) => (item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item)),
        };
      }
      return {
        cart: [...state.cart, { productId, quantity }],
      };
    }),
  updateCartItem: (productId: number, quantity: number) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.productId === productId);
      if (existingItem) {
        return {
          cart: state.cart.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
        };
      }
      return {
        cart: [...state.cart, { productId, quantity }],
      };
    }),
  removeCartItem: (productId: number) => set((state) => ({ cart: state.cart.filter((item) => item.productId !== productId) })),
  getCartItemCount: () => get().cart.reduce((acc, item) => acc + item.quantity, 0),
}));
