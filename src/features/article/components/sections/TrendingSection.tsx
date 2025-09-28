"use client";

import { NewsletterCard } from "@/components/newsletter/NewsletterCard";
import SectionTitle from "@/components/section-title/SectionTitle";
import { getArticles, IArticle, TrendingArticleCard } from "@/features/article";
import { TrendingArticleCardSkeleton } from "@/features/article/components/cards/TrendingArticleCardSkeleton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const TrendingSection = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
    placeholderData: keepPreviousData,
  });

  const articles = data?.data?.data ?? [];

  return (
    <aside>
      <div className="sticky top-16">
        <SectionTitle>Trending</SectionTitle>
        <NewsletterCard />
        <aside>
          <div className="rounded-xl border border-border overflow-hidden bg-card mt-6">
            {isLoading ? (
              <>
                <TrendingArticleCardSkeleton />
                <TrendingArticleCardSkeleton />
                <TrendingArticleCardSkeleton />
                <TrendingArticleCardSkeleton />
              </>
            ) : isError ? (
              <div className="col-span-full text-center text-red-500 py-10">
                {error instanceof Error
                  ? error.message
                  : "Something went wrong"}
              </div>
            ) : (
              articles?.map((article: IArticle) => (
                <TrendingArticleCard key={article?.id} data={article} />
              ))
            )}
          </div>
        </aside>
      </div>
    </aside>
  );
};
