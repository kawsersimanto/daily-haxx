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
import { useEffect } from "react";

export const PollList = () => {
  const search = usePollSelector.use.search();
  const category = usePollSelector.use.category();
  const limit = 10;
  const { page, setPage } = usePagination();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["polls", page, search, category],
    queryFn: () =>
      getPolls({ page, limit, searchTerm: search, categoryId: category }),
  });

  useEffect(() => {
    setPage(1);
  }, [search, category, setPage]);

  const polls = data?.data?.data ?? [];
  const totalPages = data?.data?.meta?.totalPage ?? 1;

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
