"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const PollCardSkeleton = () => {
  return (
    <Card className="w-full p-2 rounded-[6px] gap-3.5 shadow-none h-full">
      {/* Image Skeleton */}
      <div className="overflow-hidden rounded xl:h-[248px] lg:h-[240px] md:h-[200px] sm:h-[243px] h-[200px]">
        <Skeleton className="w-full h-full" />
      </div>

      <CardContent className="p-0 grow flex flex-col">
        {/* Company name */}
        <Skeleton className="h-4 w-28 mb-2 mt-3" />

        {/* Title */}
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-3/4 mb-3.5" />

        {/* Date */}
        <div className="flex items-center gap-2 mt-auto">
          <Skeleton className="h-4 w-20" />
        </div>
      </CardContent>
    </Card>
  );
};
