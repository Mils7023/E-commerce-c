"use client";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./ProductInformation.module.scss";
import Accordion from "react-bootstrap/Accordion";
import ProgressBar from "react-bootstrap/ProgressBar";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Link from "next/link";
import { Form, RichContent } from "@/components";
import { getImageUrl } from "@/utils/imageHelper";

export interface ReviewFormValue {
  productInfoData: any;
  reviewsData: any;
}

export const ProductInformation: FC<ReviewFormValue> = ({
  productInfoData,
  reviewsData,
}) => {
  const handleTabChange = () => {};

  return (
    <section className="common-padding-t" id="product_info_sec">
      <div className={styles.product_info_main}>
        <div className="container">
          <Tabs
            defaultActiveKey="p_info"
            id="p_info_navs"
            className="p_info_navs"
          >
            <Tab
              eventKey="p_info"
              title="Product information"
              className="p_info_nav"
            >
              {productInfoData?.products?.items.map((tech: any, index: any) => (
                <div
                  key={index}
                  className={`${styles.p_info_tab} ${styles.common_p_info_card} `}
                >
                  <div className="row g-xxl-5 g-lg-4 g-md-2 g-sm-5 g-4 pb-sm-5 pb-4">
                    <div className={`col-md-5 col-12`}>
                      <div className={styles.p_info_wrapper}>
                        <span
                          className={`${styles.p_info_title} black_text font_smb`}
                        >
                          Technical Details
                        </span>
                        <div className={`${styles.p_info_content}`}>
                          <ul
                            className={`${styles.info_details} d-flex flex-column`}
                          >
                            {tech.technical_information.map(
                              (info: any, index: any) => (
                                <li key={index}>
                                  <div className="row g-lg-4 g-3">
                                    <span
                                      className={`col-6 font-18 ${styles.p_info_text} black_text font_rg`}
                                    >
                                      {info.title}
                                    </span>
                                    <span
                                      className={`col-6 font-18 ${styles.p_info_text} black_text font_rg`}
                                    >
                                      {info.description}
                                    </span>
                                  </div>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`col-md-1 col-12 text-center d-md-block d-flex`}
                    >
                      <span
                        className={`${styles.h_divider} d-md-inline-block d-none`}
                      ></span>
                      <span
                        className={`${styles.v_divider} d-md-none d-inline-block`}
                      ></span>
                    </div>
                    <div className={`col-md-6 col-12`}>
                      <div className="pb-xl-5 pb-4 mb-xxl-1">
                        <Image
                          alt=""
                          title=""
                          src={getImageUrl(
                            "product-detail/product-infor-img.svg"
                          )}
                          width={0}
                          height={0}
                          className="w-100 h-100"
                        />
                      </div>
                      <div className={styles.p_info_wrapper}>
                        <span
                          className={`${styles.p_info_title} black_text font_smb`}
                        >
                          Warranty & Support
                        </span>
                        <div className={`${styles.p_info_content}`}>
                          <ul className={`disc-list-style ps-3 ms-2`}>
                            <li
                              className={`font-18 ${styles.p_info_text} black_text font_rg`}
                            >
                              Cannellio.com Return Policy: Regardless of your
                              statutory right of withdrawal, you enjoy a 30-day
                              right of return for many products. For exceptions
                              and conditions, see{" "}
                              <Link
                                href=""
                                className="text-decoration-underline"
                              >
                                Return policy
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.p_info_wrapper}>
                    <span
                      className={`${styles.p_info_title} black_text font_smb`}
                    >
                      Product information
                    </span>
                    <div className={`${styles.p_info_content}`}>
                      <p
                        className={`font-18 ${styles.p_info_text} black_text font_rg`}
                      >
                        Many thanks for looking at our product today The price
                        is for a large PRECUT 7.5 inch / 19 cms diameter round
                        edible cake topper printed on our premium icing sheet.
                        If you require matching cupcake toppers printed onto an
                        icing sheet - please contact us and we can list them for
                        you. The toppers are made from 100% edible products
                        Simply remove the backing sheet from your cake topper –
                        if you have any problem peeling the backing sheet off,
                        just place the sheet into the freezer for a few seconds,
                        and it will lift away easily. I normally count to 15!
                        Place the cake topper onto your chosen cake, suitable
                        for use on icing, marzipan and buttercream/frosting. I
                        always suggest attaching your cake topper with a
                        buttercream or frosting – or you can slightly dampen a
                        fondant icing so that it goes “tacky” to touch, and your
                        icing sheet will stick to that great. We suggest you use
                        your cake topper within 6 months of purchase. So a great
                        lead-time for any party organising. All our icing sheets
                        are made to order for you – we don’t carry any stock
                        that has been sat on shelves for months – always printed
                        fresh once you have ordered. Always store your cake
                        topper flat and in a room temperature environment, a
                        bedroom drawer is always a great idea, away from any
                        little ones that might want to eat the cake topper
                        before their birthday – never store in a fridge or
                        freezer – this will affect the edible inks on your
                        image! Our icing toppers ingredients are:- Modified
                        starches (E1422, E1412), maltodextrin, glycerol, sugar,
                        water, thickners (E4601, E414, E415), dextrose,
                        food-colour, emulsifiers (E435, E471, E491),
                        preservative (E202), citric acid (E330), artificial
                        flavor and printed with high quality edible ink - All
                        ingredients are 100% vegetarian.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Tab>
            <Tab eventKey="p_review" title="Reviews" className="p_info_nav">
              <div
                className={`${styles.p_review_tab} ${styles.common_p_info_card} `}
              >
                {productInfoData?.products?.items.map((review: any) => (
                  <div
                    key={review.id}
                    className="row g-xxl-5 g-lg-3 g-4 pb-lg-5 pb-4"
                  >
                    <div className={`col-sm col-12`}>
                      <div
                        className={`${styles.p_review_counts_wrapper} text-lg-start text-center`}
                      >
                        <span
                          className={`${styles.p_review_counts_title} primary_text font_smb`}
                        >
                          Total reviews
                        </span>
                        <div className={`${styles.p_review_counts_content}`}>
                          <span className="black_text h3 font_smb pb-xl-3 pb-sm-2 pb-1 d-inline-block">
                            {review.review_count}
                          </span>
                          <p className="h6 black_text font_md">
                            Growth in reviews on this year
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`col-sm-1 col-12 text-center d-md-block d-flex`}
                    >
                      <span
                        className={`${styles.h_divider} d-sm-inline-block d-none`}
                      ></span>
                      <span
                        className={`${styles.v_divider} d-sm-none d-inline-block`}
                      ></span>
                    </div>
                    <div className={`col-sm col-12`}>
                      <div
                        className={`${styles.p_review_counts_wrapper} text-lg-start text-center`}
                      >
                        <span
                          className={`${styles.p_review_counts_title} primary_text font_smb`}
                        >
                          Average Ratings
                        </span>
                        <div className={`${styles.p_review_counts_content}`}>
                          <div className="d-flex justify-content-lg-start justify-content-center align-items-center gap-3 pb-xl-3 pb-sm-2 pb-1">
                            <span className="black_text h4 font_smb">
                              {review.rating_summary}
                            </span>
                            <div
                              className={`${styles.product_ratings_stars} d-flex align-items-center gap-1`}
                            >
                              <svg
                                width="34"
                                height="32"
                                viewBox="0 0 19 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                                  fill="#FFA83A"
                                />
                              </svg>
                              <svg
                                width="34"
                                height="32"
                                viewBox="0 0 19 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                                  fill="#FFA83A"
                                />
                              </svg>
                              <svg
                                width="34"
                                height="32"
                                viewBox="0 0 19 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                                  fill="#FFA83A"
                                />
                              </svg>
                              <svg
                                width="34"
                                height="32"
                                viewBox="0 0 19 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                                  fill="#FFA83A"
                                />
                              </svg>
                              <svg
                                width="34"
                                height="32"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.92694 1.22343L10.6045 6.38641L10.6894 6.64764H10.9641H16.3927L12.0008 9.83854L11.7786 9.99999L11.8635 10.2612L13.5411 15.4242L9.14916 12.2333L8.92694 12.0719L8.70473 12.2333L4.31283 15.4242L5.99038 10.2612L6.07526 9.99999L5.85304 9.83854L1.46115 6.64764H6.88983H7.16451L7.24939 6.38641L8.92694 1.22343Z"
                                  stroke="#B8B8B8"
                                  strokeWidth="0.756119"
                                />
                              </svg>
                            </div>
                          </div>
                          <p className="h6 black_text font_md">
                            Average ratings on this year
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`col-lg-1 col-12 text-center d-md-block d-flex`}
                    >
                      <span
                        className={`${styles.h_divider} d-lg-inline-block d-none`}
                      ></span>
                      <span
                        className={`${styles.v_divider} d-lg-none d-inline-block`}
                      ></span>
                    </div>
                    <div className={`col-lg col-12`}>
                      <div
                        className={`${styles.p_review_ratio_row} d-flex flex-column gap-1`}
                      >
                        <div
                          className={`${styles.p_review_ratio_col} d-flex align-items-center`}
                        >
                          <span
                            className={`h5 black_text font_md pe-1 ${styles.p_review_ratio_number}`}
                          >
                            5
                          </span>
                          <svg
                            width="28"
                            className={styles.p_review_ratio_star}
                            height="27"
                            viewBox="0 0 19 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                              fill="#FFA83A"
                            />
                          </svg>
                          <div
                            className={`${styles.review_progress} p_review_progress px-3`}
                          >
                            <ProgressBar now={59} />
                          </div>
                          <span className="p black_text font_md">59%</span>
                        </div>
                        <div
                          className={`${styles.p_review_ratio_col} d-flex align-items-center`}
                        >
                          <span
                            className={`h5 black_text font_md pe-1 ${styles.p_review_ratio_number}`}
                          >
                            4
                          </span>
                          <svg
                            width="28"
                            className={styles.p_review_ratio_star}
                            height="27"
                            viewBox="0 0 19 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                              fill="#FFA83A"
                            />
                          </svg>
                          <div
                            className={`${styles.review_progress} p_review_progress px-3`}
                          >
                            <ProgressBar now={15} />
                          </div>
                          <span className="p black_text font_md">15%</span>
                        </div>
                        <div
                          className={`${styles.p_review_ratio_col} d-flex align-items-center`}
                        >
                          <span
                            className={`h5 black_text font_md pe-1 ${styles.p_review_ratio_number}`}
                          >
                            3
                          </span>
                          <svg
                            width="28"
                            height="27"
                            className={styles.p_review_ratio_star}
                            viewBox="0 0 19 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                              fill="#FFA83A"
                            />
                          </svg>
                          <div
                            className={`${styles.review_progress} p_review_progress px-3`}
                          >
                            <ProgressBar now={11} />
                          </div>
                          <span className="p black_text font_md">11%</span>
                        </div>
                        <div
                          className={`${styles.p_review_ratio_col} d-flex align-items-center`}
                        >
                          <span
                            className={`h5 black_text font_md pe-1 ${styles.p_review_ratio_number}`}
                          >
                            2
                          </span>
                          <svg
                            width="28"
                            className={styles.p_review_ratio_star}
                            height="27"
                            viewBox="0 0 19 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                              fill="#FFA83A"
                            />
                          </svg>
                          <div
                            className={`${styles.review_progress} p_review_progress px-3`}
                          >
                            <ProgressBar now={8} />
                          </div>
                          <span className="p black_text font_md">8%</span>
                        </div>
                        <div
                          className={`${styles.p_review_ratio_col} d-flex align-items-center`}
                        >
                          <span
                            className={`h5 black_text font_md pe-1 ${styles.p_review_ratio_number}`}
                          >
                            1
                          </span>
                          <svg
                            width="28"
                            className={styles.p_review_ratio_star}
                            height="27"
                            viewBox="0 0 19 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                              fill="#FFA83A"
                            />
                          </svg>
                          <div
                            className={`${styles.review_progress} p_review_progress px-3`}
                          >
                            <ProgressBar now={8} />
                          </div>
                          <span className="p black_text font_md">8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className={`${styles.v_divider} d-block`}></div>
                <div className="row g-lg-1 g-4 pt-lg-5 pt-4">
                  <div
                    className={`col-12 ${styles.p_customer_review_list} d-flex flex-column gap-lg-4 gap-3 h-scrollbar`}
                  >
                    {reviewsData?.reviews?.items.map(
                      (review: any, index: number) => (
                        <div
                          key={index}
                          className={`${styles.p_customer_col} `}
                        >
                          <div className={styles.p_customer_col_head}>
                            <div className={styles.p_customer_overview}>
                              <Image
                                src={getImageUrl(
                                  "product-detail/customer-img.png"
                                )}
                                alt="Customer Image"
                                className={`${styles.p_customer_img} w-auto`}
                                title="Cannellio Cake Toppers - Customer Image"
                                width={0}
                                height={0}
                              />
                              <div className={styles.p_customer_details}>
                                <span className="h5 primary_text font_rg mb-xl-1 line-clamp line-clamp1">
                                  {review?.nickname}
                                </span>
                                <div
                                  className={`${styles.p_review_stars} d-flex align-items-center gap-1`}
                                >
                                  <svg
                                    width="24"
                                    height="22"
                                    viewBox="0 0 19 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                                      fill="#FFA83A"
                                    />
                                  </svg>
                                  <svg
                                    width="24"
                                    height="22"
                                    viewBox="0 0 19 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                                      fill="#FFA83A"
                                    />
                                  </svg>
                                  <svg
                                    width="24"
                                    height="22"
                                    viewBox="0 0 19 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                                      fill="#FFA83A"
                                    />
                                  </svg>
                                  <svg
                                    width="24"
                                    height="22"
                                    viewBox="0 0 19 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
                                      fill="#FFA83A"
                                    />
                                  </svg>
                                  <svg
                                    width="24"
                                    height="22"
                                    viewBox="0 0 18 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.92694 1.22343L10.6045 6.38641L10.6894 6.64764H10.9641H16.3927L12.0008 9.83854L11.7786 9.99999L11.8635 10.2612L13.5411 15.4242L9.14916 12.2333L8.92694 12.0719L8.70473 12.2333L4.31283 15.4242L5.99038 10.2612L6.07526 9.99999L5.85304 9.83854L1.46115 6.64764H6.88983H7.16451L7.24939 6.38641L8.92694 1.22343Z"
                                      stroke="#B8B8B8"
                                      strokeWidth="0.756119"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="d-flex align-items-center gap-2">
                                <button className={styles.product_socialMedia}>
                                  <Image
                                    src={getImageUrl("products/like-icon.png")}
                                    width={20}
                                    height={20}
                                    alt="Product wishlist Image"
                                    title="Cannellio Cake Toppers - Product wishlist"
                                  />
                                </button>
                                <button className={styles.product_socialMedia}>
                                  <Image
                                    src={getImageUrl("share-icon.png")}
                                    width={20}
                                    height={20}
                                    alt="Product Share Image"
                                    title="Cannellio Cake Toppers - Product Share"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className={styles.p_customer_col_body}>
                            <div
                              className={`${styles.p_customer_content} d-flex flex-column`}
                            >
                              <div
                                className={`${styles.p_customer_review_img_row} d-flex flex-wrap`}
                              >
                                {review?.gallery.map(
                                  (img: any, index: number) => (
                                    <Image
                                      key={index}
                                      src={img.preview_url}
                                      alt="Product Image 1"
                                      title="Cannellio Cake Toppers - Product Image 1"
                                      width={145}
                                      height={145}
                                      className={`object-cover ${styles.p_customer_review_img_col}`}
                                    />
                                  )
                                )}
                              </div>
                              <div className={styles.p_customer_details}>
                                <p className="font-16 black_text font_rg">
                                  {review.detail}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="p_faq" title="FAQs" className="p_info_nav">
              {productInfoData?.products?.items.map(
                (item: any, index: number) => (
                  <div
                    key={item?.uid}
                    className={`${styles.p_faq_tab} ${styles.common_p_info_card} `}
                  >
                    <div className="main-title d-flex align-items-center justify-content-between">
                      <h2 className="h3 black_text jua-font">
                        Frequently Asked Questions
                      </h2>
                      <Link
                        href=""
                        className="btn btn-black-outline d-flex align-items-center w-auto gap-2 text-nowrap"
                      >
                        View All{" "}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.6512 1.84865C19.6512 1.29637 19.2035 0.848651 18.6512 0.848651L9.65123 0.848652C9.09894 0.848651 8.65123 1.29637 8.65123 1.84865C8.65123 2.40094 9.09894 2.84865 9.65123 2.84865L17.6512 2.84865L17.6512 10.8487C17.6512 11.4009 18.0989 11.8487 18.6512 11.8487C19.2035 11.8487 19.6512 11.4009 19.6512 10.8487L19.6512 1.84865ZM2.38777 19.5263L19.3583 2.55576L17.9441 1.14154L0.973557 18.1121L2.38777 19.5263Z"
                            fill="black"
                          />
                        </svg>
                      </Link>
                    </div>

                    <Accordion
                      className="faq_accordian"
                      defaultActiveKey={`${index}`}
                      flush
                    >
                      {item?.faqs.map((faq: any, index: number) => (
                        <Accordion.Item
                          key={index}
                          className="faq_accordian_item"
                          eventKey={`${index}`}
                        >
                          <Accordion.Header>
                            <span className="faq_accordian_number h4 font_bl">
                              {`0${index + 1}`}
                            </span>
                            {faq?.title}
                          </Accordion.Header>
                          <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                            <RichContent htmlContent={faq?.description} />
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                )
              )}
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
