import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/icons/Logo-main.png";
import LogoWhite from "@/assets/icons/Logo-main-white.png";
import { mainMenuItems, subMenuItems } from "./Sidebar";
import { LogOut } from "lucide-react";
import ConfirmLogoutModal from "../modals/ConfirmLogoutModal";


interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sheet: React.FC<SheetProps> = ({ isOpen, onClose }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {" "}
        <div
          ref={sheetRef}
          className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="h-screen py-4 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <div className="flex items-center space-x-2 px-4">
                <Image
                  src={logo}
                  alt="Paywave"
                  width={100}
                  height={100}
                  className="w-[120px] h-10 block dark:hidden"
                />
                <Image
                  src={LogoWhite}
                  alt="Paywave"
                  width={100}
                  height={100}
                  className="w-[120px] h-10 hidden dark:block"
                />
              </div>
              <div className="px-2">
                <p className="text-lg text-gray-500 font-semibold px-4 mb-2">
                  Main Menu
                </p>
                {mainMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`block py-2.5 px-4 my-1 rounded transition duration-200 text-gray-700 dark:text-gray-400 ${
                      isActive(item.href)
                        ? "bg-primary !text-white"
                        : "dark:hover:text-white hover:text-primary"
                    }`}
                  >
                    <item.icon className="inline-block mr-2" size={20} />{" "}
                    {item.label}
                  </Link>
                ))}
                <p className="text-lg text-gray-500 font-semibold px-4 mt-4 mb-2">
                  Preferences
                </p>

                {subMenuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={handleLinkClick}
                    className={`block py-2.5 px-4 my-1 rounded transition duration-200 text-gray-700 dark:text-gray-400 ${
                      isActive(item.href)
                        ? "bg-primary dark:bg-gray-900 !text-white"
                        : "dark:hover:text-white hover:text-primary"
                    }`}
                  >
                    <item.icon className="inline-block mr-2" size={20} />{" "}
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-auto mx-2">
              <hr className="my-4 border-gray-200" />
              <button
                onClick={() => {
                  setIsLogoutModalOpen(true);
                  handleLinkClick();
                }}
                className="flex justify-between text-gray-700 dark:text-gray-400 hover:text-red-500 px-4 items-center gap-2 cursor-pointer"
              >
                Logout <LogOut />
              </button>
            </div>
          </nav>
        </div>
      </div>
      {isLogoutModalOpen && (
        <ConfirmLogoutModal onCancel={() => setIsLogoutModalOpen(false)} />
      )}
    </>

  );
};

export default Sheet;
