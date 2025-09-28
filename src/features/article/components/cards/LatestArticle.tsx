import { Card, CardContent } from "@/components/ui/card";
import { IArticleProps } from "@/features/article";
import { formatDate } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";

export const LatestArticle = ({ data }: IArticleProps) => {
  return (
    <Link href={`/article/${data?.slug}`} className="md:col-span-3 col-span-1">
      <Card className="w-full p-3.5 rounded-xl gap-3.5 shadow-none">
        <div className="overflow-hidden rounded lg:h-[438px] h-[280px]">
          <Image
            src={data?.coverImage || "/placeholder.png"}
            alt={data?.title}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-0">
          <h2 className="sm:text-[28px] text-xl mb-4 line-clamp-2 text-foreground font-bold leading-[120%]">
            {data?.title || "No Title Found"}
          </h2>
          <div className="flex items-center text-sm text-light-muted gap-2">
            <span className="capitalize">{formatDate(data?.createdAt)}</span>
            {data?.companyName && (
              <>
                <span>•</span>
                <span>{data?.companyName}</span>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
