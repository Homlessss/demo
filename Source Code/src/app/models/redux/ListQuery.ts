export interface ListQuery {
  page: number;
  per_page?: number;
  size?: number;
  filter?: { [key: string]: any };
}
