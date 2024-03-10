import { MobileHeader } from "@/components/mobile-header";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { Sidebar } from "@/components/sidebar";
import React from "react";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Sidebar className={"hidden lg:flex"}></Sidebar>
      <MobileHeader></MobileHeader>
      <main className="lg:pl-[256px] min-h-screen pt-[50px] lg:pt-0">
        <div className="max-w-[1056px] mx-auto pt-6 min-h-screen">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
