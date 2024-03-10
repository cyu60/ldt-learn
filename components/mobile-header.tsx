import { MobileSidebar } from "./mobile-sidebar";

export const MobileHeader = () => {
  return (
    <nav className="lg:hidden px-6 flex bg-orange-500 h-[50px] top-0 z-50 fixed w-full">
      <MobileSidebar></MobileSidebar>
    </nav>
  );
};
