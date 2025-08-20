"use client";

import { ResourceSidebar } from "@/components/resources/ResourceSidebar";
import { useSelectedLayoutSegment } from "next/navigation";

const ResourceLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const segment = useSelectedLayoutSegment();

  return (
    <section className="pt-5 md:pb-10 pb-6">
      <div className="container">
        <div className="flex gap-5">
          <ResourceSidebar activeSegment={segment} />
          <div className="grow">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLayout;
