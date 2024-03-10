"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image"; // Fixed import statement
import Link from "next/link";

interface SidebarItemProps {
  label: string;
  iconSrc: string;
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({ label, iconSrc, href }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <div className="flex flex-row">
          <Image
            src={iconSrc}
            className="mr-5"
            height={32}
            width={32}
            alt={label}
          />
          <div className=" flex items-center justify-center">{label}</div>
        </div>
      </Link>
    </Button>
  );
};

export default SidebarItem;
