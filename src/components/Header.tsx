"use client";

import { css } from "@/../../styled-system/css";
import Logo from "@/public/logo.svg";

export const Header = () => {
  return (
    <div
      className={css({
        display: "flex",
        padding: "1em 1.5em",
        gap: "0.5em",
        alignItems: "center",
      })}
    >
      <Logo width={32} height={32} fill="#000000" />
      <div className={css({ color: "#000000", fontSize: "1.25em", fontWeight: "bold" })}>Parrodigm</div>
    </div>
  );
};
