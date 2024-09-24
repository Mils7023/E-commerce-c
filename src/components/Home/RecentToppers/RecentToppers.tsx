"use client";
import styles from "./RecentToppers.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ProductCard } from "@/components/common";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "@/context";
import { ProductCardSkeleton } from "@/components/common";
import { Product } from "@/types";

export const RecentToppers = () => {
  const { recentAddedProduct } = useContext(HomeContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsClient(true); // This ensures that the component has mounted on the client
    });

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!recentAddedProduct?.data?.items) {
    // Render only skeleton or fallback while waiting for client-side rendering
    return (
      <section id="recently_products_section">
        <div className="common-padding-t">
          <div className="container">
            <div className="main-title">
              <h2 className="h2 black_text jua-font d-sm-block d-none">
                Recents Added Toppers
              </h2>
              <h2 className="h2 black_text jua-font d-sm-none d-block">
                Recents Added
              </h2>
            </div>
            <div className="pb-5 pt-3 p_cards_row p_cards_slider">
              <div className="d-flex flex-nowrap gap-3 gap-xxl-4">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    className={`${styles.recently_products_col} p_cards_col col-xl-3 col-lg-4 col-md col-sm-6 col`}
                    key={index}
                  >
                    <ProductCardSkeleton />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="recently_products_section">
      <div className={`common-padding-t`}>
        <div className="container">
          <div>
            <div className="main-title">
              <h2 className="h2 black_text jua-font d-sm-block d-none">
                Recents Added Toppers
              </h2>
              <h2 className="h2 black_text jua-font d-sm-none d-block">
                Recents Added
              </h2>
            </div>
            {recentAddedProduct.error && (
              <div className="d-flex justify-content-center w-100 items-center ">
                <h4 className="h4 black_text d-sm-block d-none">
                  Error : Something Went Wrong! Please try again.
                </h4>
              </div>
            )}
            <Swiper
              slidesPerView={1.1}
              spaceBetween={16}
              navigation={true}
              breakpoints={{
                400: {
                  spaceBetween: 16,
                  slidesPerView: 1.3,
                },
                640: {
                  spaceBetween: 16,
                  slidesPerView: 2,
                },
                768: {
                  spaceBetween: 16,
                  slidesPerView: 2.6,
                },
                900: {
                  spaceBetween: 16,
                  slidesPerView: 3.1,
                },
                992: {
                  spaceBetween: 16,
                  slidesPerView: 3,
                },
                1400: {
                  spaceBetween: 24,
                  slidesPerView: 4,
                },
              }}
              modules={[Navigation]}
              className="pb-5 pt-3 p_cards_row p_cards_slider common-slider-arrows slider-arrows-top"
            >
              {recentAddedProduct.error && (
                <div className="d-flex justify-content-center w-100 items-center ">
                  <h4 className="h4 black_text d-sm-block d-none">
                    Error: Something Went Wrong! Please try again.
                  </h4>
                </div>
              )}

              {recentAddedProduct.loading
                ? [0, 1, 2, 3].map((index) => (
                    <SwiperSlide key={index}>
                      <div
                        className={`${styles.recently_products_col} p_cards_col col-xl-3 col-lg-4 col-md col-sm-6 col`}
                      >
                        <ProductCardSkeleton />
                      </div>
                    </SwiperSlide>
                  ))
                : recentAddedProduct?.data?.items?.map((product: Product) => (
                    <SwiperSlide key={product.id}>
                      <div
                        className={`${styles.recently_products_col} p_cards_col`}
                      >
                        <ProductCard product={product} />
                      </div>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
