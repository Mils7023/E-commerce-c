"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProductListingByShapeContainer } from "@/container";

const ProductListingByShapePage = () => {
  // You can fetch data based on the categorySlug here if needed
  // Or pass it down to the ProductListingContainer
  return <ProductListingByShapeContainer />;
};

export default ProductListingByShapePage;
