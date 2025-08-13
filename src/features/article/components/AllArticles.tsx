"use client";

import { FilterDropdown } from "@/components/filter-dropdown/FilterDropdown";
import { SearchBar } from "@/components/search/Search";
import { SectionHeader } from "@/components/section-header/SectionHeader";
import {
  ArticleList,
  useArticleCategory,
  useArticleSearch,
} from "@/features/article";

export const AllArticles = () => {
  const { term, setTerm, triggerSearch } = useArticleSearch();
  const { category, setCategory } = useArticleCategory();
  return (
    <section className="pt-15 md:pb-20 pb-10">
      <div className="container">
        <div>
          <SectionHeader title="Articles">
            Read our previous insight-driven newsletters covering business,
            finance, economics and tech.
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
                    "All Articles",
                    "Business",
                    "Finance",
                    "Economics",
                    "Tech",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <ArticleList />
      </div>
    </section>
  );
};
