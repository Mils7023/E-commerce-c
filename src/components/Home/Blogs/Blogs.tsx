"use client";
import Image from "next/image";
import React from "react";
import styles from "./Blogs.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const Blogs = () => {
  return (
    <section id="blog_section">
      <div className={`common-padding-t`}>
        <div className="container">
          <div>
            <div className="main-title d-flex align-items-center justify-content-between">
              <h2 className="h2 black_text jua-font">
                Read Our
                <br className="d-sm-none d-block" /> Latest Blog
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

            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              navigation={true}
              breakpoints={{
                420: {
                  spaceBetween: 16,
                  slidesPerView: 1.5,
                },
                640: {
                  spaceBetween: 16,
                  slidesPerView: 2,
                },
                768: {
                  spaceBetween: 16,
                  slidesPerView: 2.5,
                },
                992: {
                  spaceBetween: 16,
                  slidesPerView: 3,
                },
                1200: {
                  spaceBetween: 16,
                  slidesPerView: 3,
                },
                1500: {
                  spaceBetween: 24,
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation]}
              className="pb-5 pt-3 blog_row common-slider-arrows slider-arrows-verticle"
            >
              <SwiperSlide>
                <div className={`${styles.blog_col}`}>
                  <div className={`${styles.blog_image}`}>
                    <Image
                      src={getImageUrl('blogs/blog1.png')}
                      width={357}
                      height={358}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </div>
                  <div
                    className={`${styles.blog_content} d-flex align-items-start flex-column gap-2`}
                  >
                    <span
                      className={`${styles.blog_label} font-16 white_text font_md`}
                    >
                      Gamming
                    </span>
                    <span
                      className={`${styles.blog_title} h6 black_text font_md mb-2`}
                    >
                      Game with Delight: Creating the Gaming Theme Cake
                    </span>
                    <Link
                      href=""
                      className={`primary_text font-16 font_smb gap-2 ${styles.blog_link} position-relative`}
                    >
                      Read More{" "}
                      <svg
                        width="17"
                        height="12"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4336 6.51471C16.7265 6.22181 16.7265 5.74694 16.4336 5.45404L11.6606 0.681074C11.3677 0.388181 10.8928 0.388181 10.6 0.681074C10.3071 0.973968 10.3071 1.44884 10.6 1.74173L14.8426 5.98438L10.6 10.227C10.3071 10.5199 10.3071 10.9948 10.6 11.2877C10.8928 11.5806 11.3677 11.5806 11.6606 11.2877L16.4336 6.51471ZM0 6.73438H15.9033V5.23438H0V6.73438Z"
                          fill="#FF6CAA"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.blog_col}`}>
                  <div className={`${styles.blog_image}`}>
                    <Image
                      src={getImageUrl('blogs/blog2.png')}
                      width={357}
                      height={358}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </div>
                  <div
                    className={`${styles.blog_content} d-flex align-items-start flex-column gap-2`}
                  >
                    <span
                      className={`${styles.blog_label} font-16 white_text font_md`}
                    >
                      Barbie
                    </span>
                    <span
                      className={`${styles.blog_title} h6 black_text font_md mb-2`}
                    >
                      Dream Big with Barbie-Themed Cake Toppers: Design Ideas
                    </span>
                    <Link
                      href=""
                      className={`primary_text font-16 font_smb gap-2 ${styles.blog_link} position-relative`}
                    >
                      Read More{" "}
                      <svg
                        width="17"
                        height="12"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4336 6.51471C16.7265 6.22181 16.7265 5.74694 16.4336 5.45404L11.6606 0.681074C11.3677 0.388181 10.8928 0.388181 10.6 0.681074C10.3071 0.973968 10.3071 1.44884 10.6 1.74173L14.8426 5.98438L10.6 10.227C10.3071 10.5199 10.3071 10.9948 10.6 11.2877C10.8928 11.5806 11.3677 11.5806 11.6606 11.2877L16.4336 6.51471ZM0 6.73438H15.9033V5.23438H0V6.73438Z"
                          fill="#FF6CAA"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.blog_col}`}>
                  <div className={`${styles.blog_image}`}>
                    <Image
                      src={getImageUrl('blogs/blog3.png')}
                      width={357}
                      height={358}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </div>
                  <div
                    className={`${styles.blog_content} d-flex align-items-start flex-column gap-2`}
                  >
                    <span
                      className={`${styles.blog_label} font-16 white_text font_md`}
                    >
                      Super heroes
                    </span>
                    <span
                      className={`${styles.blog_title} h6 black_text font_md mb-2`}
                    >
                      Score Big with Football Theme
                      <br />
                      Customized Cake
                    </span>
                    <Link
                      href=""
                      className={`primary_text font-16 font_smb gap-2 ${styles.blog_link} position-relative`}
                    >
                      Read More{" "}
                      <svg
                        width="17"
                        height="12"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4336 6.51471C16.7265 6.22181 16.7265 5.74694 16.4336 5.45404L11.6606 0.681074C11.3677 0.388181 10.8928 0.388181 10.6 0.681074C10.3071 0.973968 10.3071 1.44884 10.6 1.74173L14.8426 5.98438L10.6 10.227C10.3071 10.5199 10.3071 10.9948 10.6 11.2877C10.8928 11.5806 11.3677 11.5806 11.6606 11.2877L16.4336 6.51471ZM0 6.73438H15.9033V5.23438H0V6.73438Z"
                          fill="#FF6CAA"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.blog_col}`}>
                  <div className={`${styles.blog_image}`}>
                    <Image
                      src={getImageUrl('blogs/blog2.png')}
                      width={357}
                      height={358}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </div>
                  <div
                    className={`${styles.blog_content} d-flex align-items-start flex-column gap-2`}
                  >
                    <span
                      className={`${styles.blog_label} font-16 white_text font_md`}
                    >
                      Barbie
                    </span>
                    <span
                      className={`${styles.blog_title} h6 black_text font_md mb-2`}
                    >
                      Dream Big with Barbie-Themed Cake Toppers: Design Ideas
                    </span>
                    <Link
                      href=""
                      className={`primary_text font-16 font_smb gap-2 ${styles.blog_link} position-relative`}
                    >
                      Read More{" "}
                      <svg
                        width="17"
                        height="12"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4336 6.51471C16.7265 6.22181 16.7265 5.74694 16.4336 5.45404L11.6606 0.681074C11.3677 0.388181 10.8928 0.388181 10.6 0.681074C10.3071 0.973968 10.3071 1.44884 10.6 1.74173L14.8426 5.98438L10.6 10.227C10.3071 10.5199 10.3071 10.9948 10.6 11.2877C10.8928 11.5806 11.3677 11.5806 11.6606 11.2877L16.4336 6.51471ZM0 6.73438H15.9033V5.23438H0V6.73438Z"
                          fill="#FF6CAA"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.blog_col}`}>
                  <div className={`${styles.blog_image}`}>
                    <Image
                      src={getImageUrl('blogs/blog3.png')}
                      width={357}
                      height={358}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </div>
                  <div
                    className={`${styles.blog_content} d-flex align-items-start flex-column gap-2`}
                  >
                    <span
                      className={`${styles.blog_label} font-16 white_text font_md`}
                    >
                      Super heroes
                    </span>
                    <span
                      className={`${styles.blog_title} h6 black_text font_md mb-2`}
                    >
                      Score Big with Football Theme
                      <br />
                      Customized Cake
                    </span>
                    <Link
                      href=""
                      className={`primary_text font-16 font_smb gap-2 ${styles.blog_link} position-relative`}
                    >
                      Read More{" "}
                      <svg
                        width="17"
                        height="12"
                        viewBox="0 0 17 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.4336 6.51471C16.7265 6.22181 16.7265 5.74694 16.4336 5.45404L11.6606 0.681074C11.3677 0.388181 10.8928 0.388181 10.6 0.681074C10.3071 0.973968 10.3071 1.44884 10.6 1.74173L14.8426 5.98438L10.6 10.227C10.3071 10.5199 10.3071 10.9948 10.6 11.2877C10.8928 11.5806 11.3677 11.5806 11.6606 11.2877L16.4336 6.51471ZM0 6.73438H15.9033V5.23438H0V6.73438Z"
                          fill="#FF6CAA"
                        />
                      </svg>
                    </Link>
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
