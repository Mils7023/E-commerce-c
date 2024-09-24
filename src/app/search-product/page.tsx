import { PageNotFound } from "@/components";
import { SearchListingContainer } from "@/container";
import { Queries } from "@/utils/graphql";
import { getClient } from "@/graphql/apolloClient";

const client = getClient();

export default async function SearchProduct({
  searchParams,
}: {
  searchParams: any;
}) {
  try {
    let productData = null;
    let sidebarFilters = null;

    const priceArr = searchParams?.price?.split("_");
    const price =
      (Array.isArray(priceArr) && {
        from: priceArr[0],
        to: priceArr[1],
      }) ||
      {};
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;

    const { data: filters } = await client.query({
      query: Queries.SEARCH_PRODUCT_FILTER,
      variables: {
        search: searchParams.search || "",
      },
    });

    const { data: products } = await client.query({
      query: Queries.SEARCH_PRODUCT_LIST,
      variables: {
        search: searchParams.search || "",
        currentPage: currentPage,
        pageSize: 6,
        sort: searchParams.sortBy
          ? { [searchParams.sortBy]: searchParams.orderBy }
          : {},
        filters: {
          price: price,
          materials: {
            eq: searchParams.materials || "",
          },
          topper_shape: { eq: searchParams.topper_shape || "" },
        },
      },
    });
    productData = products ? products : null;
    sidebarFilters = filters ? filters : null;

    return (
      <SearchListingContainer
        productData={productData}
        sidebarFilters={sidebarFilters}
        searchParams={searchParams}
      />
    );
  } catch (error) {
    console.error("Error fetching product for search:", error);
    return <PageNotFound />;
  }
}
