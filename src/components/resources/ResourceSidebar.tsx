"use client";

import { Calendar, Database } from "lucide-react";
import Link from "next/link";

const links = [
  {
    segment: "drug-database",
    href: "/resources/drug-database",
    label: "Drug Database",
    icon: Database,
  },
  {
    segment: "catalyst-calendar",
    href: "/resources/catalyst-calendar",
    label: "Catalyst Calendar",
    icon: Calendar,
  },
];

export const ResourceSidebar = ({
  activeSegment,
}: {
  activeSegment: string | null;
}) => {
  return (
    <div>
      <h2 className="mb-8">Resources</h2>
      <div className="flex flex-col gap-5">
        {links.map(({ segment, href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors flex items-center gap-2 ${
              activeSegment === segment
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="w-5 h-5 object-contain" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};
