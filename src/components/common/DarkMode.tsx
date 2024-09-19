"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const DarkMode = () => {
  const { setTheme, theme } = useTheme();

  const currentTheme = theme === "dark" ? "Light Mode" : "Dark Mode";

  return (
    <div className="w-full flex items-center justify-between">
      <p>{currentTheme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <Moon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        )}
      </button>
    </div>
  );
};

export default DarkMode;
