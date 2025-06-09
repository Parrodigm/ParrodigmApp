"use client";

import { css } from "@/../../styled-system/css";

export const AnimatedText = ({
  children,
  split = true,
  fontSize = "1.4em",
  color = "#000000",
}: {
  children: string;
  split?: boolean;
  fontSize?: string;
  color?: string;
}) => {
  if (!children) {
    return null;
  }

  return (
    <div className={css({ display: "flex", gap: "0.05em 0.3em", fontSize: fontSize, flexWrap: "wrap", color: color })}>
      {split ? (
        children.split(" ").map((word, index) => (
          <span
            key={children + index}
            className={css({
              opacity: 0,
              transform: "translateY(20px)",
              animation: "floatUp 0.5s ease forwards",
              animationFillMode: "forwards",
              fontWeight: "bold",
            })}
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            {word}
          </span>
        ))
      ) : (
        <span
          className={css({
            opacity: 0,
            transform: "translateY(20px)",
            animation: "floatUp 0.5s ease forwards",
            animationFillMode: "forwards",
            fontWeight: "bold",
          })}
        >
          {children}
        </span>
      )}
    </div>
  );
};
