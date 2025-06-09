"use client";

import { css } from "@/styled-system/css";
import VoiceText from "@/src/components/VoiceText";

export default function Page() {
  return (
    <div
      className={css({
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "1em 0.5em",
        alignItems: "center",
        justifyContent: "center",
        gap: "4em",
      })}
    >
      <VoiceText text="" />
    </div>
  );
}
