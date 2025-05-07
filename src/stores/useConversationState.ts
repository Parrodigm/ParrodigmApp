import { create } from "zustand";

import { UserMessage, AssistantMessage, Conversation } from "@/src/types/types";

export const useConversationState = create<{
  conversation: Conversation;
  setConversation: (conversation: Conversation) => void;
  getLastAssistantMessage: () => AssistantMessage | undefined;
  getLastUserMessage: () => UserMessage | undefined;
}>((set, get) => ({
  conversation: [],
  setConversation: (conversation) => set({ conversation: conversation }),
  getLastAssistantMessage: () => {
    return get().conversation.findLast((message) => message.role === "assistant");
  },
  getLastUserMessage: () => {
    return get().conversation.findLast((message) => message.role === "user");
  },
}));
