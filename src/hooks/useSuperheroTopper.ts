"use client";
import { useQuery } from "@apollo/client";
import { Queries, DataKeyMap } from "@/utils/graphql";

export interface UseSuperheroesToppersParams {
  currentPage: number;
  pageSize: number;
  sort?: any;
  filters: {
    category_uid: {
      eq: string;
    };
    [key: string]: any;
  };
}

export const useSuperheroesToppers = ({
  currentPage,
  pageSize,
  sort,
  filters,
}: UseSuperheroesToppersParams) => {
  const { data, loading, error, refetch } = useQuery(
    Queries.SUPERHEROES_TOPPERS,
    {
      variables: {
        currentPage,
        pageSize,
        sort,
        filters,
      },
      fetchPolicy: "cache-and-network",
    }
  );

  const dataKey = DataKeyMap.SUPERHEROES_TOPPERS;
  const products = data?.[dataKey]?.items || [];
  const totalCount = data?.[dataKey]?.total_count || 0;
  const pageInfo = data?.[dataKey]?.page_info || {};

  return {
    loading,
    error,
    products,
    totalCount,
    pageInfo,
    refetch,
  };
};
