"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  Wallet,
  BarChart2,
  Settings,
  HelpCircle,
  SendIcon,
} from "lucide-react";

import DarkMode from "@/components/common/DarkMode";
import logo from "@/assets/icons/Logo-main.png";
import LogoWhite from "@/assets/icons/Logo-main-white.png";
import { Icons } from "./Icons";

export const mainMenuItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/payments", icon: SendIcon, label: "Payment" },
  { href: "/payments/create-qr", icon: Icons.qrcode, label: "Create QR code" },
  { href: "/transactions", icon: FileText, label: "Transactions" },
  { href: "/wallet", icon: Wallet, label: "My Wallet" },
  { href: "/reports", icon: BarChart2, label: "Reports" },
];

export const subMenuItems = [
  { href: "/settings", icon: Settings, label: "Setting" },
  { href: "/help", icon: HelpCircle, label: "Help Center" },
];

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="bg-white dark:bg-black flex flex-col border-r border-gray-400 dark:border-gray-600 justify-between w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex flex-col gap-10">
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
        <nav>
          <p className="text-lg text-gray-500 font-semibold px-4 mb-2">
            Main Menu
          </p>
          {mainMenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center py-2.5 px-4 my-1 rounded transition duration-200 text-gray-700 dark:text-gray-400 ${
                isActive(item.href)
                  ? "bg-primary !text-white"
                  : "dark:hover:text-white hover:text-primary"
              }`}
            >
              {React.isValidElement(item.icon) ? (
                <Icons.qrcode />
              ) : (
                <item.icon size={24} />
              )}
              <p className="ml-2">{item.label}</p>
            </Link>
          ))}
          <p className="text-lg text-gray-500 font-semibold px-4 mt-4 mb-2">
            Preferences
          </p>

          {subMenuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`block py-2.5 px-4 my-1 rounded transition duration-200 text-gray-700 dark:text-gray-400 ${
                isActive(item.href)
                  ? "bg-primary dark:bg-gray-900 !text-white"
                  : "dark:hover:text-white hover:text-primary"
              }`}
            >
              <item.icon className="inline-block mr-2" size={24} /> {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto">
        <hr className="my-4 border-gray-200" />

        <div className="flex items-center justify-between px-4 py-2">
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
