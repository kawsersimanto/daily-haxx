"use client";

import { PollList } from "@/features/poll";
import { PollHeader } from "./PollHeader";

export const AllPoll = () => {
  return (
    <>
      <PollHeader />
      <PollList />
    </>
  );
};
