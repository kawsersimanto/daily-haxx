import { Card, CardContent } from "@/components/ui/card";
import { IArticleProps } from "@/features/article";
import { formatDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";

export const Article = ({ data }: IArticleProps) => {
  return (
    <Link href={`/article/${data?.slug}`} className="h-full">
      <Card className="w-full p-2.5 rounded-xl gap-3.5 shadow-none h-full">
        <div className="overflow-hidden rounded xl:h-[163px] lg:h-[180px] md:h-[200px] sm:h-[243px] h-[200px]">
          <Image
            src={data?.coverImage || "/placeholder.png"}
            alt={data?.title}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-0 flex flex-col grow">
          <h2 className="text-[17px] font-medium text-foreground mb-3.5 leading-6 line-clamp-2">
            {data?.title || "No Title Found"}
          </h2>
          <div className="flex items-center text-sm text-light-muted gap-2 mt-auto">
            <span className="xl:text-sm lg:text-xs text-sm capitalize">
              {formatDate(data?.createdAt)}
            </span>
            {data?.companyName && (
              <>
                <span>•</span>
                <span className="xl:text-sm lg:text-xs text-sm block lg:hidden xl:block">
                  {data?.companyName}
                </span>
                <span className="xl:text-sm lg:text-xs text-sm hidden lg:block xl:hidden">
                  {data?.companyName?.split(" ")[0]}
                </span>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
