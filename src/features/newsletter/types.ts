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
