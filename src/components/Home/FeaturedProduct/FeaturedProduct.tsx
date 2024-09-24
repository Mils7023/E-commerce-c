"use client";
import styles from "./FeaturedProduct.module.scss";
import Link from "next/link";
import { ProductCard } from "@/components/common";
import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "@/context";
import { ProductCardSkeleton } from "@/components/common";
import { Product } from "@/types";

export const FeaturedProduct = () => {
  const { featuredToppers } = useContext(HomeContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures that the component has mounted on the client
  }, []);

  return (
    <section className={`overflow-hidden`} id="featured_products_section">
      <div className={`common-padding-t common-padding-b`}>
        <div className="container">
          <div>
            <div className="main-title d-flex align-items-center justify-content-between">
              <h2 className="h2 black_text jua-font">Featured Toppers</h2>
              <Link
                href={``}
                className="btn btn-black-outline d-flex align-items-center w-auto gap-2 text-nowrap"
              >
                View All
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6512 1.84865C19.6512 1.29637 19.2035 0.848651 18.6512 0.848651L9.65123 0.848652C9.09894 0.848651 8.65123 1.29637 8.65123 1.84865C8.65123 2.40094 9.09894 2.84865 9.65123 2.84865L17.6512 2.84865L17.6512 10.8487C17.6512 11.4009 18.0989 11.8487 18.6512 11.8487C19.2035 11.8487 19.6512 11.4009 19.6512 10.8487L19.6512 1.84865ZM2.38777 19.5263L19.3583 2.55576L17.9441 1.14154L0.973557 18.1121L2.38777 19.5263Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>

            <div
              className={`${styles.featured_products_row} p_cards_row row flex-lg-wrap scrollbar flex-nowrap g-xxl-4 g-3`}
            >
              {featuredToppers.error && (
                <div className="d-flex justify-content-center w-100 items-center ">
                  <h4 className="h4 black_text d-sm-block d-none">
                    Error : Something Went Wrong! Please try again.
                  </h4>
                </div>
              )}
              {!featuredToppers.data?.items
                ? [0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                    <div
                      className={`${styles.featured_products_col} p_cards_col col-xl-3 col-lg-4 col-md col-sm-6 col`}
                      key={index}
                    >
                      <ProductCardSkeleton />
                    </div>
                  ))
                : featuredToppers.data?.items &&
                  featuredToppers?.data?.items?.map((product: Product) => (
                    <div
                      className={`${styles.featured_products_col} p_cards_col col-xl-3 col-lg-4 col-md col-sm-6 col`}
                      key={product.id}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
