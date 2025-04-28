import { useEffect, useRef } from "react";

import { useVoiceDetector } from "@/src/hooks/useVoiceDetector";
import { useConversation } from "@/src/hooks/useConversation";

export const useVoiceConversation = () => {
  const audio = useRef<HTMLAudioElement | null>(null);

  const { setEnabled, setDisabled, isEnabled, isTalking } = useVoiceDetector({
    onVoiceDetected: (text: string) => {
      console.log(`[TRANSCRIPTION] ${text}`);
      getAssistantMessage(text);
    },
  });

  const { getAssistantMessage } = useConversation({
    onAudioGenerated: (base64String: string) => {
      audio.current = new Audio(`data:audio/wav;base64,${base64String}`);
      audio.current.play().catch((error) => {
        console.error("Audio playback error:", error);
      });
    },
  });

  useEffect(() => {
    getAssistantMessage();
  }, []);

  useEffect(() => {
    if (isTalking) {
      if (!audio.current?.ended) {
        audio.current?.pause();
      }
    }
  }, [isTalking]);

  return { setEnabled, setDisabled, isEnabled, isTalking };
};
