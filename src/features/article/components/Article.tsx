import { Card, CardContent } from "@/components/ui/card";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";
import { IArticleProps } from "../types";
dayjs.extend(relativeTime);

const Article = ({ data }: IArticleProps) => {
  return (
    <Link href="/">
      <Card className="w-full p-2.5 rounded-xl gap-3.5 shadow-none">
        <div className="overflow-hidden rounded xl:h-[163px] lg:h-[180px] md:h-[200px] sm:h-[243px] h-[200px]">
          <Image
            src={data?.image || "/placeholder.png"}
            alt={data?.title}
            width={800}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
        <CardContent className="p-0">
          <h2 className="text-[17px] font-medium text-foreground mb-3.5 leading-6 line-clamp-2">
            {data?.title || "No Title Found"}
          </h2>
          <div className="flex items-center text-sm text-light-muted gap-2">
            <span className="xl:text-sm lg:text-xs text-sm">
              {dayjs(data?.createdAt).fromNow()}
            </span>
            {data?.publisher && (
              <>
                <span>•</span>
                <span className="xl:text-sm lg:text-xs text-sm block lg:hidden xl:block">
                  {data?.publisher}
                </span>
                <span className="xl:text-sm lg:text-xs text-sm hidden lg:block xl:hidden">
                  {data?.publisher?.split(" ")[0]}
                </span>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Article;
