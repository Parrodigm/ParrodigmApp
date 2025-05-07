"use client";

import { css } from "@/../../styled-system/css";
import { SystemStyleObject } from "@/styled-system/types";

import { useConversationState } from "../stores/useConversationState";

export const AssistantMessageViewer = ({ css: cssProps }: { css?: SystemStyleObject }) => {
  const { getLastAssistantMessage } = useConversationState();

  return <div className={css({ fontSize: "1.5em", fontWeight: "bold" }, cssProps)}>{getLastAssistantMessage()?.content.text}</div>;
};
