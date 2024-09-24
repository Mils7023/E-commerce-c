"use client";
import Link from "next/link";
import { ProductCard } from "@/components/common";
import styles from "./ProductMayYouLike.module.scss";
import { FC } from "react";
import { ProductCardSkeleton } from "@/components/common";

export interface ProductMayYouLikeProps {
  relatedProductsData: any;
}

export const ProductMayYouLike: FC<ProductMayYouLikeProps> = ({
  relatedProductsData,
}) => {
  return (
    <section className={`overflow-hidden`} id="seasonal_products_section">
      <div className={`common-padding-t`}>
        <div className="container">
          <div>
            <div className="main-title d-flex align-items-center justify-content-between">
              <h2 className="h2 black_text jua-font">Products may you like</h2>
            </div>

            {!relatedProductsData?.products?.items ? (
              <div
                className={`${styles.liked_products_row} p_cards_row scrollbar row flex-lg-wrap scrollbar flex-nowrap g-xxl-4 g-3`}
              >
                {[0, 1, 2, 3].map((index) => (
                  <div
                    className={` p_cards_col col-xl-3 col-lg-4 col-md  col-sm-6 col`}
                    key={index}
                  >
                    <ProductCardSkeleton />
                  </div>
                ))}
              </div>
            ) : (
              relatedProductsData?.products?.items &&
              relatedProductsData?.products?.items?.map(
                (product: any, index: any) => (
                  <div
                    key={index}
                    className={`${styles.liked_products_row} p_cards_row scrollbar row flex-lg-wrap scrollbar flex-nowrap g-xxl-4 g-3`}
                  >
                    {product?.related_products.map(
                      (related: any, index: any) => (
                        <div
                          className={` p_cards_col col-xl-3 col-lg-4 col-md  col-sm-6 col`}
                          key={index}
                        >
                          <ProductCard product={related} />
                        </div>
                      )
                    )}
                  </div>
                )
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
