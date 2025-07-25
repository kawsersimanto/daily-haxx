import { IArticleProps } from "@/features/article";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
dayjs.extend(relativeTime);

export const TrendingArticleCard = ({ data }: IArticleProps) => {
  return (
    <Link
      href={`/article/${"pfizer-acquires"}`}
      className="py-[18px] px-6 flex flex-col gap-2"
    >
      <h2 className="text-lg font-medium leading-[120%] line-clamp-3">
        {data?.title || "No title found"}
      </h2>
      <div className="flex items-center text-sm text-light-muted gap-2">
        <span className="xl:text-sm lg:text-xs text-sm">
          {dayjs(data?.createdAt).fromNow()}
        </span>
        {data?.publisher && (
          <>
            <span>•</span>
            <span className="xl:text-sm lg:text-xs text-sm">
              {data?.publisher}
            </span>
          </>
        )}
      </div>
    </Link>
  );
};
