"use client";

import { Pagination } from "@/components/pagination/Pagination";
import { Article, articles, usePagination } from "@/features/article";

export const ArticleList = () => {
  const { page, setPage, totalPages } = usePagination(20);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3.5">
        {articles.map((article, id) => (
          <Article key={id} data={article} />
        ))}
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
