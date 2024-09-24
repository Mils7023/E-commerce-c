"use client";
import React, { FC, useState } from "react";
import styles from "./Banner.module.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import Link from "next/link";
import { ProductDetailsContent, ProductDetailsImage } from "@/components";

export interface BannerProps {
  productDetailsData: any;
}

export const Banner: FC<BannerProps> = ({ productDetailsData }) => {
  const [variantImg, setVariantImg] = useState<any>({});
  const [thumbsSwiper, setThumbsSwiper] = useState<any>("");

  const [isBestSellingProduct] = useState(true);

  const crumbs =
    productDetailsData.products.items.map((bread: any) => {
      const categories = bread.categories;
      return categories.length > 0 ? categories[categories.length - 1] : null;
    })[0] || [];

  const productCrumbs = productDetailsData.products.items[0];

  return (
    <section
      className={`${styles.banner_section} ${styles.global_header_spacing}`}
    >
      <div className={`${styles.banner_main} position-relative`}>
        <div className="container">
          <div className={`${styles.banner_wrapper}`}>
            <div className={`${styles.banner_breadcrum}`}>
              <ul
                className={`${styles.banner_breadcrum_ul} ${styles.banner_breadcrum_ul_black} d-flex gap-lg-3 gap-2 align-items-center flex-wrap`}
              >
                <li className={`${styles.banner_breadcrum_li}`}>
                  <Link
                    className={`${styles.banner_breadcrum_a} h6 font_rg text-uppercase `}
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                {crumbs?.breadcrumbs?.map((bread: any, index: number) => (
                  <React.Fragment key={index}>
                    <li className={`${styles.banner_breadcrum_li}`}>
                      <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.42499 14.5999L6.85832 9.16657C7.49999 8.5249 7.49999 7.4749 6.85832 6.83324L1.42499 1.3999"
                          stroke="rgb(28, 44, 57)"
                          strokeOpacity="0.8"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </li>
                    <li className={`${styles.banner_breadcrum_li}`}>
                      <Link
                        className={`${styles.banner_breadcrum_a} h6 font_rg text-uppercase `}
                        href={bread.category_url_path}
                      >
                        {bread.category_name}
                      </Link>
                    </li>
                  </React.Fragment>
                ))}
                <li className={`${styles.banner_breadcrum_li}`}>
                  <svg
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.42499 14.5999L6.85832 9.16657C7.49999 8.5249 7.49999 7.4749 6.85832 6.83324L1.42499 1.3999"
                      stroke="rgb(28, 44, 57)"
                      strokeOpacity="0.8"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>
                <li className={`${styles.banner_breadcrum_li}`}>
                  <Link
                    className={`${styles.banner_breadcrum_a} ${styles.banner_breadcrum_active} h6 text-uppercase`}
                    href={productCrumbs.url_key}
                  >
                    {productCrumbs.name}
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.product_details}`}>
              <div className={`${styles.product_details_image}`}>
                {productDetailsData.products.items.map((item: any) => (
                  <ProductDetailsImage
                    key={item.uid}
                    thumbsSwiper={thumbsSwiper}
                    setThumbsSwiper={setThumbsSwiper}
                    item={item}
                    variantImg={variantImg}
                  />
                ))}
              </div>
              <div className={`${styles.product_details_content}`}>
                {productDetailsData.products.items.map((item: any) => (
                  <ProductDetailsContent
                    key={item.uid}
                    isBestSellingProduct={isBestSellingProduct}
                    item={item}
                    setVariantImg={setVariantImg}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
