"use client";

import { FilterDropdown } from "@/components/filter-dropdown/FilterDropdown";
import { SearchBar } from "@/components/search/Search";
import { SectionHeader } from "@/components/section-header/SectionHeader";
import {
  ArticleCategory,
  ArticleList,
  getArticleCategories,
  useArticleCategory,
  useArticleSearch,
} from "@/features/article";
import { useQuery } from "@tanstack/react-query";

export const AllArticles = () => {
  const { term, setTerm, triggerSearch } = useArticleSearch();
  const { category, setCategory } = useArticleCategory();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articleCategories"],
    queryFn: () => getArticleCategories(),
  });

  const categories = data?.data;

  const categoryOptions =
    categories?.map((category: ArticleCategory) => ({
      label: category?.name,
      value: category?.slug,
    })) ?? [];

  const options = [{ label: "All Articles", value: "all" }, ...categoryOptions];

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
                {isError ? (
                  <p className="text-danger">{error.message}</p>
                ) : (
                  <FilterDropdown
                    category={category}
                    setCategory={setCategory}
                    disabled={isLoading}
                    options={options}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ArticleList />
      </div>
    </section>
  );
};
