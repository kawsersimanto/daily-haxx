export interface Drug {
  company: string;
  brand: string;
  molecule: string;
  modality: string;
  mechanism: string;
  diseaseArea: string;
  approvedIndications: string;
  ltmSales: string;
  relatedContent: string[];
}

export interface DrugState {
  searchQuery: string;
  filters: {
    diseaseArea: string;
    modality: string;
    mechanism: string;
    sortBy: string;
    salesRange: string;
  };
}

export interface DrugActions {
  setSearchQuery: (query: string) => void;
  setFilter: (key: string, value: string) => void;
  removeFilter: (key: string) => void;
  clearAllFilters: () => void;
}

export type DrugStore = DrugState & DrugActions;
