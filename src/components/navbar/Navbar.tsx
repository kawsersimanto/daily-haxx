import Search from "@/assets/navbar/search.svg";
import Switcher from "@/components/switcher/Switcher";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <header className="py-6 bg-white sticky top-0 left-0 right-0 border-b border-b-border">
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
