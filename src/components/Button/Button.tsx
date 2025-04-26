"use client";

import { styled } from "@/styled-system/jsx";

const Button = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    borderRadius: "0.75rem",
    fontWeight: "500",
    transition: "all 0.2s",
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

      cartQuantity: {
        backgroundColor: "#6294FF",
        color: "white",
        // _hover: {
        //   backgroundColor: "#2563eb",
        // },
        width: "6",
        height: "6",
        bg: "blue.500",
        px: "3",
        borderRadius: "full",
        align: "center",
        justify: "center",
        fontWeight: "bold",
        fontSize: "sm",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});

export default Button;
