import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const PollDetailsSkeleton = () => {
  return (
    <CardContent className="md:px-7.5 px-5">
      {/* success/alert area (skeleton) */}
      <div className="mb-4">
        <Skeleton className="h-4 w-1/3 rounded-md" />
      </div>

      {/* title */}
      <div className="mb-6">
        <Skeleton className="h-7 md:h-9 w-3/4 rounded" />
      </div>

      {/* options list */}
      <div className="flex flex-col gap-3.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {/* total votes */}
      <div className="my-5 text-center">
        <Skeleton className="h-5 w-32 mx-auto rounded-md" />
      </div>
    </CardContent>
  );
};
