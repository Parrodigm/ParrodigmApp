"use client";

import { useEffect } from "react";

import { Flex } from "@/styled-system/jsx";
import { Text } from "@/src/components/Text";

import { useVoiceConversation } from "@/src/hooks/useVoiceConversation";
import { useConversationState } from "@/src/stores/useConversationState";
import { useProductsState } from "@/src/stores/useProductsState";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const { conversation } = useConversationState();
  const { products } = useProductsState();

  const voiceConversation = useVoiceConversation();

  const lastAssistantMessage = conversation.findLast(
    (message) => message.role === "assistant"
  );

  const lastUserMessage = conversation.findLast(
    (message) => message.role === "user"
  );

  useEffect(() => {
    if (products.length != 0) {
      router.push("/products");
    }
  }, [router, products]);

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100%"
      padding="0 53px"
      gap="4em"
    >
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" color="#6294FF">
        {lastAssistantMessage?.content}
      </Text>
      <Text fontWeight="bold" textAlign="center" color="#000000">
        {lastUserMessage?.content}
      </Text>
    </Flex>
  );
}
