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
      <div className={`${styles.banner_main}`}>
        <div className="container">
          <div className={`${styles.banner_wrapper}`}>
            <div className={`${styles.banner_breadcrum}`}>
              <ul
                className={`${styles.banner_breadcrum_ul} d-flex gap-md-3 gap-2 align-items-center flex-wrap`}
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
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.42499 14.5999L6.85832 9.16657C7.49999 8.5249 7.49999 7.4749 6.85832 6.83324L1.42499 1.3999"
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
                    className={`${styles.banner_breadcrum_a} h6 font_rg text-uppercase`}
                    href="#"
                  >
                    our world
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
                    className={`${styles.banner_breadcrum_a} ${styles.banner_breadcrum_active} h6 text-uppercase `}
                    href="#"
                  >
                    about us
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.banner_title}`}>
              <h1 className="jua-font white_text font_rg h2 text-capitalize">
                about us
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
