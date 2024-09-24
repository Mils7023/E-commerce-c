"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { BlogsContainer } from "@/container";

const BlogsPage = () => {
  // You can fetch data based on the categorySlug here if needed
  // Or pass it down to the ProductListingContainer
  return <BlogsContainer />;
};

export default BlogsPage;
