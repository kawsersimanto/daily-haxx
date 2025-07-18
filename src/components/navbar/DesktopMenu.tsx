"use client";

import { menu } from "@/constants/menu";
import { ChevronDown } from "lucide-react";
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
      {menu.map((item) =>
        item.children ? (
          <DropdownMenu key={item.label}>
            <DropdownMenuTrigger className="flex items-center text-lg text-surface-dark hover:text-primary font-work-sans font-medium transition-colors duration-300 gap-2 outline-none">
              <span>{item.label}</span>
              <ChevronDown className="w-[15px] object-contain" />
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
            className="text-lg text-surface-dark hover:text-primary font-work-sans font-medium transition-colors duration-300"
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
};

export default DesktopMenu;
