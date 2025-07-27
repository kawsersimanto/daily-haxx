import { IArticleProps } from "@/features/article";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Link from "next/link";
dayjs.extend(relativeTime);

export const ExploreArticleCard = ({ data }: IArticleProps) => {
  return (
    <Link
      href="/"
      className="flex md:flex-row flex-col md:items-center gap-7 not-first:pt-[30px] first:pt-0 pb-[30px] not-last:border-b not-last:xborder-border"
    >
      <div className="overflow-hidden rounded-xl md:w-[218px] w-full h-[170px] border border-border shrink-0">
        <Image
          src={data?.image || "/placeholder.png"}
          alt={data?.title}
          width={800}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-sea-green">{data?.category || "Not Available"}</h3>
        <h2 className="text-xl font-bold text-foreground leading-6 max-w-[434px] line-clamp-2">
          {data?.title || "No Title Found"}
        </h2>
        {/* <p className="text-muted-foreground md:text-base text-sm line-clamp-2">
          {data?.description || "Not Available"}
        </p> */}
        <div className="flex items-center text-sm text-light-muted gap-2">
          <span className="xl:text-sm sm:text-xs text-sm">
            {dayjs(data?.date).format("MMMM D, YYYY")}
          </span>
          <span>•</span>
          <span className="xl:text-sm sm:text-xs text-sm">
            {dayjs(data?.date).format("MMMM D, YYYY")}
          </span>
        </div>
      </div>
    </Link>
  );
};
