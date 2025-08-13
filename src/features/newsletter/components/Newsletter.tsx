"use client";

import { FilterDropdown } from "@/components/filter-dropdown/FilterDropdown";
import { SearchBar } from "@/components/search/Search";
import { SectionHeader } from "@/components/section-header/SectionHeader";
import {
  NewsletterList,
  useNewsletterCategory,
  useNewsletterSearch,
} from "@/features/newsletter";

export const Newsletter = () => {
  const { term, setTerm, triggerSearch } = useNewsletterSearch();
  const { category, setCategory } = useNewsletterCategory();

  return (
    <>
      <SectionHeader title="Newsletter">
        Read our previous insight-driven newsletters covering business, finance,
        economics and tech.
      </SectionHeader>
      <div className="max-w-[780px] mx-auto">
        <div className="flex md:flex-row flex-col justify-center md:gap-6 gap-3 md:mb-10 mb-5">
          <div className="grow">
            <SearchBar
              term={term}
              setTerm={setTerm}
              triggerSearch={triggerSearch}
            />
          </div>
          <div className="md:basis-[200px]">
            <FilterDropdown
              category={category}
              setCategory={setCategory}
              options={[
                "All Newsletters",
                "Business",
                "Finance",
                "Economics",
                "Tech",
              ]}
            />
          </div>
        </div>
        <NewsletterList />
      </div>
    </>
  );
};
