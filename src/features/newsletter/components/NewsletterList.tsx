"use client";

import { Pagination } from "@/components/pagination/Pagination";
import {
  NewsletterCard,
  newsletters,
  useNewsletterSelector,
} from "@/features/newsletter";

export const NewsletterList = () => {
  const page = useNewsletterSelector.use.page();
  const setPage = useNewsletterSelector.use.setPage();
  const totalPages = 20;
  return (
    <div className="flex flex-col md:gap-6 gap-4">
      {newsletters.map((newsletter) => (
        <NewsletterCard key={newsletter?.id} data={newsletter} />
      ))}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};
