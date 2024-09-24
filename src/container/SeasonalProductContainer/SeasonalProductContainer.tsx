import {
  Banner,
  FollowUs,
  Listing,
  Faq,
} from "@/components/SeasonalProductPage";
import React from "react";

export const SeasonalProductContainer = () => {
  return (
    <>
      <Banner />
      <Listing />
      <Faq />
      <FollowUs />
    </>
  );
};
