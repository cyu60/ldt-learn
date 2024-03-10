import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import SidebarItem from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

export const Sidebar: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex min-h-screen lg:w-[256px] lg:fixed px-4 flex-col",
        className
      )}
    >
      {/* <div className="flex flex-col"> */}
      <Link href={"/learn"}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          {/* <Image src="/mascot.svg" height={40} width=
{40} alt="Mascot" /> */}
          <h1 className="text-2xl font-extrabold text-orange-600 tracking-wide">
            Learn LDT
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          iconSrc="Learn Logo.svg"
          label="learn"
          href="/learn"
        ></SidebarItem>
        {/* <SidebarItem
          iconSrc="Learn Logo.svg"
          label="leaderboard"
          href="/leaderboard"
        ></SidebarItem>
        <SidebarItem
          iconSrc="Learn Logo.svg"
          label="quest"
          href="/quest"
        ></SidebarItem>
        <SidebarItem
          iconSrc="Learn Logo.svg"
          label="shop"
          href="/shop"
        ></SidebarItem> */}
      </div>
      <div className="p—4 mb-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
    // </div>
  );
};
// export const Sidebar = ({className:string}) => {
//   return (
//     <div className="flex bg-blue-500 min-h-screen lg:w-[256px] lg:fixed">
//       sidebar
//     </div>
//   );
// };
