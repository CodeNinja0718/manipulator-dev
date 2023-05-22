export interface IListItem {
  id: string;
  name: string;
}

export interface IListResult<T> {
  docs: T[];
  items: T[];
  totalDocs: number;
  total: number;
  limit: number;
  perPage: number;
  page: number;
  totalPages: number;
}
