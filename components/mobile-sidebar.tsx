import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white"></Menu>
      </SheetTrigger>
      <SheetContent side="left" className="h-full z-[100] p-0">
        <Sidebar></Sidebar>
        {/* <SheetHeader>
          <SheetTitle>Menu</SheetTitle> */}
        {/* <SheetClose>×</SheetClose> */}
        {/* </SheetHeader> */}
        {/* <ul>
          <li>Search...</li>
          <li>GitHub</li>
          <li>Twitter</li>
          <li>Toggle theme</li>
          <li>Docs</li>
        </ul> */}
        {/* <SheetDescription>
          Extend the Dialog component to display content that complements the
          main content of the screen.
        </SheetDescription> */}
      </SheetContent>
    </Sheet>
  );
};
