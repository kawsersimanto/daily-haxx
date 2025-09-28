"use client"

import { getArticles, IArticle, SidebarArticleCard } from "@/features/article";
import { SidebarArticleCardSkeleton } from "@/features/article/components/cards/SidebarArticleCardSkeleton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Link from "next/link";

export const SidebarArticle = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
    placeholderData: keepPreviousData,
  });

  const articles = data?.data?.data ?? [];
  return (
    <aside>
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        <div className="py-3.5 px-6 text-center border-b border-border">
          <h2 className="text-sea-green font-work-sans font-semibold">
            Exclusive Analysis
          </h2>
        </div>
        {isLoading ? (
          <>
            <SidebarArticleCardSkeleton />
            <SidebarArticleCardSkeleton />
            <SidebarArticleCardSkeleton />
            <SidebarArticleCardSkeleton />
          </>
        ) : isError ? (
          <div className="col-span-full text-center text-red-500 py-10">
            {error instanceof Error ? error.message : "Something went wrong"}
          </div>
        ) : (
          articles?.map((article: IArticle) => (
            <SidebarArticleCard key={article?.id} data={article} />
          ))
        )}
        <Link
          href="/"
          className="py-3.5 px-6 uppercase text-center text-sm font-semibold leading-[130%] tracking-[2px] block bg-accent text-accent-foreground"
        >
          See More!
        </Link>
      </div>
    </aside>
  );
};
