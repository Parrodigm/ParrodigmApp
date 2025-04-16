import { css } from "../../styled-system/css";
import LogoImage from "./parrodigm_logo.svg";

export default function Home() {
  return (
    <div
      className={css({ display: "flex", flexDirection: "column", gap: "3em" })}
    >
      <div
        className={css({
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        })}
      >
        <LogoImage
          className={css({
            width: "10em",
            marginTop: "3em",
            paddingLeft: "1.5em",
          })}
        />
      </div>
    </div>
  );
}
