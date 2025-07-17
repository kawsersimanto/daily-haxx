"use client";

import CrownIcon from "@/assets/navbar/crown.svg";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileMenuItem } from "@/constants/MenuItem";
import Image from "next/image";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    setOpenItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden p-0 h-auto w-auto"
        >
          <Menu className="!h-6 !w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader>
          <SheetTitle>
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
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col mt-12">
          {MobileMenuItem.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <Collapsible
                  open={openItems.includes(item.label)}
                  onOpenChange={() => toggleItem(item.label)}
                >
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full text-base justify-between h-auto !px-4 py-3 font-medium text-left"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openItems.includes(item.label) ? "rotate-180" : ""
                        }`}
                      />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {item.children.map((child) =>
                      child.isButton ? (
                        <button
                          key={child.label}
                          onClick={handleLogout}
                          className="block w-full text-left py-2 px-7 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        >
                          {child.label}
                        </button>
                      ) : (
                        <Link
                          key={child.label}
                          href={child.href || "/"}
                          onClick={handleLinkClick}
                          className="block py-2 px-7 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <Link
                  href={item.href || "/"}
                  onClick={handleLinkClick}
                  className="block py-3 px-4 font-medium hover:bg-accent rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <SheetDescription className="sr-only">
          {process.env.NEXT_PUBLIC_APP_NAME} Off Canvas Menu
        </SheetDescription>
        <SheetFooter>
          <div className="flex items-center gap-2 font-medium">
            <Avatar className="text-secondary w-[40px] h-[40px]">
              <AvatarFallback className="bg-primary text-inherit">
                DA
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span>Hello, Danial</span>
              <Badge
                variant="outline"
                className="border-almond-yellow text-[10px] text-almond-yellow bg-light-yellow py-1 px-1 sm:px-2.5 leading-[1em]"
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
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
