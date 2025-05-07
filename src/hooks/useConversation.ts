import { useCallback, useRef } from "react";

import { Conversation, Action, AssistantResponse, ModelUserMessage, ModelAssistantMessage, ModelSystemMessage } from "../types/types";

import { useConversationState } from "../stores/useConversationState";
import { useProductsState } from "../stores/useProductsState";
import { useCartState } from "../stores/useCartState";

import { usePageState } from "../stores/usePageState";

export const useConversation = ({
  onAudioGenerated,
  onActionRequested,
}: {
  onAudioGenerated?: (audio: string) => void;
  onActionRequested?: (action: Action) => void;
} = {}) => {
  const processing = useRef(false);

  const { conversation, setConversation, getLastAssistantMessage, getLastUserMessage } = useConversationState();

  const { productIds } = useProductsState();
  const { cart } = useCartState();

  const { currentPageInfo } = usePageState();

  const getAssistantResponse = useCallback(async (messages: Conversation): Promise<AssistantResponse> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/conversation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: messages.map((message): ModelUserMessage | ModelAssistantMessage | ModelSystemMessage => ({
          role: message.role,
          content: JSON.stringify(message.content),
        })),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to get response");
    }

    return await response.json();
  }, []);

  const requestAssistantMessage = useCallback(
    async (text?: string) => {
      if (processing.current) {
        return;
      }
      processing.current = true;

      const conversationTemp = [...conversation];
      if (text) {
        conversationTemp.push({
          role: "user",
          content: {
            text: text,
            currentDisplayedProductIds: productIds,
            cart: cart,
            currentPageInfo: currentPageInfo,
          },
        });
        setConversation(conversationTemp);
      }

      const response = await getAssistantResponse(conversationTemp);
      if (response.audio) {
        onAudioGenerated?.(response.audio);
      }
      if (onActionRequested) {
        for (const action of response.actions) {
          onActionRequested(action);
        }
      }
      conversationTemp.push({
        role: "assistant",
        content: {
          text: response.text,
          actions: response.actions,
        },
      });
      console.log(conversationTemp);
      setConversation(conversationTemp);
      processing.current = false;
    },
    [onAudioGenerated, onActionRequested, getAssistantResponse, setConversation, conversation, productIds, cart, currentPageInfo]
  );

  return {
    conversation,
    requestAssistantMessage,
    getLastAssistantMessage,
    getLastUserMessage,
  };
};
