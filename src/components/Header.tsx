"use client";

import { css } from "@/../../styled-system/css";
import { usePageController } from "../hooks/usePageController";

export const Header = () => {
  const { currentPageInfo, showConversation } = usePageController();

  if (currentPageInfo.type === "home") {
    return null;
  }

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        padding: "1em 1.5em",
      })}
    >
      Parrodigm App
    </div>
  );
};
