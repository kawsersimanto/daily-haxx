"use client";

import SidebarLayout from "@/components/layout/SidebarLayout";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  ArticleDetailsCard,
  getArticle,
  SidebarArticle,
} from "@/features/article";
import { ArticleDetailsCardSkeleton } from "@/features/article/components/cards/ArticleDetailsCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, TriangleAlert } from "lucide-react";
import Link from "next/link";

export const ArticleDetailsPage = ({ slug }: { slug: string }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticle(slug),
  });

  const article = data?.data;

  return (
    <SidebarLayout>
      {isLoading ? (
        <ArticleDetailsCardSkeleton />
      ) : isError ? (
        <div>
          <Alert variant="destructive" className="mb-6">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error instanceof Error
                ? error.message
                : "Something went wrong while fetching the article."}
            </AlertDescription>
          </Alert>
          <Button variant={"outline"} asChild>
            <Link href="/article">
              <ChevronLeft /> Go Back
            </Link>
          </Button>
        </div>
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
