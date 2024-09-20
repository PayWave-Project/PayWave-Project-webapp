import React from "react";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-black">
          <div className="container mx-auto md:px-6 px-3 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
