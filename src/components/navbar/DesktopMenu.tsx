"use client";

import { MenuItem } from "@/constants/MenuItem";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const DesktopMenu = () => {
  return (
    <div className="xl:flex hidden items-center gap-8">
      {MenuItem.map((item) =>
        item.children ? (
          <DropdownMenu key={item.label}>
            <div></div>
            <DropdownMenuTrigger className="flex items-center text-lg dark:text-white text-surface-dark hover:text-primary font-work-sans font-medium transition-colors duration-300 gap-2 outline-none">
              <span>{item.label}</span>
              <Image
                src="/chevron.svg"
                width={10}
                height={5}
                alt="Chevron"
                className="w-[10px] h-[5px] object-contain"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.children.map((child) => (
                <DropdownMenuItem
                  key={child.label}
                  className="font-medium"
                  asChild
                >
                  <Link href={`${child.href}`}>{child.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            key={item.label}
            href={item.href!}
            className="text-lg dark:text-white text-surface-dark hover:text-primary font-work-sans font-medium transition-colors duration-300"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
};

export default DesktopMenu;
