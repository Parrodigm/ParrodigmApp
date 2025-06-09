"use client";

import { css } from "@/styled-system/css";
import { AnimatedText } from "@/src/components/AnimatedText";
import { useEffect, useState } from "react";

export default function VoiceText({ text, fontSize }: { text: string; fontSize: string }) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    setAudio(null);
    const fetchTTS = async () => {
      try {
        const response = await fetch("http://localhost:5000/audio/text-to-speech", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: text,
          }),
        });

        const data = await response.json();

        if (data.base64) {
          // Stop any existing audio
          if (audio) {
            audio.pause();
          }

          // Create new audio instance with base64 data
          const newAudio = new Audio(`data:audio/wav;base64,${data.base64}`);
          setAudio((oldAudio) => {
            if (oldAudio) {
              return oldAudio;
            }
            newAudio.play().catch((error) => {
              console.error("Audio playback error:", error);
            });
            return newAudio;
          });
        }
      } catch (error) {
        console.error("Error fetching TTS:", error);
      }
    };

    fetchTTS();

    // Cleanup function
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [text]);

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        padding: "1em 0.5em",
        alignItems: "center",
        justifyContent: "center",
        gap: "4em",
      })}
    >
      {audio && <AnimatedText fontSize={fontSize}>{text}</AnimatedText>}
    </div>
  );
}
