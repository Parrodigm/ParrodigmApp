"use client";

import { css } from "@/styled-system/css";

export default function Page() {
  return (
    <div
      className={css({
        flex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "1em 2em",
        alignItems: "center",
        justifyContent: "center",
        gap: "4em",
      })}
    >
      <div>Conversation Animation</div>
    </div>
  );
}
