"use client";

import { Banner, FollowUs, Listing, Faq } from "@/components/ProductListing";
import { convertObjectToQuerystring } from "@/utils/helper";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, useState } from "react";

export interface ProductListingProps {
  searchParams: any;
  sidebarFilters: any;
}

export const ProductListingContainer: FC<ProductListingProps> = ({
  searchParams,
  sidebarFilters,
}) => {
  console.log("sidebar: ", sidebarFilters);
  const [mobileFilters, setMobileFilters] = useState<any>({});
  const router = useRouter();
  const pathname = usePathname();

  const handleAddFilter = (value: any) => {
    const updatedParams = { ...searchParams, ...value };

    if (updatedParams.page === 1) {
      delete updatedParams.page;
    }

    const query = convertObjectToQuerystring(updatedParams);
    router.push(`${pathname}?${query}`, { scroll: false });
  };

  const handleRemoveFilter = (value?: any) => {
    if (value) {
      delete searchParams[value];
      const query = convertObjectToQuerystring({ ...searchParams });
      router.replace(`${pathname}?${query}`, { scroll: false });
    } else {
      router.replace(`${pathname}`, { scroll: false });
    }
  };

  const applyMobileFilters = () => {
    handleAddFilter(mobileFilters);
  };

  return (
    <>
      <Banner sidebarFilters={sidebarFilters} />
      <Listing
        sidebarFilters={sidebarFilters}
        handleAddFilter={handleAddFilter}
        handleRemoveFilter={handleRemoveFilter}
        searchParams={searchParams}
        setMobileFilters={setMobileFilters}
        applyMobileFilters={applyMobileFilters}
      />
      <Faq />
      <FollowUs />
    </>
  );
};
