"use client";

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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileMenuItem } from "@/constants/MenuItem";
import Image from "next/image";

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
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href || "/"}
                        onClick={handleLinkClick}
                        className="block py-2 px-7 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
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
      </SheetContent>
    </Sheet>
  );
}
