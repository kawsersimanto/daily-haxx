"use client";

import { Pagination } from "@/components/pagination/Pagination";
import {
  NewsletterCard,
  newsletters,
  usePagination,
} from "@/features/newsletter";

export const NewsletterList = () => {
  const { page, setPage, totalPages } = usePagination(20);
  return (
    <>
      <div className="flex flex-col md:gap-6 gap-4">
        {newsletters.map((newsletter) => (
          <NewsletterCard key={newsletter?.id} data={newsletter} />
        ))}
      </div>
      <div className="mt-10">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
};
