"use client";

import { usePathname } from "next/navigation";
import { css } from "@/../../styled-system/css";
import Logo from "../app/parrodigm_logo.svg";
import Setting from "../../public/setting.svg";

export const Header = () => {
  const pathname = usePathname();
  const showSetting = pathname !== "/select";

  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        padding: "25px",
        marginTop: "55px",
      })}
    >
      <Logo className={css({ width: "10em" })} />
      {showSetting && (
        <Setting
          className={css({
            width: "1.5em",
            height: "1.5em",
            marginTop: "5px",
          })}
          style={{ alignSelf: "center" }}
        />
      )}
    </div>
  );
};
