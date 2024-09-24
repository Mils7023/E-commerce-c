"use client";
import { useQuery } from "@apollo/client";

export interface UseProductListingProps {
  query: any;
  variables: {
    pageSize?: number;
    currentPage?: number;
  };
  dataKey: string;
}

export interface UseProductListingReturns {
  loading: boolean;
  error: any;
  products: any[];
  totalPages: number;
  currentPage: number;
  refetch: () => void;
}

export const useProductListing = ({
  query,
  variables,
  dataKey,
}: UseProductListingProps): UseProductListingReturns => {
  const { data, loading, error, refetch } = useQuery(query, {
    variables,
  });

  const products = data?.[dataKey]?.items || [];
  const totalPages = data?.[dataKey]?.page_info?.total_pages || 1;
  const currentPage = data?.[dataKey]?.page_info?.current_page || 1;

  return {
    loading,
    error,
    products,
    totalPages,
    currentPage,
    refetch,
  };
};
