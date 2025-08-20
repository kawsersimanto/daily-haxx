export interface Catalyst {
  company: string;
  brand: string;
  molecule: string;
  modality: string;
  mechanism: string;
  diseaseArea: string;
  approvedIndications: string;
  ltmSales: string;
  relatedContent: string[];
  phase?: string;
  impact?: "High" | "Medium" | "Low";
  timing?: string;
  catalystType?: string;
}

export interface CatalystState {
  searchQuery: string;
  filters: {
    diseaseArea: string;
    modality: string;
    mechanism: string;
    sortBy: string;
    salesRange: string;
  };
}

export interface CatalystActions {
  setSearchQuery: (query: string) => void;
  setFilter: (key: string, value: string) => void;
  removeFilter: (key: string) => void;
  clearAllFilters: () => void;
}

export type CatalystStore = CatalystState & CatalystActions;
