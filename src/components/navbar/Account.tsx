import AccountIcon from "@/assets/navbar/account.svg";
import {
  ChevronDown,
  CreditCard,
  Crown,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Account = () => {
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
      <DropdownMenuContent className="w-64 p-2" align="start">
        <div className="flex items-center justify-between px-2 mb-2">
          <span className="text-sm font-semibold text-popover-foreground">
            Hi, Danial
          </span>
          <Badge
            variant="outline"
            className="border-yellow-400 text-yellow-600 bg-yellow-50"
          >
            <Crown className="w-3 h-3 mr-1" />
            Premium
          </Badge>
        </div>

        <DropdownMenuSeparator className="mt-3" />

        <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-lg">
          <User className="w-5 h-5 text-gray-600" />
          <span className="text-sm">Profile</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-lg">
          <CreditCard className="w-5 h-5 text-gray-600" />
          <span className="text-sm">Billing</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-lg">
          <Settings className="w-5 h-5 text-gray-600" />
          <span className="text-sm">Settings</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-50 rounded-lg">
          <LogOut className="w-5 h-5 text-gray-600" />
          <span className="text-sm">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Account;
