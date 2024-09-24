import {
  Banner,
  FollowUs,
  Listing,
  Faq,
} from "@/components/ProductListingByShape";
import React from "react";

export const ProductListingByShapeContainer = () => {
  return (
    <>
      <Banner />
      <Listing />
      <Faq />
      <FollowUs />
    </>
  );
};
