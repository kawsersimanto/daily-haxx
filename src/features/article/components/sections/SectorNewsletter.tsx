"use client";

import SectionTitle from "@/components/section-title/SectionTitle";
import {
  Article,
  ArticleCardSkeleton,
  getArticles,
  IArticle,
} from "@/features/article";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const SectorNewsletter = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
    placeholderData: keepPreviousData,
  });

  const articles = data?.data?.data ?? [];
  return (
    <div>
      <SectionTitle>Sector Newsletter</SectionTitle>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-3.5 md:mb-15 mb-10">
        {isLoading ? (
          <>
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
            <ArticleCardSkeleton />
          </>
        ) : isError ? (
          <div className="col-span-full text-center text-red-500 py-10">
            {error instanceof Error ? error.message : "Something went wrong"}
          </div>
        ) : (
          articles?.map((article: IArticle) => (
            <Article key={article?.id} data={article} />
          ))
        )}
      </div>
    </div>
  );
};
