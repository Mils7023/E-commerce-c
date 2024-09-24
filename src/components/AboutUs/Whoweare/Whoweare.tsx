"use client";
import Image from "next/image";
import React from "react";

import styles from "./Whoweare.module.scss";

import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const Whoweare = () => {
  return (
    <section id="whoweare_section">
      <div className={`${styles.whoweare_main} common-padding`}>
        <div className="container">
          <div>
            <div
              className={`row align-items-center ${styles.common_about_row} g-0`}
            >
              <div
                className={`col-lg-6 col-xxl-7 col-12 ${styles.common_about_content}`}
              >
                <h2
                  className={`h2 font_rg black_text jua-font text-capitalize ${styles.common_about_content_title}`}
                >
                  who we are
                </h2>
                <p
                  className={`font_rg black_shade7_text ${styles.common_about_content_text}`}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isnt anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable.
                </p>
              </div>
              <div
                className={`col-lg-6 col-xxl-5 col-12 d-flex justify-content-center ${styles.common_about_image}`}
              >
                <Image
                  src={getImageUrl('about-us-page/whoweare-img.png')}
                  alt="whoweare-img"
                  width={300}
                  height={0}
                  title="Who we are - whoweare-img"
                  className={`${styles.common_about_image_src} w--lg-100 w-auto`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Whoweare;
