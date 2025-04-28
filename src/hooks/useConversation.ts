import { useCallback, useRef } from "react";

import { Conversation, ConversationResponse } from "../types/types";
import { useConversationState } from "../stores/useConversationState";
import { useProductsState } from "../stores/useProductsState";
export const useConversation = ({
  onAudioGenerated,
}: {
  onAudioGenerated: (audio: string) => void;
}) => {
  const processing = useRef(false);

  const { conversation, setConversation } = useConversationState();
  const { setProducts } = useProductsState();

  const getConversationResponse = useCallback(
    async (messages: Conversation): Promise<ConversationResponse> => {
      const response = await fetch("http://localhost:5000/conversation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: messages }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      return await response.json();
    },
    []
  );

  const getAssistantMessage = useCallback(
    async (text?: string) => {
      if (processing.current) return;
      processing.current = true;

      const conversationTemp = [...conversation];
      if (text) {
        conversationTemp.push({
          role: "user",
          content: text,
        });
        setConversation(conversationTemp);
      }

      const response = await getConversationResponse(conversationTemp);
      if (response.type === "response") {
        conversationTemp.push({
          role: "assistant",
          content: response.text,
        });
        onAudioGenerated(response.audio);
      } else if (response.type === "products") {
        conversationTemp.push({
          role: "system",
          content: response.query,
        });
        setProducts(response.products);
      }
      console.log(conversationTemp);
      setConversation(conversationTemp);
      processing.current = false;
    },
    [
      onAudioGenerated,
      getConversationResponse,
      setConversation,
      conversation,
      setProducts,
    ]
  );

  return {
    getAssistantMessage,
  };
};
