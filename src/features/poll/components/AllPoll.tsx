"use client";

import { FilterDropdown } from "@/components/filter-dropdown/FilterDropdown";
import { SearchBar } from "@/components/search/Search";
import { PollList, usePollCategory, usePollSearch } from "@/features/poll";

export const AllPoll = () => {
  const { term, setTerm, triggerSearch } = usePollSearch();
  const { category, setCategory } = usePollCategory();
  return (
    <>
      <div className="flex md:flex-row flex-col md:items-center items-stretch justify-between gap-4">
        <div className="md:max-w-[558px] w-full">
          <SearchBar
            term={term}
            setTerm={setTerm}
            triggerSearch={triggerSearch}
          />
        </div>
        <div className="md:max-w-[240px] w-full">
          <FilterDropdown
            category={category}
            setCategory={setCategory}
            options={[
              {
                label: "All Polls",
                value: "All Polls",
              },
            ]}
          />
        </div>
      </div>
      <PollList />
    </>
  );
};
