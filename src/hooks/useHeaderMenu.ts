// hooks/getMenuItems.ts
import { Queries, DataKeyMap } from "@/utils/graphql";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const useHeaderMenu = async () => {
  const { data, loading, error } = await client.query({
    query: Queries.HEADER_MENU_CATEGORIES,
    fetchPolicy: "cache-first",
  });

  const dataKey = DataKeyMap.HEADER_MENU_CATEGORIES;
  const menuItems = data?.[dataKey]?.items || [];

  return {
    menuItems,
    loading,
    error
  }
};
