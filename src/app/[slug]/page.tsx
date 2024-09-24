import { PageNotFound } from "@/components";
import { ProductDetailsContainer } from "@/container";
import { Queries } from "@/utils/graphql";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const revalidate = 300;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
}

export default async function ProductDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    console.log("params", params);
    const { data: productDetailsData } = await client.query({
      query: Queries.GET_PRODUCT_DETAILS,

      variables: {
        url_key: params.slug,
      },
    });

    console.log(
      "productDetailsData",
      productDetailsData?.products?.items[0].id
    );

    if (!productDetailsData || !productDetailsData?.products?.items[0]) {
      return <PageNotFound />;
    }

    const { id } = productDetailsData?.products?.items[0];

    const { data: reviewsData } = await client.query({
      query: Queries.GET_PRODUCT_WISE_REVIEWS,
      variables: {
        productId: id,
        currentPage: 1,
        pageSize: 3,
      },
    });

    return (
      <ProductDetailsContainer
        productDetailsData={productDetailsData}
        reviewsData={reviewsData}
      />
    );
  } catch (error) {
    console.error("Error fetching product:", error);
    return <PageNotFound />;
  }
}
