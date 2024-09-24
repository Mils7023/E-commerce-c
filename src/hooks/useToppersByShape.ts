import { Queries, DataKeyMap } from "@/utils/graphql";
import { getClient } from "@/graphql/apolloClient";

export const useToppersByShape = async () => {
  const client = getClient();

  const { data, loading, error } = await client.query({
    query: Queries.TOPPERS_BY_SHAPE,
    fetchPolicy: "no-cache",
  });
  const dataKey = DataKeyMap.TOPPERS_BY_SHAPE;

  const menuItems = data?.[dataKey]?.items || [];

  return {
    loading,
    error,
    menuItems,
    // refetch,
  };
};
