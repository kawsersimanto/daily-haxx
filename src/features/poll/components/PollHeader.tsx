import { FilterDropdown } from "@/components/filter-dropdown/FilterDropdown";
import { SearchBar } from "@/components/search/Search";
import { useQuery } from "@tanstack/react-query";
import { getPollCategories } from "../api";
import { usePollCategory, usePollSearch } from "../hooks";
import { IPollCategories } from "../types";

export const PollHeader = () => {
  const { term, setTerm, triggerSearch } = usePollSearch();
  const { category, setCategory } = usePollCategory();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pollCategories"],
    queryFn: () => getPollCategories(),
  });

  const categories = data?.data;

  const options = [
    { label: "All Polls", value: "all" },
    ...(categories?.map((category: IPollCategories) => ({
      label: category?.name,
      value: category?.id,
    })) ?? []),
  ];

  return (
    <div className="flex md:flex-row flex-col md:items-center items-stretch justify-between gap-4">
      <div className="md:max-w-[558px] w-full">
        <SearchBar
          term={term}
          setTerm={setTerm}
          triggerSearch={triggerSearch}
        />
      </div>
      <div className="md:max-w-[240px] w-full">
        {isError ? (
          <p className="text-danger">{error.message}</p>
        ) : (
          <FilterDropdown
            category={category}
            setCategory={setCategory}
            options={options}
            disabled={isLoading}
          />
        )}
      </div>
    </div>
  );
};
