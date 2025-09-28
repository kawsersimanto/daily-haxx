"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  getPoll,
  IPollOption,
  PollOption,
  PollSuccess,
  usePollSelector,
} from "@/features/poll";
import { useQuery } from "@tanstack/react-query";
import { PollDetailsSkeleton } from "./PollDetailsSkeleton";

export const PollDetails = ({ id }: { id: string }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["poll", id],
    queryFn: () => getPoll(id),
  });

  const poll = data?.data;

  const setSelectedOptionId = usePollSelector.use.setSelectedOptionId();
  const selectedOptionId = usePollSelector.use.selectedOptionId();

  return (
    <section className="md:py-25 py-10">
      <div className="container">
        <div className="max-w-[570px] mx-auto">
          <Card className="md:py-10 py-5">
            {isLoading ? (
              <PollDetailsSkeleton />
            ) : isError ? (
              <CardContent className="md:px-7.5 px-5">
                {error instanceof Error
                  ? error.message
                  : "Something went wrong"}
              </CardContent>
            ) : (
              <CardContent className="md:px-7.5 px-5">
                <PollSuccess />
                <div>
                  <h1 className="font-primary font-semibold md:text-xl text-base font-work-sans md:mb-6 mb-4">
                    {poll?.question || "Not Available"}
                  </h1>
                  <div className="flex flex-col gap-3.5">
                    {poll?.options?.map((opt: IPollOption) => (
                      <PollOption
                        key={opt?.id}
                        id={opt?.id}
                        text={opt?.text}
                        votes={0}
                        highlight={selectedOptionId === opt?.id}
                        setSelectedOptionId={setSelectedOptionId}
                      />
                    ))}
                  </div>
                </div>
                <p className="my-5 text-center">
                  Total Votes:{" "}
                  <span className="text-sea-green font-medium">1234</span>
                </p>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
