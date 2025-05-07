import { create } from "zustand";

import { Product } from "@/src/types/types";

export const useProductsState = create<{
  products: Product[];
  setProducts: (products: Product[]) => void;
}>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
