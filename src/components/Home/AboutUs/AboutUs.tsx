"use client";
import Image from "next/image";
import React from "react";
import styles from "./AboutUs.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const AboutUs = () => {
  return (
    <section
      className={`secondary_bg common-padding-t common-padding-b position-relative`}
      id="aboutus_section"
    >
      <div className={`${styles.aboutus_main} `}>
        <Image
          src={getImageUrl('aboutus/about-vector1.png')}
          alt=""
          title=""
          width={297}
          height={260}
          className={`${styles.vector1} d-md-block d-none`}
        />
        <div className="container">
          <div
            className={`${styles.aboutus_wrapper} row g-0 flex-lg-row flex-column-reverse`}
          >
            <div className={`${styles.aboutus_left} col-lg-7 col-12`}>
              <div className="main-title d-flex flex-column gap-4 align-items-sm-start align-items-center pb-0">
                <h2 className="h3 black_text jua-font ">About Cannelio Cake</h2>
                <p className="black_shade5_text h6 font_rg text-sm-start text-center">
                  Food for us comes from our relatives, whether they have wings
                  or fins or roots. considerfood. Food has a culture. It has a
                  history. Food for us comes from our relatives, whether they
                  have wings or fins or roots. considerfood. Food has a culture.
                  It has a history.Food for us comes from our relatives, whether
                  they have wings or fins or roots. considerfood. Food has a
                  culture. It has a history. Food for us comes from our
                  relatives, whether they have wings or fins or roots.
                  considerfood. Food has a culture. It has a history.ood for us
                  comes from our relatives, whether they have wings or fins or
                  roots. considerfood. Food has a culture. It has a history.
                </p>
                <Link href="" className="btn btn-gradient">
                  Know More About Us
                </Link>
              </div>
            </div>
            <div className={`${styles.aboutus_right} col-lg-5 col-12`}>
              <Image
                src={getImageUrl('aboutus/aboutus-img.png')}
                alt=""
                title=""
                width={700}
                height={490}
                className="w-100 h-100"
              />
            </div>
          </div>
        </div>
        <Image
          src={getImageUrl('aboutus/aboutus-vector2.png')}
          alt=""
          title=""
          width={238}
          height={237}
          className={`${styles.vector2}`}
        />
      </div>
    </section>
  );
};

// export default Banner;
