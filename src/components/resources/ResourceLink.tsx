"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface ResourceNavLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export function ResourceNavLink({
  href,
  children,
  className,
  activeClassName = "text-primary font-semibold",
  exact = true,
  ...props
}: ResourceNavLinkProps) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname.startsWith(String(href));

  return (
    <Link
      href={href}
      className={cn(
        "transition-colors",
        isActive
          ? activeClassName
          : "text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
