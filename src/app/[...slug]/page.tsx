import { PageNotFound } from "@/components";
import { ProductListingContainer } from "@/container";
import { Queries } from "@/utils/graphql";
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const CONTENT_TYPE = {
  CATEGORY: "CATEGORY",
  PRODUCT: "PRODUCT",
  CATEGORY_CMS: "CATEGORY_CMS",
  CMS_PAGE: "CMS_PAGE",
  NOT_FOUND: "404",
};

const GET_CATEGORIES = gql`
  query UrlResolver($url: String!) {
    urlResolver(url: $url) {
      id
      entity_uid
      canonical_url
      relative_url
      redirectCode
      type
    }
  }
`;

export const revalidate = 300;

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: any;
}) {
  const slug = params.slug.join("/");

  // Check if the slug is pointing to a static asset
  if (slug.startsWith("_next") || slug.endsWith(".mjs.map")) {
    return <PageNotFound />;
  }

  try {
    const { data } = await client.query({
      query: GET_CATEGORIES,
      variables: { url: slug },
    });

    if (!data || !data.urlResolver) {
      return <PageNotFound />;
    }
    const { type, entity_uid } = data.urlResolver;

    let sidebarFilters = null;

    const priceArr = searchParams?.price?.split("_");
    const price =
      (Array.isArray(priceArr) && {
        from: priceArr[0],
        to: priceArr[1],
      }) ||
      {};

    switch (type) {
      case CONTENT_TYPE.CATEGORY:
        const { data } = await client.query({
          query: Queries.PRODUCT_SIDEBAR_FILTER,
          variables: {
            categoryIdFilter: { eq: entity_uid },
            currentPage: searchParams.page || 1,
            pageSize: 6,
            sort: searchParams.sortBy
              ? { [searchParams.sortBy]: searchParams.orderBy }
              : {},
            filters: {
              price: price,
              materials: {
                eq: searchParams.materials,
              },
              topper_shape: { eq: searchParams.topper_shape },
            },
          },
        });
        sidebarFilters = data;
    }

    if (type === CONTENT_TYPE.CATEGORY) {
      return (
        <ProductListingContainer
          sidebarFilters={sidebarFilters}
          searchParams={searchParams}
        />
      );
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return <PageNotFound />;
  }
}
