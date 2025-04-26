import { styled } from "../../styled-system/jsx";

export const LineEdit = styled("input", {
  base: {
    padding: "8px 15px",
    border: "2px solid",
    borderColor: "#0000001a",
    backgroundColor: "#0000001a",
    backgroundClip: "padding-box",
    borderRadius: "5px",
    outline: "unset",
    transition: "border 0.1s ease-in, background-color 0.1s ease-in",
    "&:hover:not(:focus)": {
      borderColor: "#00000033",
    },
    _focus: {
      borderColor: "#772ce8",
      backgroundColor: "#ffffff",
    },
  },
});
