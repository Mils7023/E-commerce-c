"use client";
import {
  Banner,
  FollowUs,
  Listing,
  Faq,
} from "@/components/SearchProductListing";
import { convertObjectToQuerystring } from "@/utils/helper";
import { usePathname, useRouter } from "next/navigation";
import React, { FC, useState } from "react";

export interface SearchProductListingProps {
  productData: any;
  searchParams: any;
  sidebarFilters: any;
}

export const SearchListingContainer: FC<SearchProductListingProps> = ({
  productData,
  searchParams,
  sidebarFilters,
}) => {
  const [mobileFilters, setMobileFilters] = useState<any>({});
  const router = useRouter();
  const pathname = usePathname();

  const handleAddFilter = (value: any) => {
    const query = convertObjectToQuerystring({ ...searchParams, ...value });
    router.push(`${pathname}?${query}`, { scroll: false });
  };
  const handleRemoveFilter = (value?: any) => {
    if (value !== "search") {
      const { search, ...rest } = searchParams;
      const query = search ? convertObjectToQuerystring({ search }) : "";
      router.replace(`${pathname}?${query}`, { scroll: false });
    } else {
      router.replace(`${pathname}?search=${searchParams.search}`, {
        scroll: false,
      });
    }
  };

  const applyMobileFilters = () => {
    handleAddFilter(mobileFilters);
  };

  return (
    <>
      <Banner
        searchTerm={searchParams.search}
        totalCount={productData.productTopSearch.total_count}
      />
      <Listing
        productData={productData}
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
