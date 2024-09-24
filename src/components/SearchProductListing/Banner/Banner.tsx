"use client";
import Image from "next/image";
import React, { FC } from "react";

import styles from "./Banner.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import Link from "next/link";

export interface BannerProps {
  searchTerm: string;
  totalCount: number;
}

export const Banner: FC<BannerProps> = ({ searchTerm, totalCount }) => {
  return (
    <section
      className={`${styles.banner_section} ${styles.global_header_spacing}`}
    >
      <div
        className={`${styles.banner_main} ${styles.banner_main_col} position-relative`}
      >
        <div className="container">
          <div className={`${styles.banner_wrapper}`}>
            <div className={`${styles.banner_breadcrum}`}>
              <ul
                className={`${styles.banner_breadcrum_ul} ${styles.banner_breadcrum_ul_black} d-flex gap-md-3 gap-2 align-items-center flex-wrap`}
              >
                <li className={`${styles.banner_breadcrum_li}`}>
                  <Link
                    className={`${styles.banner_breadcrum_a} h6 font_rg text-uppercase `}
                    href="#"
                  >
                    Home
                  </Link>
                </li>
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
                  {searchTerm ? (
                    <Link
                      className={`${styles.banner_breadcrum_a} ${styles.banner_breadcrum_active} h6 text-uppercase`}
                      href="#"
                    >
                      search: {totalCount} results found for {searchTerm}
                    </Link>
                  ) : (
                    <Link
                      className={`${styles.banner_breadcrum_a} ${styles.banner_breadcrum_active} h6 text-uppercase`}
                      href="#"
                    >
                      search: {totalCount} results found for all products
                    </Link>
                  )}
                </li>
              </ul>
            </div>
            <div className={`${styles.banner_title}`}>
              {searchTerm ? (
                <h1 className="secondary_text font_smb h2 line-clamp line-clamp3">
                  Search Result For: {`"${searchTerm}"`}
                </h1>
              ) : (
                <h1 className="secondary_text font_smb h2 line-clamp line-clamp3">
                  Search Result For All Products
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
