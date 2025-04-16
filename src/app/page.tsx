import { css } from "../../styled-system/css";

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
      ></div>
    </div>
  );
}
