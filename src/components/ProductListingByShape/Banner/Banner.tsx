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
      <div className={`${styles.banner_main} `}>
        <div className="container">
          <div className={`${styles.banner_wrapper} row g-md-3`}>
            <div className="col-md-6">
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
                      className={`${styles.banner_breadcrum_a} ${styles.banner_breadcrum_active} h6 text-uppercase `}
                      href="#"
                    >
                      round toppers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={`${styles.banner_title}`}>
                <h1 className="jua-font black_text font_rg h2">
                  Round Toppers
                </h1>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <Image
                src={getImageUrl("cake-shape/round-cake.png")}
                alt="Round Cake Toppers"
                title="Cannellio Cake Toppers - Round Cake Toppers"
                className="w-auto"
                width={100}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
