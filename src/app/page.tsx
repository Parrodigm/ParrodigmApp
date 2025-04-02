import { css } from "../../styled-system/css";

import LogoImage from "./logo.svg";

export default function Home() {
  return (
    <div
      className={css({ display: "flex", flexDirection: "column", gap: "3em" })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        })}
      >
        <LogoImage className={css({ width: "10em" })} />
        <div className={css({ fontSize: "5em", fontWeight: "bold" })}>
          Parrot - The Voice Agent
        </div>
      </div>
      <div className={css({ padding: "1em", fontSize: "2em" })}>
        Hello World!
      </div>
    </div>
  );
}
