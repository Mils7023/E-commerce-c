import {
  Banner,
  FollowUs,
  Listing,
  Faq,
} from "@/components/FeatureProductPage";
import React from "react";

export const FeaturedProductContainer = () => {
  return (
    <>
      <Banner />
      <Listing />
      <Faq />
      <FollowUs />
    </>
  );
};
