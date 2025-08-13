"use client";

import { PollCard, polls } from "@/features/poll";

export const PollList = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 md:mt-10 mt-5">
      {polls.map((poll) => (
        <PollCard key={poll?.id} data={poll} />
      ))}
    </div>
  );
};
