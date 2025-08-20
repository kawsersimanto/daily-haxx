import {
  CatalystFilters,
  CatalystHeader,
  CatalystTable,
} from "@/features/catalyst";

export const CatalystCalendar = () => {
  return (
    <>
      <div className="border border-border rounded-xl overflow-hidden mb-4">
        <CatalystHeader />
        <CatalystFilters />
      </div>
      <CatalystTable />
    </>
  );
};
