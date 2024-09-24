"use client";
import Image from "next/image";
import React from "react";

import styles from "./Banner.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import Link from "next/link";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export const Banner = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);

  return (
    <section
      className={`${styles.banner_section} ${styles.global_header_spacing}`}
    >
      <div className={`${styles.banner_main} `}>
        <div className="container">
          <div className={`${styles.banner_wrapper}`}>
            <div className={`${styles.banner_title}`}>
              <h1 className="jua-font black_text font_rg h2">
                Hii, {currentUser?.firstname}
              </h1>
              <p className="black_text font_smb h5">
                Welcome to Cannellio Cake Toppers!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
