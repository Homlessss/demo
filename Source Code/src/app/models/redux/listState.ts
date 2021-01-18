import { ListQuery } from "./ListQuery";

export interface ListState<T = any> {
  list: T[];
  loading: boolean;
  error?: any;
  query: ListQuery;
}
