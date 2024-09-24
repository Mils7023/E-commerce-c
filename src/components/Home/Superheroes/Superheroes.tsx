"use client";
import { ProductCard } from "@/components/common";
import styles from "./Superheroes.module.scss";
import { Product } from "@/types";
import { useContext } from "react";
import { HomeContext } from "@/context";
import { ProductCardSkeleton } from "@/components/common";

export const Superheroes = () => {
  const { superheroToppers } = useContext(HomeContext);

  return (
    <section id="superheroes_products_main">
      <div className={`common-padding-t`}>
        <div className="container">
          <div>
            <div className="main-title">
              <h2 className="h2 black_text jua-font d-sm-block d-none">
                Super Heroes Toppers
              </h2>
              <h2 className="h2 black_text jua-font d-sm-none d-block">
                Super Heroes
              </h2>
            </div>

            <div
              className={`${styles.superheroes_products_row} p_cards_row row g-xxl-4 g-3`}
            >
              {superheroToppers.error && (
                <div className="d-flex justify-content-center w-100 items-center ">
                  <h4 className="h4 black_text d-sm-block d-none">
                    Error : Something Went Wrong! Please try again.
                  </h4>
                </div>
              )}
              {!superheroToppers.data?.items
                ? [0, 1, 2, 3, 4, 5].map((index) => (
                    <ProductCardSkeleton key={index} isSuperhero={true} />
                  ))
                : superheroToppers.data?.items &&
                  superheroToppers?.data?.items?.map((product: Product) => (
                    <ProductCard
                      product={product}
                      key={product.id}
                      isSuperhero
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
