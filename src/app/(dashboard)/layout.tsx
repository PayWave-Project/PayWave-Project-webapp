import React from "react";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import { SessionProvider } from "@/components/providers/Session";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 min-h-svh overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-black">
            <div className="container mx-auto md:px-6 px-3 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SessionProvider>
  );
}
