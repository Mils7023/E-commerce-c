"use client";
import Image from "next/image";
import React, { FC } from "react";

import styles from "./Banner.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import Link from "next/link";
import { formatBreadcrumb } from "@/utils/helper";

export interface BannerProps {
  sidebarFilters: any;
}

export const Banner: FC<BannerProps> = ({ sidebarFilters }) => {
  const path = sidebarFilters.categories.items[0].url_path;
  const linkPath = path.split("/");
  linkPath.shift();

  const pathArray = linkPath.map((path: string, i: number) => {
    return { breadcrumb: path, href: "/" + linkPath.slice(0, i + 1).join("/") };
  });

  const pageTitle =
    pathArray.length > 0 ? pathArray[pathArray.length - 1].breadcrumb : "Home";

  return (
    <section
      className={`${styles.banner_section} ${styles.global_header_spacing}`}
    >
      <div className={`${styles.banner_main} `}>
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
                {pathArray.map((path: any, index: number) => (
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
                        href={path.href}
                      >
                        {formatBreadcrumb(path.breadcrumb)}
                      </Link>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className={`${styles.banner_title}`}>
              <h1 className="jua-font white_text font_rg h2">
                {formatBreadcrumb(pageTitle)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
