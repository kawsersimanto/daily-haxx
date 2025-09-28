"use client";

import SidebarLayout from "@/components/layout/SidebarLayout";
import {
  ArticleDetailsCard,
  getArticle,
  SidebarArticle,
} from "@/features/article";
import { ArticleDetailsCardSkeleton } from "@/features/article/components/cards/ArticleDetailsCardSkeleton";
import { useQuery } from "@tanstack/react-query";

export const ArticleDetailsPage = ({ slug }: { slug: string }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticle(slug),
  });

  const article = data?.data;
  console.log(article);

  return (
    <SidebarLayout>
      {isLoading ? (
        <ArticleDetailsCardSkeleton />
      ) : (
        <ArticleDetailsCard data={article} />
      )}
      <div>
        <div className="sticky top-28">
          <SidebarArticle />
        </div>
      </div>
    </SidebarLayout>
  );
};
