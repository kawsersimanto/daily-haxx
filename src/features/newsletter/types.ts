export interface Newsletter {
  id: string;
  // define fields
}

export interface NewsletterQueryParams {
  page: number;
  limit: number;
  total: number;
  search: string;
  filter: string;
}

export interface NewsletterState {
  search: string;
  page: number;
  category: string;
}

export interface NewsletterActions {
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setCategory: (value: string) => void;
}

export type NewsletterStore = NewsletterState & NewsletterActions;
