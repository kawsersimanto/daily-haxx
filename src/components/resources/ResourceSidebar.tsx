"use client";

import Link from "next/link";

const links = [
  {
    segment: "drug-database",
    href: "/resources/drug-database",
    label: "Drug Database",
  },
  {
    segment: "catalyst-calendar",
    href: "/resources/catalyst-calendar",
    label: "Catalyst Calendar",
  },
];

export const ResourceSidebar = ({
  activeSegment,
}: {
  activeSegment: string | null;
}) => {
  return (
    <div>
      <h2>Resources</h2>
      <div className="flex flex-col gap-2">
        {links.map(({ segment, href, label }) => (
          <Link
            key={href}
            href={href}
            className={`transition-colors ${
              activeSegment === segment
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};
