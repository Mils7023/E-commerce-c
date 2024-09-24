"use client";
import Image from "next/image";
import React from "react";

import styles from "./HowToOrder.module.scss";

import { getImageUrl } from "@/utils/imageHelper";

export const HowToOrder = () => {
  return (
    <section
      className={`common-padding-t common-padding-b`}
      id="howto_order_section"
    >
      <div className={`pb-md-0 pb-4`}>
        <div className="container">
          <div>
            <div className="main-title text-center">
              <h2 className="h3 black_text jua-font pb-md-4 pb-3 mb-xxl-3 mb-md-1">
                How to order
              </h2>
              <p className="black_shade5_text h6 font_rg">
                Food for us comes from our relatives, whether they have wings or
                fins or <br className="d-md-block d-none" />
                roots. considerfood. Food has a culture. It has a history.
              </p>
            </div>
            <div
              className={`row g-4 align-items-center justify-content-center`}
            >
              <div
                className={`${styles.how_to_order} text-center col-md-3 col-sm col-12`}
              >
                <Image
                  src={getImageUrl('how-to-order/step1.png')}
                  alt="Step 1"
                  title="Cannellio Cake Toppers - Step1"
                  width={120}
                  height={90}
                />
                <h3 className="h4 black_text font_smb pt-2 pb-xxl-4 pb-sm-3 pb-2">
                  Choose Toppers
                </h3>
                <p className="black_shade5_text h6 font_rg">
                  select cake or desert you
                  <br className="d-md-block d-none" /> want, order now
                </p>
              </div>
              <div className={`${styles.how_to_order_arrow} col-1 text-center`}>
                <svg
                  width="14"
                  height="23"
                  viewBox="0 0 14 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 21L12 11.5L2 2"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`${styles.how_to_order} text-center col-md-3 col-sm col-12`}
              >
                <Image
                  src={getImageUrl('how-to-order/step2.png')}
                  alt="Step 2"
                  title="Cannellio Cake Toppers - Step2"
                  width={120}
                  height={90}
                />
                <h3 className="h4 black_text font_smb pt-2 pb-xxl-4 pb-sm-3 pb-2">
                  Checkout Order
                </h3>
                <p className="black_shade5_text h6 font_rg">
                  select cake or desert you
                  <br className="d-md-block d-none" /> want, order now
                </p>
              </div>
              <div className={`${styles.how_to_order_arrow} col-1 text-center`}>
                <svg
                  width="14"
                  height="23"
                  viewBox="0 0 14 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 21L12 11.5L2 2"
                    stroke="#292D32"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={`${styles.how_to_order} text-center col-md-3 col-sm col-12`}
              >
                <Image
                  src={getImageUrl('how-to-order/step4.png')}
                  alt="Step 3"
                  title="Cannellio Cake Toppers - Step3"
                  width={120}
                  height={90}
                />
                <h3 className="h4 black_text font_smb pt-2 pb-xxl-4 pb-sm-3 pb-2">
                  Wait for Delivery
                </h3>
                <p className="black_shade5_text h6 font_rg">
                  select cake or desert you
                  <br className="d-md-block d-none" /> want, order now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
