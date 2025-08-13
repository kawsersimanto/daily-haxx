"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export const PollDetails = () => {
  return (
    <section className="py-25">
      <div className="container">
        <div className="max-w-[570px] mx-auto">
          <Card className="md:py-10 py-5">
            <CardContent className="md:px-7.5">
              <div className="flex flex-col gap-5 items-center justify-center">
                <Image
                  src="/poll-success.svg"
                  width={65}
                  height={65}
                  className="object-contain w-[65px] h-[65px]"
                  alt="Success Icon"
                />
                <p className="max-w-[240px] mx-auto text-lg font-semibold text-center leading-[120%]">
                  Your response has been recorded
                </p>
              </div>
              <hr className="my-5" />
              <div>
                <h1 className="font-primary font-semibold text-xl font-work-sans md:mb-6 mb-4">
                  AI detects cancer earlier than traditional scans?
                </h1>
                <div className="flex flex-col gap-3.5">
                  <div className="py-4.5 px-5 rounded border border-border cursor-pointer relative">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-5 justify-between">
                        <p className="font-foreground font-work-sans font-medium">
                          Yes
                        </p>
                        <p className="text-lg font-medium">30%</p>
                      </div>
                      <Progress value={30} />
                    </div>
                  </div>
                  <div className="py-4.5 px-5 rounded border border-border cursor-pointer">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-5 justify-between">
                        <p className="font-foreground font-work-sans font-medium">
                          No
                        </p>
                        <p className="text-lg font-medium">30%</p>
                      </div>
                      <Progress value={30} />
                    </div>
                  </div>
                  <div className="py-4.5 px-5 rounded border border-border cursor-pointer">
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-5 justify-between">
                        <p className="font-foreground font-work-sans font-medium">
                          Other
                        </p>
                        <p className="text-lg font-medium">20%</p>
                      </div>
                      <Progress value={30} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="my-5 text-center">
                Total Votes: <span className="text-primary">{123445}</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
