import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ArticleCardSkeleton = () => {
  return (
    <Card className="w-full p-2.5 rounded-xl gap-3.5 shadow-none">
      {/* Image placeholder */}
      <div className="overflow-hidden rounded xl:h-[163px] lg:h-[180px] md:h-[200px] sm:h-[243px] h-[200px]">
        <Skeleton className="w-full h-full" />
      </div>

      <CardContent className="p-0">
        {/* Title placeholder */}
        <Skeleton className="h-5 w-3/4 mt-3.5 mb-3.5 rounded-md" />

        {/* Metadata placeholder */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-20 rounded" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-16 rounded" />
        </div>
      </CardContent>
    </Card>
  );
};
