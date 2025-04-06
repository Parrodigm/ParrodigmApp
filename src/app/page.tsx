import { css } from "../../styled-system/css";

import LogoImage from "./logo.svg";

import { LineEdit } from "@/components/LineEdit";
import { Button } from "@/components/Button";

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
          gap: "0.5em",
          padding: "1em 0",
        })}
      >
        <LogoImage className={css({ width: "3em", fill: "#1883E0" })} />
        <div
          className={css({
            color: "#1883E0",
            fontSize: "2em",
            fontWeight: "bold",
          })}
        >
          parradigm
        </div>
      </div>
      <div className={css({ padding: "1em", fontSize: "2em" })}>
        Hello World!
      </div>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          padding: "1em",
        })}
      >
        <LineEdit type="text" placeholder="Placeholder" />
        <Button>Button</Button>
      </div>
    </div>
  );
}
