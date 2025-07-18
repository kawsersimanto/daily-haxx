import DarkSearch from "@/assets/navbar/dark-search.svg";
import Search from "@/assets/navbar/search.svg";
import { Account, DesktopMenu, MobileMenu } from "@/components/navbar";
import Switcher from "@/components/switcher/Switcher";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="lg:py-6 py-4 bg-background dark:bg-surface-deep sticky top-0 left-0 right-0 border-b border-b-border z-50">
      <div className="container">
        <div className="flex items-center justify-between gap-2">
          <div>
            <Link href="/">
              <Image
                src="/logo.svg"
                width={180}
                height={40}
                className="xl:w-[180px] xs:w-[140px] w-[120px] h-auto lg:h-[40px] object-contain dark:hidden"
                alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
              />
              <Image
                src="/dark-logo.svg"
                width={180}
                height={40}
                className="xl:w-[180px] xs:w-[140px] w-[120px] h-auto lg:h-[40px] object-contain not-dark:hidden"
                alt={`${process.env.NEXT_PUBLIC_APP_NAME}`}
              />
            </Link>
          </div>
          <div>
            <DesktopMenu />
          </div>
          <div className="flex items-center sm:gap-[18px] gap-3">
            <Switcher />
            <Link href="/search">
              <Image
                src={Search}
                alt="Search icon"
                width={25}
                height={25}
                className="xl:w-[25px] w-[20px] xl:h-[25px] h-[20px] object-contain dark:hidden"
              />
              <Image
                src={DarkSearch}
                alt="Search icon"
                width={25}
                height={25}
                className="xl:w-[25px] w-[20px] xl:h-[25px] h-[20px] object-contain not-dark:hidden"
              />
            </Link>
            <MobileMenu />
            <div className="sm:block hidden">
              <Account />
              {/* <Subscribe /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
