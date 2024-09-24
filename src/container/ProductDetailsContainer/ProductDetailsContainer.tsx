import {
  Banner,
  FollowUs,
  HowToOrder,
  ProductMayYouLike,
  ProductInformation,
} from "@/components/ProductDetails";
import React, { FC } from "react";

export interface ProductDetailsProps {
  productDetailsData: any;
  reviewsData: any;
}

export const ProductDetailsContainer: FC<ProductDetailsProps> = ({
  productDetailsData,
  reviewsData,
}) => {
  return (
    <>
      <Banner productDetailsData={productDetailsData} />
      <ProductInformation
        productInfoData={productDetailsData}
        reviewsData={reviewsData}
      />
      <ProductMayYouLike relatedProductsData={productDetailsData} />
      <HowToOrder />
      <FollowUs />
    </>
  );
};
