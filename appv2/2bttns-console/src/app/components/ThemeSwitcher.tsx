"use client";

import { useEffect } from "react";
import { themeChange } from "theme-change";

const themes = ["light", "dark", "synthwave"];

export type ThemeSwitcherProps = {};
export default function ThemeSwitcher(props: ThemeSwitcherProps) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <select data-choose-theme>
        {themes.map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </select>
    </>
  );
}
