import Search from "@/assets/navbar/search.svg";
import Switcher from "@/components/switcher/Switcher";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <header className="py-6 bg-background dark:bg-surface-deep sticky top-0 left-0 right-0 border-b border-b-border">
      <div className="container">
        <div className="flex items-center justify-between gap-2">
          <div>
            <Link href="/">
              <Image
                src="/logo.svg"
                width={180}
                height={40}
                className="w-[180px] h-[40px] object-contain"
                alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
              />
            </Link>
          </div>
          <div>
            <DesktopMenu />
          </div>
          <div className="flex items-center gap-[18px]">
            <Switcher />
            <Link href="/search">
              <Image
                src={Search}
                alt="Search icon"
                width={25}
                height={25}
                className="w-[25px] h-[25px] object-contain"
              />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-lg text-surface-dark hover:text-primary font-work-sans font-medium transition-colors duration-300 gap-2 outline-none border-2 border-primary rounded-xl px-4 py-2">
                <Image
                  src="/plane.svg"
                  width={18}
                  height={18}
                  alt="Plane Icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <span>Subscribe</span>
                <Image
                  src="/chevron.svg"
                  width={10}
                  height={5}
                  alt="Chevron"
                  className="w-[15px] h-[8px] object-contain"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[178px]">
                <DropdownMenuItem className="font-medium" asChild>
                  <Link href={`/`}>Premium</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
