"use client";

import { Pagination } from "@/components/pagination/Pagination";
import { PollCard, polls, usePagination } from "@/features/poll";

export const PollList = () => {
  const { page, setPage, totalPages } = usePagination(10);
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 md:mt-10 mt-5 md:mb-14 mb-5">
        {polls.map((poll) => (
          <PollCard key={poll?.id} data={poll} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        totalPages={totalPages}
      />
    </>
  );
};
