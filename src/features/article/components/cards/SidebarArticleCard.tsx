import { IArticleProps } from "@/features/article";
import { formatDate } from "@/utils/date";
import Link from "next/link";

export const SidebarArticleCard = ({ data }: IArticleProps) => {
  return (
    <Link
      href={`/article/${data?.slug}`}
      className="py-[18px] px-6 flex flex-col gap-2 not-last:border-b border-border"
    >
      <h2 className="text-lg font-medium leading-[120%] line-clamp-3">
        {data?.title || "No title found"}
      </h2>
      <div className="flex items-center text-sm text-light-muted gap-2">
        <span className="xl:text-sm lg:text-xs text-sm">
          {formatDate(data?.createdAt)}
        </span>
        {data?.companyName && (
          <>
            <span>•</span>
            <span className="xl:text-sm lg:text-xs text-sm">
              {data?.companyName}
            </span>
          </>
        )}
      </div>
    </Link>
  );
};
