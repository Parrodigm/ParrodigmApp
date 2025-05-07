import { useEffect, useRef } from "react";

import { Action } from "../types/types";

import { useVoiceDetector } from "@/src/hooks/useVoiceDetector";
import { useConversation } from "@/src/hooks/useConversation";

export const useVoiceConversation = ({ onActionRequested }: { onActionRequested?: (action: Action) => void } = {}) => {
  const audio = useRef<HTMLAudioElement | null>(null);

  const { setEnabled, isEnabled, isTalking } = useVoiceDetector({
    onVoiceDetected: (text: string) => {
      console.log(`[TRANSCRIPTION] ${text}`);
      requestAssistantMessage(text);
    },
  });

  const { conversation, requestAssistantMessage, getLastAssistantMessage, getLastUserMessage } = useConversation({
    onAudioGenerated: (base64String: string) => {
      if (audio.current) {
        audio.current.pause();
      }
      audio.current = new Audio(`data:audio/wav;base64,${base64String}`);
      audio.current.play().catch((error) => {
        console.error("Audio playback error:", error);
      });
    },
    onActionRequested: onActionRequested,
  });

  useEffect(() => {
    if (isEnabled && conversation.length == 0) {
      requestAssistantMessage();
    }
  }, [conversation, requestAssistantMessage, isEnabled]);

  useEffect(() => {
    if (isTalking) {
      if (!audio.current?.ended) {
        audio.current?.pause();
      }
    }
  }, [isTalking]);

  return {
    setEnabled,
    isEnabled,
    isTalking,
    conversation,
    getLastAssistantMessage,
    getLastUserMessage,
  };
};
