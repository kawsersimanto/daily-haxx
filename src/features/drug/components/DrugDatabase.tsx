import { DrugFilters, DrugHeader, DrugTable } from "@/features/drug";

export const DrugDatabase = () => {
  return (
    <>
      <DrugHeader />
      <DrugFilters />
      <DrugTable />
    </>
  );
};
