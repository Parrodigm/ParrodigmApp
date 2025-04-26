import { styled } from "../../styled-system/jsx";

export const Button = styled("button", {
  base: {
    display: "flex",
    padding: "10px 20px",
    color: "#ffffff",
    backgroundColor: "#9147ff",
    border: "none",
    borderRadius: "5px",
    fontSize: "15px",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    userSelect: "none",
    outline: "none",
    cursor: "pointer",
    "&:hover:not(:disabled)": {
      backgroundColor: "#771dff",
    },
    "&:active:not(:disabled)": {
      backgroundColor: "#ff640a",
    },
    "&:disabled": {
      backgroundColor: "#b6b6b6",
      cursor: "not-allowed",
    },
  },
});
