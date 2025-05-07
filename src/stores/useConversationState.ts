import { create } from "zustand";

import { Conversation } from "@/src/types/types";

export const useConversationState = create<{
  conversation: Conversation;
  setConversation: (conversation: Conversation) => void;
}>((set) => ({
  conversation: [],
  setConversation: (conversation) => set({ conversation }),
}));
