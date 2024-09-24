"use client";
import Image from "next/image";
import React from "react";
import styles from "./CtaBanner.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const CtaBanner = () => {
  return (
    <section className={`common-padding-t position-relative`} id="cta_section">
      <div className={`${styles.cta_main}`}>
        <div className="container">
          <div className={`${styles.cta_wrapper} row g-0 align-items-center`}>
            <div className={`${styles.cta_left} col-sm-4 col-12`}>
              <Image
                src={getImageUrl('cta/cta-img.png')}
                alt=""
                title=""
                width={700}
                height={490}
                className="w-100 h-100"
              />
            </div>
            <div className={`${styles.cta_right} col-sm-8 col-12`}>
              <div className="main-title d-flex flex-column gap-xxl-5 gap-4 pt-sm-0 pt-4 align-items-center pb-0">
                <h2 className="h2 black_shade8_text jua-font text-center">
                  Make A Personalised Cake
                  <br className="d-sm-block d-none" /> With Customize Toppers
                </h2>
                <Link href="" className="btn btn-white">
                  Make Personalised Toppers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
