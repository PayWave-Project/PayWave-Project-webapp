"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  Wallet,
  Settings,
  HelpCircle,
  SendIcon,
  ScanLine,
  ChevronRight,
  ChevronLeft,
  Bell,
} from "lucide-react";

import logo from "@/assets/icons/Logo-main.png";
import LogoWhite from "@/assets/icons/Logo-main-white.png";
import SmLogo from "@/assets/icons/Logo.svg";
import SmLogoWhite from "../../assets/icons/LogoWhite.svg";

import { Icons } from "./Icons";

export const mainMenuItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/payments", icon: SendIcon, label: "Payment" },
  { href: "/payments/create-qr", icon: Icons.qrcode, label: "Create QR" },
  { href: "/payments/scan-qr", icon: ScanLine, label: "Scan QR" },
  { href: "/transactions", icon: FileText, label: "Transactions" },
  { href: "/wallet", icon: Wallet, label: "My Wallet" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
];

export const subMenuItems = [
  { href: "/settings", icon: Settings, label: "Setting" },
  { href: "/help", icon: HelpCircle, label: "Help Center" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isActive = (href: string) => {
    return pathname === href;
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`bg-white dark:bg-black h-screen sticky top-0 hidden md:flex flex-col border-r border-gray-400 dark:border-gray-600 justify-between ${
        isCollapsed ? "lg:!w-20 " : "lg:w-64"
      } space-y-6 py-7 px-2 transform transition-all duration-200 ease-in-out md:w-20 lg:w-64 `}
    >
      <div className="flex flex-col gap-10">
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "px-4"
          } md:justify-center lg:px-4`}
        >
          <div className="hidden md:block lg:hidden">
            <Image
              src={SmLogo}
              alt="Paywave"
              width={30}
              height={30}
              className="block dark:hidden"
            />
            <Image
              src={SmLogoWhite}
              alt="Paywave"
              width={30}
              height={30}
              className="hidden dark:block"
            />
          </div>
          {isCollapsed ? (
            <div className="hidden lg:block">
              <Image
                src={SmLogo}
                alt="Paywave"
                width={30}
                height={30}
                className="block dark:hidden"
              />
              <Image
                src={SmLogoWhite}
                alt="Paywave"
                width={30}
                height={30}
                className="hidden dark:block"
              />
            </div>
          ) : (
            <div className="md:hidden lg:block">
              <Image
                src={logo}
                alt="Paywave"
                width={150}
                height={50}
                className="block dark:hidden"
              />
              <Image
                src={LogoWhite}
                alt="Paywave"
                width={150}
                height={50}
                className="hidden dark:block"
              />
            </div>
          )}
        </div>
        <nav>
          {!isCollapsed && (
            <p className="hidden lg:flex text-lg text-gray-500 font-semibold px-4 mb-2">
              Main Menu
            </p>
          )}{" "}
          {mainMenuItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`flex items-center ${
                  isCollapsed ? "justify-center" : ""
                } py-2.5 px-4 my-1 rounded transition duration-200 text-gray-700 dark:text-gray-400 ${
                  isActive(item.href)
                    ? "bg-primary !text-white"
                    : "dark:hover:text-white hover:text-primary"
                } md:justify-center lg:justify-start`}
              >
                {isCollapsed ? (
                  <div className="w-full flex items-center justify-center">
                    {React.isValidElement(item.icon) ? (
                      <Icons.qrcode />
                    ) : (
                      <item.icon size={24} />
                    )}
                  </div>
                ) : (
                  <div>
                    {React.isValidElement(item.icon) ? (
                      <Icons.qrcode />
                    ) : (
                      <item.icon size={24} />
                    )}
                  </div>
                )}
                {hoveredItem === item.label && (
                  <div className="hidden md:flex lg:hidden whitespace-nowrap absolute left-12 ml-2 top-1/2 -translate-y-1/2 z-[100] px-2 py-1 text-primary dark:text-white bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400 text-sm rounded shadow-md">
                    {item.label}
                  </div>
                )}
                {isCollapsed && hoveredItem === item.label && (
                  <div className="hidden lg:flex whitespace-nowrap absolute left-12 ml-2 top-1/2 -translate-y-1/2 z-[100] px-2 py-1 text-primary dark:text-white bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400 text-sm rounded shadow-md">
                    {item.label}
                  </div>
                )}
                {isCollapsed ? (
                  <p className="hidden">{item.label}</p>
                ) : (
                  <p className="ml-2 hidden lg:inline">{item.label}</p>
                )}
              </Link>
            </div>
          ))}
          {!isCollapsed && (
            <p className="hidden lg:flex text-lg text-gray-500 font-semibold px-4 mt-4 mb-2">
              Preferences
            </p>
          )}
          {subMenuItems.map((item, index) => (
            <div key={index} className="relative">
              <Link
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`flex items-center ${
                  isCollapsed ? "justify-center" : ""
                } py-2.5 px-4 my-1 rounded transition duration-200 text-gray-700 dark:text-gray-400 ${
                  isActive(item.href)
                    ? "bg-primary dark:bg-gray-900 !text-white"
                    : "dark:hover:text-white hover:text-primary"
                } md:justify-center lg:justify-start`}
              >
                {isCollapsed ? (
                  <div className="w-full flex items-center justify-center">
                    {React.isValidElement(item.icon) ? (
                      <Icons.qrcode />
                    ) : (
                      <item.icon size={24} />
                    )}
                  </div>
                ) : (
                  <div>
                    {React.isValidElement(item.icon) ? (
                      <Icons.qrcode />
                    ) : (
                      <item.icon size={24} />
                    )}
                  </div>
                )}
                {hoveredItem === item.label && (
                  <div className="hidden md:flex lg:hidden whitespace-nowrap absolute left-12 ml-2 top-1/2 -translate-y-1/2 z-[100] px-2 py-1 text-primary dark:text-white bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400 text-sm rounded shadow-md">
                    {item.label}
                  </div>
                )}
                {isCollapsed && hoveredItem === item.label && (
                  <div className="hidden lg:flex whitespace-nowrap absolute left-12 ml-2 top-1/2 -translate-y-1/2 z-[100] px-2 py-1 text-primary dark:text-white bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400 text-sm rounded shadow-md">
                    {item.label}
                  </div>
                )}
                {isCollapsed ? (
                  <p className="hidden">{item.label}</p>
                ) : (
                  <p className="ml-2 hidden lg:inline">{item.label}</p>
                )}
              </Link>
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-auto">
        <hr className="hidden lg:flex my-4 border-gray-200" />
        <div
          className={`w-full flex items-center ${
            isCollapsed ? "justify-center" : "justify-between"
          } px-4 py-2 md:justify-center lg:justify-between`}
        >
          <button
            onClick={toggleSidebar}
            className="w-full hidden lg:flex justify-end relative"
            onMouseEnter={() => setHoveredItem("toggleSidebar")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {isCollapsed ? (
              <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <ChevronRight size={24} />
              </div>
            ) : (
              <div className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <ChevronLeft size={24} />
              </div>
            )}
            {hoveredItem === "toggleSidebar" && (
              <div className="whitespace-nowrap absolute left-12 top-1/2 -translate-y-1/2 z-[100] px-2 py-1 text-primary dark:text-white bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border border-gray-400 text-sm rounded shadow-md">
                {isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
