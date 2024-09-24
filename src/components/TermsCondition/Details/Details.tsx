"use client";
import Image from "next/image";
import React from "react";
import styles from "./Details.module.scss";
export const Details = () => {
  return (
    <section id="terms-condition">
      <div
        className={`${styles.details_main} common-padding-t common-padding-b`}
      >
        <div className="container">
          <div
            className={`${styles.detail_wrapper} d-flex flex-column gap-xl-5 gap-4 mb-5`}
          >
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Introduction
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                Welcome to Cannellio Cakes! These terms and conditions outline
                the rules and regulations for using our website and purchasing
                products. By accessing this website, we assume you accept these
                terms in full. Do not continue to use Cannellio Cakes if you do
                not agree to all the terms and conditions stated here.
              </p>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Changes to Terms
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                Cannellio Cakes reserves the right to change, modify, or replace
                these Terms and Conditions at any time. Your continued use of
                the website after such modifications means that you agree to the
                new terms. Please check back periodically for updates.
              </p>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Eligibility
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                To use this website, you must be at least [insert age] years old
                or have parental/guardian consent. By placing an order on our
                website, you confirm that you meet these eligibility
                requirements.
              </p>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Ordering Process
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                By placing an order on Cannellio Cakes, you agree that:
              </p>
              <ul className="disc-list-style ps-4 ms-1 d-flex flex-column gap-1 pt-1">
                <li className="h6 black_shade5_text font_rg">
                  All information you provide is accurate and complete.
                </li>
                <li className="h6 black_shade5_text font_rg">
                  The product details (like colors, sizes, designs) are as per
                  your request.
                </li>
                <li className="h6 black_shade5_text font_rg">
                  Once an order is placed, cancellations or modifications may
                  not be accepted after [insert timeframe].
                </li>
              </ul>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Payments
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                We accept the following payment methods: [list payment options].
                Full payment must be made at the time of order. We use secure
                third-party payment gateways, and Cannellio Cakes does not store
                any payment information.
              </p>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Shipping and Delivery
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                We aim to dispatch all orders within [insert time frame].
                Estimated delivery times depend on your location and selected
                shipping method. Cannellio Cakes is not responsible for delays
                caused by shipping carriers or customs.
              </p>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Return and Refund Policy
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                Due to the nature of our products, all sales are final. However,
                if a product is damaged or defective upon arrival, please
                contact us within [insert time frame] for a replacement or
                refund. Cannellio Cakes may request photographic evidence of the
                damaged product before processing any refunds or replacements.
              </p>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Product Descriptions and Accuracy
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                While we aim to describe our products as accurately as possible,
                there may be slight variations in color or design due to screen
                settings or materials used. Cannellio Cakes does not guarantee
                that product descriptions or other content on the site are
                error-free.
              </p>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Intellectual Property
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                All content on this website, including images, graphics, logos,
                and text, is the property of Cannellio Cakes. You may not use,
                reproduce, or distribute any content from this website without
                our written consent.
              </p>
            </div>

            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Limitation of Liability
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                All content on this website, includingCannellio Cakes is not
                liable for any direct, indirect, incidental, or consequential
                damages resulting from:
              </p>
              <ul className="disc-list-style ps-4 ms-1 d-flex flex-column gap-1 pt-1">
                <li className="h6 black_shade5_text font_rg">
                  The use or inability to use our website or services.
                </li>
                <li className="h6 black_shade5_text font_rg">
                  Unauthorized access to or alteration of your data.
                </li>
                <li className="h6 black_shade5_text font_rg">
                  Any third-party content or website linked through Cannellio
                  Cakes. images, graphics, logos, and text, is the property of
                  Cannellio Cakes. You may not use, reproduce, or distribute any
                  content from this website without our written consent.
                </li>
              </ul>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  User Accounts
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                If you create an account on our website, you are responsible for
                maintaining the confidentiality of your login information and
                for all activities that occur under your account. Cannellio
                Cakes reserves the right to terminate accounts if users are
                found in violation of these terms.
              </p>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Governing Law
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                These terms and conditions are governed by and construed in
                accordance with the laws of [insert country/state]. Any disputes
                arising from these terms will be subject to the exclusive
                jurisdiction of the courts in that region.
              </p>
            </div>
            <div className={styles.details_points}>
              <ul className={` disc-list-style ps-3 ms-1 pb-lg-4 pb-3`}>
                <li
                  className={`h4 black_text font_smb ${styles.details_points_title}`}
                >
                  Contact Us
                </li>
              </ul>
              <p className="h6 black_shade5_text font_rg">
                If you have any questions regarding these Terms & Conditions,
                feel free to contact us at [insert email address].
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
