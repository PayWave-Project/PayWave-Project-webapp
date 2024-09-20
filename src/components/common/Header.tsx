"use client";

import { useState } from "react";
import { Bell, ChevronDown, Menu, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DynamicHeaderText from "./DynamicHeaderText";
import Sheet from "./Sheet";

const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);

  return (
    <header className="bg-white dark:bg-black shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto lg:mx-6 py-4 px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between">
          <DynamicHeaderText />
          <div className="ml-4 flex gap-4 items-center md:ml-6">
            <button className="hidden lg:flex p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400">
              <Bell className="h-6 w-6" aria-hidden="true" />
            </button>
            <Avatar className="flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="md:flex hidden items-center gap-1 cursor-pointer px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400">
              <p className="text-sm font-semibold text-black dark:text-white">
                John Doe{" "}
              </p>{" "}
              <ChevronDown className="h-6 w-6" aria-hidden="true" />
            </div>
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400"
              onClick={toggleSheet}
            >
              {isSheetOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
    </header>
  );
};

export default Header;
