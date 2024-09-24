import { PageInfo, Product, ToppersByShapeItems } from "@/types";

export interface IProductResponse {
  items: Product[];
  total_count: number;
  page_info: PageInfo;
}

export interface IOccasionToppers {
  items: ToppersByShapeItems[];
  total_count: number;
  page_info: PageInfo;
}

export interface IHighlightedItems {
  id: string;
  uid: string;
  name: string;
  url_key: string;
  url_path: string;
  image: string;
}

export interface IHighlightedProducts {
  items: IHighlightedItems[];
}

export interface HomeContextType {
  recentAddedProduct: {
    data: IProductResponse | null;
    error: Error | null;
    loading: boolean;
  };
  featuredToppers: {
    data: IProductResponse | null;
    error: Error | null;
    loading: boolean;
  };
  bestSellingToppers: {
    data: IProductResponse | null;
    error: Error | null;
    loading: boolean;
  };
  seasonalToppers: {
    data: IProductResponse | null;
    error: Error | null;
    loading: boolean;
  };
  superheroToppers: {
    data: IProductResponse | null;
    error: Error | null;
    loading: boolean;
  };
  occasionToppers: {
    data: IOccasionToppers | null;
    error: Error | null;
    loading: boolean;
  };
  highlightedProducts: {
    data: IHighlightedProducts | null;
    error: Error | null;
    loading: boolean;
  };
}
