"use client";

import { Pagination } from "@/components/pagination/Pagination";
import {
  Article,
  ArticleCardSkeleton,
  getArticles,
  IArticle,
  useArticleSelector,
  usePagination,
} from "@/features/article";
import { useQuery } from "@tanstack/react-query";

export const ArticleList = () => {
  const search = useArticleSelector.use.search();
  // const category = useArticleSelector.use.category();
  const { page, setPage } = usePagination();
  const limit = 5;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles", page, search],
    queryFn: () => getArticles({ page, limit, search }),
  });

  const articles = data?.data ?? [];
  const totalPages = data?.meta?.totalPages ?? 1;

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3.5">
        {isLoading ? (
          <ArticleCardSkeleton />
        ) : isError ? (
          <div className="col-span-full text-center text-red-500 py-10">
            {error instanceof Error ? error.message : "Something went wrong"}
          </div>
        ) : (
          articles.map((article: IArticle) => (
            <Article key={article?.id} data={article} />
          ))
        )}
      </div>

      <div className="md:mt-20 mt-10">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
};
