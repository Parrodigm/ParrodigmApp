"use client";

import { styled } from "../../styled-system/jsx";
import type { HTMLStyledProps } from "../../styled-system/jsx";

type TextProps = HTMLStyledProps<"span"> & {
  children: React.ReactNode;
};

export const Text = (props: TextProps) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

const StyledText = styled("span", {
  base: {
    fontFamily: "inherit",
    lineHeight: "short",
  },
});
