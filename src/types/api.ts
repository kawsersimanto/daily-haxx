export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiParams {
  total?: number;
  page?: number;
  limit?: number;
  totalPage?: number;
  search?: string;
  categoryId?: string | null;
}
