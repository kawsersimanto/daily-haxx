"use client";

import { Pagination } from "@/components/pagination/Pagination";
import {
  getPolls,
  IPoll,
  PollCard,
  usePagination,
  usePollSelector,
} from "@/features/poll";
import { PollCardSkeleton } from "@/features/poll/components/PollCardSkeleton";
import { useQuery } from "@tanstack/react-query";

export const PollList = () => {
  const search = usePollSelector.use.search();
  const { page, setPage, totalPages } = usePagination(10);
  const limit = 5;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["polls", page, limit, search],
    queryFn: () => getPolls({ page, limit, searchTerm: search }),
  });

  const polls = data?.data?.data || [];

  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 md:mt-10 mt-5 md:mb-14 mb-5">
        {isLoading ? (
          <>
            <PollCardSkeleton />
            <PollCardSkeleton />
            <PollCardSkeleton />
            <PollCardSkeleton />
            <PollCardSkeleton />
            <PollCardSkeleton />
          </>
        ) : isError ? (
          <div className="col-span-full text-center text-red-500 py-10">
            {error instanceof Error ? error.message : "Something went wrong"}
          </div>
        ) : (
          polls.map((poll: IPoll) => <PollCard key={poll?.id} data={poll} />)
        )}
      </div>
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        totalPages={totalPages}
      />
    </>
  );
};
