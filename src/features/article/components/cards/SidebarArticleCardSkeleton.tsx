import { Skeleton } from "@/components/ui/skeleton";

export const SidebarArticleCardSkeleton = () => {
  return (
    <div className="py-[18px] px-6 flex flex-col gap-2 not-last:border-b border-border">
      {/* Title skeleton (3 lines to mimic line-clamp-3) */}
      <Skeleton className="h-5 w-full rounded-md" />
      <Skeleton className="h-5 w-5/6 rounded-md" />
      <Skeleton className="h-5 w-3/4 rounded-md" />

      {/* Metadata skeleton */}
      <div className="flex items-center gap-2 mt-1">
        <Skeleton className="h-3 w-16 rounded-md" />
        <Skeleton className="h-3 w-3 rounded-full" /> {/* dot */}
        <Skeleton className="h-3 w-24 rounded-md" />
      </div>
    </div>
  );
};
