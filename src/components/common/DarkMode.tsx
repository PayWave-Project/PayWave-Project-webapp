"use client";

import { useTheme } from "next-themes";

import ThemeIcon from "./ThemeIcon";

const DarkMode = () => {
  const { theme } = useTheme();

  const currentTheme = theme === "dark" ? "Light Mode" : "Dark Mode";

  return (
    <div className="w-full flex items-center justify-between gap-4">
      <p>{currentTheme}</p>
      <ThemeIcon />
    </div>
  );
};

export default DarkMode;
