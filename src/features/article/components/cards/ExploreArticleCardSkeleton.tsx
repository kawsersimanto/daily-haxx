import { Skeleton } from "@/components/ui/skeleton";

export const ExploreArticleCardSkeleton = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-center gap-7 not-first:pt-[30px] first:pt-0 pb-[30px] not-last:border-b not-last:border-border">
      {/* Image skeleton */}
      <Skeleton className="rounded-xl md:w-[218px] w-full h-[170px] shrink-0" />

      {/* Text content skeleton */}
      <div className="flex flex-col gap-3">
        {/* Company name */}
        <Skeleton className="h-4 w-32 rounded-md" />

        {/* Title */}
        <Skeleton className="h-6 w-[300px] rounded-md" />
        <Skeleton className="h-6 w-[250px] rounded-md" />

        {/* Optional description (if needed in future) */}
        {/* <Skeleton className="h-4 w-[400px] rounded-md" /> */}

        {/* Metadata */}
        <div className="flex items-center gap-2 mt-1">
          <Skeleton className="h-3 w-16 rounded-md" />
        </div>
      </div>
    </div>
  );
};
