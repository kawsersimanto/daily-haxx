"use client";

import {
  Article,
  ArticleCardSkeleton,
  getArticles,
  IArticle,
  LatestArticle,
} from "@/features/article";
import { LatestArticleSkeleton } from "@/features/article/components/cards/LatestArticleSkeleton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const ArticlesSection = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
    placeholderData: keepPreviousData,
  });

  const articles = data?.data?.data ?? [];
  return (
    <div>
      <h2 className="text-lg font-semibold text-primary dark:text-foreground uppercase tracking-[2px] font-work-sans mb-4">
        Latest
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3.5">
        {isLoading ? (
          <>
            <LatestArticleSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
          </>
        ) : isError ? (
          <div className="col-span-full text-center text-red-500 py-10">
            {error instanceof Error ? error.message : "Something went wrong"}
          </div>
        ) : (
          <>
            {articles
              .slice(0, 4)
              .map((article: IArticle, id: number) =>
                id === 0 ? (
                  <LatestArticle key={article.id} data={article} />
                ) : (
                  <Article key={article.id} data={article} />
                )
              )}
          </>
        )}
      </div>
    </div>
  );
};
