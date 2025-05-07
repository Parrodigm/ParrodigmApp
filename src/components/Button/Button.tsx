"use client";

import { styled } from "@/styled-system/jsx";
import Trash from "@/public/Trash.svg";
import React from "react";

const StyledButton = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "0.75rem",
    fontWeight: "500",
    transition: "all 0.2s",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  variants: {
    size: {
      sm: {
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
      },
      md: {
        padding: "0.5rem 2.5rem",
        fontSize: "1rem",
      },
      lg: {
        padding: "0.75rem 1.5rem",
        fontSize: "1.125rem",
      },
    },
    variant: {
      primary: {
        backgroundColor: "#6294FF",
        color: "white",
        _hover: {
          backgroundColor: "#2563eb",
        },
      },
      start: {
        backgroundColor: "#6294FF",
        color: "white",
        borderRadius: "10rem",
        width: "300px",
        transition: "all 0.3s ease",
        _hover: {
          backgroundColor: "#f3f4f6",
          backdropFilter: "blur(4px)",
          color: "#6294FF",
        },
      },
      icon: {
        padding: "0.5rem",
        backgroundColor: "#6294FF",
        borderRadius: "xl",
        _hover: {
          backgroundColor: "#d1d5db",
        },
      },

      noBackground: {
        padding: "0.5rem",
        _hover: {
          backgroundColor: "#d1d5db",
        },
      },

      back: {
        backgroundColor: "#ef4444",
        color: "white",
        _hover: {
          backgroundColor: "#dc2626",
        },
      },
      oval: {
        backgroundColor: "#A0BEFF",
        color: "white",
        borderRadius: "full",
        fontSize: "0.75rem",
        fontWeight: "600",
        width: "15px",
        height: "10px",
        padding: "0",
        _hover: {
          backgroundColor: "#6294FF",
          // transform: "scale(1.05)",
        },
      },
      trash: {
        padding: "0",
        backgroundColor: "transparent",
        transition: "none",
        _hover: {
          opacity: 0.8,
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

// 기본 버튼 컴포넌트
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "start"
    | "icon"
    | "noBackground"
    | "back"
    | "oval"
    | "trash";
  size?: "sm" | "md" | "lg";
}

const Button = ({ variant, ...props }: ButtonProps) => {
  // trash 버튼 variant인 경우 Trash 아이콘 사용
  if (variant === "trash") {
    return (
      <StyledButton variant="trash" {...props}>
        <Trash />
      </StyledButton>
    );
  }
  // 그 외 일반 버튼
  return <StyledButton variant={variant} {...props} />;
};

export default Button;
