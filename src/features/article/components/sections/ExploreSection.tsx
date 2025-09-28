"use client";

import SectionTitle from "@/components/section-title/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { ExploreArticleCard, getArticles, IArticle } from "@/features/article";
import { ExploreArticleCardSkeleton } from "@/features/article/components/cards/ExploreArticleCardSkeleton";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Link from "next/link";

export const ExploreSection = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: () => getArticles(),
    placeholderData: keepPreviousData,
  });

  const articles = data?.data?.data ?? [];

  return (
    <div>
      <SectionTitle>Explore More</SectionTitle>
      <Card className="w-full p-5 rounded-xl shadow-none">
        <CardContent className="p-0">
          {isLoading ? (
            <>
              <ExploreArticleCardSkeleton />
              <ExploreArticleCardSkeleton />
              <ExploreArticleCardSkeleton />
              <ExploreArticleCardSkeleton />
              <ExploreArticleCardSkeleton />
              <ExploreArticleCardSkeleton />
            </>
          ) : isError ? (
            <div className="col-span-full text-center text-red-500 py-10">
              {error instanceof Error ? error.message : "Something went wrong"}
            </div>
          ) : (
            articles?.map((article: IArticle) => (
              <ExploreArticleCard key={article?.id} data={article} />
            ))
          )}
          <Link
            href="/article"
            className="p-2.5 mt-7 uppercase text-center text-sm font-semibold leading-[130%] tracking-[2px] block bg-accent text-accent-foreground border border-border"
          >
            See More!
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};
