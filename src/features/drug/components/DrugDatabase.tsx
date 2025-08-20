import { DrugFilters, DrugHeader, DrugTable } from "@/features/drug";

export const DrugDatabase = () => {
  return (
    <>
      <div className="border border-border rounded-xl overflow-hidden mb-4">
        <DrugHeader />
        <DrugFilters />
      </div>
      <DrugTable />
    </>
  );
};
