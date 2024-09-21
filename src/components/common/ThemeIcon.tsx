import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeIcon = () => {
  const { setTheme, theme } = useTheme();
  return (
    <button
      className="w-full flex items-center gap-2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Moon className="size-4 text-gray-700 dark:text-white dark:hover:text-white hover:text-primary " />
      ) : (
        <Sun className="size-4 text-gray-700 dark:text-white dark:hover:text-white hover:text-primary" />
      )}{" "}
      <p>Theme</p>
    </button>
  );
};

export default ThemeIcon;
