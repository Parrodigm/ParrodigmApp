import { create } from "zustand";

export const useProductsState = create<{
  productIds: number[];
  setProductIds: (productIds: number[]) => void;
}>((set) => ({
  productIds: [],
  setProductIds: (productIds) => set({ productIds: productIds }),
}));
