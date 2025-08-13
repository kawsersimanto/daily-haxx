"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  PollOption,
  polls,
  PollSuccess,
  usePollSelector,
} from "@/features/poll";

export const PollDetails = () => {
  const setSelectedOptionId = usePollSelector.use.setSelectedOptionId();

  return (
    <section className="md:py-25 py-10">
      <div className="container">
        <div className="max-w-[570px] mx-auto">
          <Card className="md:py-10 py-5">
            <CardContent className="md:px-7.5 px-5">
              <PollSuccess />
              <div>
                <h1 className="font-primary font-semibold md:text-xl text-base font-work-sans md:mb-6 mb-4">
                  AI detects cancer earlier than traditional scans?
                </h1>
                <div className="flex flex-col gap-3.5">
                  {polls[0].options.map((opt) => (
                    <PollOption
                      key={opt.id}
                      {...opt}
                      highlight={polls[0].selectedOptionId === opt.id}
                      setSelectedOptionId={setSelectedOptionId}
                    />
                  ))}
                </div>
              </div>
              <p className="my-5 text-center">
                Total Votes:{" "}
                <span className="text-sea-green font-medium">{123445}</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
