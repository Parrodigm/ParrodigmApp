"use client";

import { css } from "@/../../styled-system/css";
import { SystemStyleObject } from "@/styled-system/types";

import { useConversationState } from "../stores/useConversationState";

export const UserMessageViewer = ({ css: cssProps }: { css?: SystemStyleObject }) => {
  const { getLastUserMessage } = useConversationState();

  return <div className={css({ fontSize: "1em", fontWeight: "bold" }, cssProps)}>{getLastUserMessage()?.content.text}</div>;
};
