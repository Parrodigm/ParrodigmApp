import { create } from "zustand";

import { PageInfo } from "@/src/types/types";

export const usePageState = create<{
  currentPageInfo: PageInfo;
  setCurrentPageInfo: (currentPageInfo: PageInfo) => void;
}>((set) => ({
  currentPageInfo: { type: "home" },
  setCurrentPageInfo: (currentPageInfo) => set({ currentPageInfo }),
}));
