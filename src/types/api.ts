export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ApiParams {
  page?: number;
  limit?: number;
  search?: string;
}
