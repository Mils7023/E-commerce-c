"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./CustomerGallery.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";
// import { ProductCardSkeleton } from "@/components";

export const CustomerGallery = () => {
  return (
    <section id="cutomergallery_section">
      <div className={`common-padding-t`}>
        <div className="container">
          <div>
            <div className="main-title d-flex align-items-center justify-content-between">
              <h2 className="h2 black_text jua-font">Happy Customers</h2>
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

            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              navigation={true}
              breakpoints={{
                640: {
                  spaceBetween: 16,
                  slidesPerView: 1.3,
                },
                800: {
                  spaceBetween: 16,
                  slidesPerView: 1.5,
                },
                992: {
                  spaceBetween: 16,
                  slidesPerView: 2,
                },
                1200: {
                  spaceBetween: 16,
                  slidesPerView: 2,
                },
                1500: {
                  spaceBetween: 24,
                  slidesPerView: 2,
                },
              }}
              modules={[Navigation]}
              className="pb-5 pt-3 cutomergallery_row common-slider-arrows slider-arrows-verticle"
            >
              <SwiperSlide>
                <div className={`${styles.customergallery_col}  d-flex`}>
                  <div className={`${styles.customergallery_image} `}>
                    <Image
                      src={getImageUrl('customer-gallery/customer-gallery1.png')}
                      width={357}
                      height={358}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100`}
                    />
                    <Link
                      href=""
                      className={`${styles.view_customergallery} d-flex align-items-center gap-sm-2 gap-1 position-absolute`}
                    >
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9566 10.9863C13.9566 12.6363 12.6249 13.9696 10.9769 13.9696C9.32882 13.9696 7.99707 12.6363 7.99707 10.9863C7.99707 9.33626 9.32882 8.00293 10.9769 8.00293C12.6249 8.00293 13.9566 9.33626 13.9566 10.9863Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.977 17.8781C13.9151 17.8781 16.6536 16.1448 18.5596 13.1448C19.3087 11.9698 19.3087 9.99476 18.5596 8.81976C16.6536 5.81976 13.9151 4.08643 10.977 4.08643C8.03882 4.08643 5.30041 5.81976 3.39435 8.81976C2.64524 9.99476 2.64524 11.9698 3.39435 13.1448C5.30041 16.1448 8.03882 17.8781 10.977 17.8781Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-16 fw-normal black_text">
                        View Product
                      </span>
                    </Link>
                  </div>
                  <div
                    className={`${styles.customergallery_content} d-flex justify-content-center flex-column`}
                  >
                    <div className={`${styles.customer_details} d-flex gap-3`}>
                      <Image
                        src={getImageUrl('customer-gallery/customer1.png')}
                        width={40}
                        height={40}
                        alt="Customer1 Image"
                        title="Cannellio Cake Toppers - Customer1"
                        className={`${styles.customer_details_image}`}
                      />
                      <div className={`${styles.customer_details_title}`}>
                        <span className="white_text h4 fw-normal w-100 d-inline-block mb-sm-2 mb-1">
                          Jack Smith
                        </span>
                        <Image
                          src={getImageUrl('customer-gallery/ratings.png')}
                          width={145}
                          height={23}
                          alt="Custmer Ratings Image"
                          title="Cannellio Cake Toppers - Custmer Ratings"
                        />
                      </div>
                    </div>
                    <div className={`${styles.customer_content} pt-xl-4 pt-3`}>
                      <p className="font-18 white_text fw-normal line-clamp line-clamp5">
                        “Better Understanding cake Toppers relatives, whether or
                        fins or roots. considerfood. Food has a culture. It has
                        a history. Better Understanding cake Toppers relatives,
                        whether or fins or roots. Toppers relatives, whether
                        considerfood”
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.customergallery_col}  d-flex `}>
                  <div className={`${styles.customergallery_image} `}>
                    <Image
                      src={getImageUrl('customer-gallery/customer-gallery2.png')}
                      width={357}
                      height={358}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100`}
                    />
                    <Link
                      href=""
                      className={`${styles.view_customergallery} d-flex align-items-center gap-sm-2 gap-1 position-absolute`}
                    >
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9566 10.9863C13.9566 12.6363 12.6249 13.9696 10.9769 13.9696C9.32882 13.9696 7.99707 12.6363 7.99707 10.9863C7.99707 9.33626 9.32882 8.00293 10.9769 8.00293C12.6249 8.00293 13.9566 9.33626 13.9566 10.9863Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.977 17.8781C13.9151 17.8781 16.6536 16.1448 18.5596 13.1448C19.3087 11.9698 19.3087 9.99476 18.5596 8.81976C16.6536 5.81976 13.9151 4.08643 10.977 4.08643C8.03882 4.08643 5.30041 5.81976 3.39435 8.81976C2.64524 9.99476 2.64524 11.9698 3.39435 13.1448C5.30041 16.1448 8.03882 17.8781 10.977 17.8781Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-16 fw-normal black_text">
                        View Product
                      </span>
                    </Link>
                  </div>
                  <div
                    className={`${styles.customergallery_content} d-flex justify-content-center flex-column`}
                  >
                    <div className={`${styles.customer_details} d-flex gap-3`}>
                      <Image
                        src={getImageUrl('customer-gallery/customer1.png')}
                        width={40}
                        height={40}
                        alt="Customer1 Image"
                        title="Cannellio Cake Toppers - Customer1"
                        className={`${styles.customer_details_image}`}
                      />
                      <div className={`${styles.customer_details_title}`}>
                        <span className="white_text h4 fw-normal w-100 d-inline-block mb-sm-2 mb-1">
                          Jack Smith
                        </span>
                        <Image
                          src={getImageUrl('customer-gallery/ratings.png')}
                          width={145}
                          height={23}
                          alt="Custmer Ratings Image"
                          title="Cannellio Cake Toppers - Custmer Ratings"
                        />
                      </div>
                    </div>
                    <div className={`${styles.customer_content} pt-xl-4 pt-3`}>
                      <p className="font-18 white_text fw-normal line-clamp line-clamp5">
                        “Better Understanding cake Toppers relatives, whether or
                        fins or roots. considerfood. Food has a culture. It has
                        a history. Better Understanding cake Toppers relatives,
                        whether or fins or roots. Toppers relatives, whether
                        considerfood”
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.customergallery_col}  d-flex`}>
                  <div className={`${styles.customergallery_image} `}>
                    <Image
                      src={getImageUrl('customer-gallery/customer-gallery1.png')}
                      width={357}
                      height={358}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100`}
                    />
                    <Link
                      href=""
                      className={`${styles.view_customergallery} d-flex align-items-center gap-sm-2 gap-1 position-absolute`}
                    >
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.9566 10.9863C13.9566 12.6363 12.6249 13.9696 10.9769 13.9696C9.32882 13.9696 7.99707 12.6363 7.99707 10.9863C7.99707 9.33626 9.32882 8.00293 10.9769 8.00293C12.6249 8.00293 13.9566 9.33626 13.9566 10.9863Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.977 17.8781C13.9151 17.8781 16.6536 16.1448 18.5596 13.1448C19.3087 11.9698 19.3087 9.99476 18.5596 8.81976C16.6536 5.81976 13.9151 4.08643 10.977 4.08643C8.03882 4.08643 5.30041 5.81976 3.39435 8.81976C2.64524 9.99476 2.64524 11.9698 3.39435 13.1448C5.30041 16.1448 8.03882 17.8781 10.977 17.8781Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-16 fw-normal black_text">
                        View Product
                      </span>
                    </Link>
                  </div>
                  <div
                    className={`${styles.customergallery_content} d-flex justify-content-center flex-column`}
                  >
                    <div className={`${styles.customer_details} d-flex gap-3`}>
                      <Image
                        src={getImageUrl('customer-gallery/customer1.png')}
                        width={40}
                        height={40}
                        alt="Customer1 Image"
                        title="Cannellio Cake Toppers - Customer1"
                        className={`${styles.customer_details_image}`}
                      />
                      <div className={`${styles.customer_details_title}`}>
                        <span className="white_text h4 fw-normal w-100 d-inline-block mb-sm-2 mb-1">
                          Jack Smith
                        </span>
                        <Image
                          src={getImageUrl('customer-gallery/ratings.png')}
                          width={145}
                          height={23}
                          alt="Custmer Ratings Image"
                          title="Cannellio Cake Toppers - Custmer Ratings"
                        />
                      </div>
                    </div>
                    <div className={`${styles.customer_content} pt-xl-4 pt-3`}>
                      <p className="font-18 white_text fw-normal line-clamp line-clamp5">
                        “Better Understanding cake Toppers relatives, whether or
                        fins or roots. considerfood. Food has a culture. It has
                        a history. Better Understanding cake Toppers relatives,
                        whether or fins or roots. Toppers relatives, whether
                        considerfood”
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
