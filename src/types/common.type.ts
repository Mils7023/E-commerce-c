export interface CommonFetchType {
  __typename: string;
}

export interface PageInfo {
  current_page: number;
  page_size: number;
  total_pages: number;
}

export interface Amount {
  currency: string;
  value: number;
}

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export interface UploadFile {
  name: string;
  fullname: string;
  file_path: string;
  full_path: string;
  secret_key: string;
}
