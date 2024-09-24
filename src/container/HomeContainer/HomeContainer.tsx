// container/HomeContainer.tsx

import React, { FC } from "react";
import { HomeProvider } from "@/context";
import { HomeContextType } from "@/types";
import {
  Banner,
  HighlightedProducts,
  RecentToppers,
  Superheroes,
  OccasionToppers,
  FeaturedProduct,
  AboutUs,
  BestSellingProducts,
  CtaBanner,
  SeasonalProducts,
  CustomerGallery,
  Blogs,
  HowToOrder,
  FollowUs,
} from "@/components";

export interface HomeContainerProps {
  ssrData: HomeContextType;
}

export const HomeContainer: FC<HomeContainerProps> = ({ ssrData }) => {
  return (
    <HomeProvider value={ssrData}>
      <Banner />
      <HighlightedProducts />
      <RecentToppers />
      <Superheroes />
      <OccasionToppers />
      <FeaturedProduct />
      <AboutUs />
      <BestSellingProducts />
      <CtaBanner />
      <SeasonalProducts />
      <CustomerGallery />
      <Blogs />
      <HowToOrder />
      <FollowUs />
    </HomeProvider>
  );
};
