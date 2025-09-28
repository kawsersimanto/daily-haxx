import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const LatestArticleSkeleton = () => {
  return (
    <div className="md:col-span-3 col-span-1">
      <Card className="w-full p-3.5 rounded-xl gap-3.5 shadow-none">
        {/* Image skeleton */}
        <Skeleton className="rounded lg:h-[438px] h-[280px] w-full" />

        {/* Card content skeleton */}
        <CardContent className="p-0 flex flex-col gap-4">
          {/* Title skeleton (2 lines to mimic line-clamp-2) */}
          <Skeleton className="h-7 sm:h-9 w-3/4 rounded-md" />
          <Skeleton className="h-7 sm:h-9 w-2/3 rounded-md" />

          {/* Metadata skeleton */}
          <div className="flex items-center gap-2 mt-1">
            <Skeleton className="h-3 w-20 rounded-md" />
            <Skeleton className="h-3 w-3 rounded-full" /> {/* dot */}
            <Skeleton className="h-3 w-24 rounded-md" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
