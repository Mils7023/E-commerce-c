"use client";
import Image from "next/image";
import React from "react";

import styles from "./Banner.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import Link from "next/link";

export const Banner = () => {
  return (
    <section
      className={`${styles.banner_section} ${styles.global_header_spacing}`}
    >
      <div className={`${styles.banner_main} position-relative`}>
        <div className="container">
          <div className={`${styles.banner_wrapper}`}>
            <div className={`${styles.banner_breadcrum}`}>
              <ul
                className={`${styles.banner_breadcrum_ul} ${styles.banner_breadcrum_ul_black} d-flex gap-md-3 gap-2 align-items-center flex-wrap`}
              >
                <li className={`${styles.banner_breadcrum_li}`}>
                  <Link
                    className={`${styles.banner_breadcrum_a} h6 font_rg text-uppercase white_text`}
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
                      stroke="white"
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
                    className={`${styles.banner_breadcrum_a} ${styles.banner_breadcrum_active} h6 text-uppercase white_text`}
                    href="#"
                  >
                    seasonal toppers
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.banner_title}`}>
              <h1 className="white_text font_rg h2 jua-font">
                Seasonal Toppers
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
