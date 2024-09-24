// app/page.tsx (Server Component)

import { getClient } from "@/graphql/apolloClient";
import { HomeContainer } from "@/container";
import { Queries, DataKeyMap } from "@/utils/graphql";
import { HomeContextType } from "@/types";

export const revalidate = 300;

export default async function HomePage() {
  const client = getClient();

  const fetchData = async (query: any, variables?: any, dataKey?: any) => {
    try {
      const { data } = await client.query({
        query,
        variables,
      });

      return { data: data[dataKey], error: null, loading: false };
    } catch (error) {
      return { data: null, error: error as Error, loading: false };
    }
  };

  const recentAddedProduct = await fetchData(
    Queries.RECENTLY_ADDED_TOPPERS,
    {},
    DataKeyMap.RECENTLY_ADDED_TOPPERS
  );
  const featuredToppers = await fetchData(
    Queries.FEATURED_PRODUCTS,
    {
      currentPage: 1,
      pageSize: 8,
    },
    DataKeyMap.FEATURED_PRODUCTS
  );
  const bestSellingToppers = await fetchData(
    Queries.BEST_SELLER_TOPPERS,
    {
      currentPage: 1,
      pageSize: 8,
    },
    DataKeyMap.BEST_SELLER_TOPPERS
  );
  const seasonalToppers = await fetchData(
    Queries.SEASONAL_TOPPERS,
    {
      currentPage: 1,
      pageSize: 8,
    },
    DataKeyMap.SEASONAL_TOPPERS
  );
  const superheroToppers = await fetchData(
    Queries.SUPERHEROES_TOPPERS,
    {
      currentPage: 1,
      pageSize: 8,
      filters: { category_uid: { eq: "MjQ=" } },
    },
    DataKeyMap.SUPERHEROES_TOPPERS
  );
  const occasionToppers = await fetchData(
    Queries.TOPPERS_BY_SHAPE,
    {},
    DataKeyMap.TOPPERS_BY_SHAPE
  );
  const highlightedProducts = await fetchData(
    Queries.HIGHLIGHTED_PRODUCTS,
    {},
    DataKeyMap.HIGHLIGHTED_PRODUCTS
  );

  const ssrData: HomeContextType = {
    recentAddedProduct,
    featuredToppers,
    bestSellingToppers,
    seasonalToppers,
    superheroToppers,
    occasionToppers,
    highlightedProducts,
  };

  return <HomeContainer ssrData={ssrData} />;
}
