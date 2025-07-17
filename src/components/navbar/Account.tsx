"use client";

import AccountIcon from "@/assets/navbar/account.svg";
import CrownIcon from "@/assets/navbar/crown.svg";
import { ChevronDown, CreditCard, LogOut, Settings, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Account = () => {
  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center md:text-lg text-sm text-surface-dark dark:text-primary hover:text-primary font-work-sans font-medium transition-colors duration-300 md:gap-2 gap-1 outline-none border-2 border-primary rounded-xl md:px-4 px-2 md:py-2 py-1.5">
        <Image
          src={AccountIcon}
          width={18}
          height={18}
          alt="Plane Icon"
          className="md:w-[18px] w-[14px] md:h-[18px] object-contain"
        />
        <span>My Account</span>
        <ChevronDown className="md:w-[20px] w-[16px] object-contain" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[214px] p-2" align="start">
        <div className="flex items-center gap-3.5 px-2 mb-2">
          <span className="text-sm font-semibold text-popover-foreground">
            Hi, Danial
          </span>
          <Badge
            variant="outline"
            className="border-almond-yellow text-almond-yellow bg-light-yellow py-1.5 px-2.5 leading-[1em]"
          >
            <Image
              src={CrownIcon}
              width={11}
              height={11}
              alt="Crown Icon"
              className="md:w-[11px] w-[11px] md:h-[11px] object-contain"
            />
            Premium
          </Badge>
          {/* <Badge
            variant="outline"
            className="border-almond-yellow text-almond-yellow bg-light-yellow py-1.5 px-2.5 leading-[1em]"
          >
            Free
          </Badge> */}
        </div>

        <DropdownMenuSeparator className="mt-3" />

        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="flex items-center gap-2 py-1.5 cursor-pointer rounded-lg text-sm text-foreground"
          >
            <User className="w-3.5 h-3.5 !text-inherit" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="flex items-center gap-2 py-1.5 cursor-pointer rounded-lg text-sm text-foreground"
          >
            <CreditCard className="w-3.5 h-3.5 !text-inherit" />
            Billing
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            href="/"
            className="flex items-center gap-2 py-1.5 cursor-pointer rounded-lg text-sm text-foreground"
          >
            <Settings className="w-3.5 h-3.5 !text-inherit" />
            Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <div
            onClick={handleLogout}
            className="flex items-center gap-2 py-1.5  cursor-pointer rounded-lg text-sm text-foreground"
          >
            <LogOut className="w-3.5 h-3.5 !text-inherit" />
            Log out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Account;
