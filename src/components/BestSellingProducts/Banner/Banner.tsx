"use client";
import Image from "next/image";
import React from "react";

import styles from "./Banner.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const Banner = () => {
  return (
    <section
      className={`${styles.banner_section} ${styles.global_header_spacing}`}
    >
      <div className={`${styles.banner_main} position-relative`}>
        <div className="container">
          <div className={`${styles.banner_wrapper}`}>
            <div className="row">
              <div className="col-md-7 col-xl-6 col-12">
                <div className={`${styles.banner_breadcrum}`}>
                  <ul
                    className={`${styles.banner_breadcrum_ul} ${styles.banner_breadcrum_ul_black} d-flex gap-md-3 gap-2 align-items-center flex-wrap`}
                  >
                    <li className={`${styles.banner_breadcrum_li}`}>
                      <Link
                        className={`${styles.banner_breadcrum_a} h6 font_rg text-uppercase`}
                        href="#"
                      >
                        Home
                      </Link>
                    </li>
                    <li className={`${styles.banner_breadcrum_li}`}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.42578 16.5999L12.8591 11.1666C13.5008 10.5249 13.5008 9.4749 12.8591 8.83324L7.42578 3.3999"
                          stroke="black"
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
                        href="#"
                      >
                        best selling products
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={`${styles.banner_title}`}>
                  <h1 className="black_text font_rg h2 jua-font">
                      Best Selling Toppers
                  </h1>
                </div>
              </div>

              <div className="col-md-5 col-xl-6 text-center col-12 pt-md-0 pt-4">
                <Image
                  alt="Search Image"
                  className={`${styles.bestSellingProductImage} max- w-100 h-100`}
                  width={0}
                  height={0}
                  src={getImageUrl('best-selling/best-selling-image.png')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
