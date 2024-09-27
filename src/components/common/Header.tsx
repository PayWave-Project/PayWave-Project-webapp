"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, ChevronDown, LogOut, Menu, Settings, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import DynamicHeaderText from "./DynamicHeaderText";
import Sheet from "./Sheet";
import ThemeIcon from "./ThemeIcon";
import Link from "next/link";
import ConfirmLogoutModal from "../modals/ConfirmLogoutModal";
import { useAuthStore } from "@/store";

const Header = () => {
  const firstName = useAuthStore((state) => state.firstName);
  const lastName = useAuthStore((state) => state.lastName);

  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setIsLogoutModalOpen(true);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);

  return (
    <header className="bg-white dark:bg-black shadow-sm border-b border-gray-100 dark:border-gray-600">
      <div className="lg:mx-6 py-4 px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between">
          <DynamicHeaderText />
          <div className="ml-4 flex gap-4 items-center md:ml-6">
            <button className="hidden lg:flex p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400">
              <Bell className="h-6 w-6" aria-hidden="true" />
            </button>
            <Avatar className="flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>PJ</AvatarFallback>
            </Avatar>
            <div className="relative">
              <div
                onClick={toggleDropdown}
                className="md:flex hidden items-center gap-1 cursor-pointer px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400"
              >
                <p className="min-w-[80px] text-sm capitalize font-semibold text-black dark:text-white">
                  {firstName} {lastName}
                </p>{" "}
                <ChevronDown className="h-6 w-6" aria-hidden="true" />
              </div>
              {isDropdownOpen && (
                <div className="hidden md:flex flex-col absolute right-0 top-12 w-full bg-white dark:bg-gray-800 !rounded-lg shadow-lg z-10">
                  <button
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-t-lg w-full text-left"
                  >
                    <ThemeIcon />
                  </button>
                  <Link
                    href="/settings"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                  >
                    <Settings className="inline-block mr-2 h-4 w-4" /> Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-red-500 dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-b-lg w-full text-left"
                  >
                    <LogOut className="inline-block mr-2 h-4 w-4" /> Logout
                  </button>
                </div>
              )}
            </div>
            {isLogoutModalOpen && (
              <ConfirmLogoutModal
                onCancel={() => setIsLogoutModalOpen(false)}
              />
            )}

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
