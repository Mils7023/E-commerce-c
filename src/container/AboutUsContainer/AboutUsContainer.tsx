import {
  Banner,
  FollowUs,
  Faq,
  Whoweare,
  Ingredients,
  OurJourney,
} from "@/components/AboutUs";
import React from "react";

export const AboutUsContainer = () => {
  return (
    <>
      <Banner />
      <Whoweare />
      <OurJourney />
      <Ingredients />
      <Faq />
      <FollowUs />
    </>
  );
};
