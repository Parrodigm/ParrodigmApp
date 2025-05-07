import { useState, useCallback, useRef } from "react";

import { useMicVAD, utils } from "@ricky0123/vad-react";

export const useVoiceDetector = ({ onVoiceDetected }: { onVoiceDetected: (text: string) => void }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const processing = useRef(false);

  const voiceDetector = useMicVAD({
    startOnLoad: false,
    onSpeechStart: () => {
      console.log("User start talking");
      setIsTalking(true);
    },
    onSpeechEnd: (audio) => {
      processAudio(audio);
      console.log("User stopped talking");
      setIsTalking(false);
    },
    onVADMisfire: () => {
      console.log("VAD misfire");
      setIsTalking(false);
    },
    positiveSpeechThreshold: 0.5,
    negativeSpeechThreshold: 0.5,
    redemptionFrames: 20,
  });

  const setEnabled = useCallback(
    (enabled: boolean) => {
      if (enabled === isEnabled) {
        return;
      }
      console.log("setEnabled", enabled);
      if (enabled) {
        voiceDetector.start();
      } else {
        voiceDetector.pause();
      }
      setIsEnabled(enabled);
    },
    [isEnabled, voiceDetector]
  );

  const getTranscript = useCallback(async ({ file }: { file: Blob }) => {
    const formData = new FormData();
    formData.append("audio", file);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/audio/speech-to-text`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to get transcript");
    }

    return response.json();
  }, []);

  const processAudio = useCallback(
    async (audioData: Float32Array) => {
      if (processing.current) {
        console.log("IGNORE");
        return;
      }
      processing.current = true;
      try {
        console.log("START TRANSCRIPT");

        const audioBlob = new Blob([utils.encodeWAV(audioData)], {
          type: "audio/wav",
        });

        const transcription = await getTranscript({
          file: audioBlob,
        });

        if (isEnabled) {
          onVoiceDetected(transcription.text);
        }
      } catch (error) {
        console.error("Error processing audio:", error);
      }
      processing.current = false;
    },
    [isEnabled, getTranscript, onVoiceDetected]
  );

  return {
    setEnabled,
    isEnabled,
    isTalking,
  };
};
