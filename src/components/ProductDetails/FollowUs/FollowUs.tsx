"use client";
import Image from "next/image";
import React from "react";

import styles from "./FollowUs.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import required modules
import { Grid, Navigation } from "swiper/modules";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const FollowUs = () => {
  return (
    <section className={`${styles.followUs_section} secondary_bg`}>
      <div className={`${styles.followUs_main}`}>
        <div className="container">
          <div className={`${styles.followUs_wrapper} row`}>
            <div className={`${styles.followUs_left} col-md-5`}>
              <div
                className={`main-title pb-0 text-center ${styles.followUs_title}`}
              >
                <Image
                  src={getImageUrl('follow-us/cup-cake-follow-us.png')}
                  alt="Follow Us"
                  title="Cannellio Cake Toppers - Follow Us"
                  width={340}
                  height={467}
                />
                <h2 className="h3 white_text pb-xl-4 pb-3 pt-xl-5 pt-4 mt-xl-1">
                  Cannelli
                  <Image
                    src={getImageUrl('follow-us/cupcake-title-img.png')}
                    alt="Follow Us Title"
                    title="Cannellio Cake Toppers - Follow Us Title"
                    width={39}
                    height={39}
                    className="pb-1"
                  />{" "}
                  Cake
                </h2>
                <ul
                  className={`${styles.social_icons_list} d-flex gap-md-4 gap-3 align-items-center justify-content-center`}
                >
                  <li>
                    <Link href="">
                      <Image
                        src={getImageUrl('follow-us/insta.png')}
                        alt="Follow Us Instagram"
                        title="Cannellio Cake Toppers - Follow Us Instagram"
                        width={23}
                        height={23}
                      />
                    </Link>
                  </li>{" "}
                  <li>
                    <Link href="">
                      <Image
                        src={getImageUrl('follow-us/facebook.png')}
                        alt="Follow Us Facebook"
                        title="Cannellio Cake Toppers - Follow Us Facebook"
                        width={14}
                        height={24}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <Image
                        src={getImageUrl('follow-us/whatsapp.png')}
                        alt="Follow Us Whatsapp"
                        title="Cannellio Cake Toppers - Follow Us Whatsapp"
                        width={20}
                        height={22}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.followUs_right}  col-md-7`}>
              <Swiper
                slidesPerView={2}
                navigation={true}
                grid={{
                  rows: 1,
                  fill: "row",
                }}
                spaceBetween={16}
                breakpoints={{
                  640: {
                    spaceBetween: 16,
                    navigation: {
                      enabled: false,
                    },
                    slidesPerView: 4,
                    grid: {
                      rows: 2,
                    },
                  },
                  1400: {
                    spaceBetween: 24,
                    navigation: {
                      enabled: false,
                    },
                    slidesPerView: 4,
                    grid: {
                      rows: 2,
                    },
                  },
                }}
                modules={[Grid, Navigation]}
                className={`instagram_posts_row ${styles.instagram_posts_wrapper} common-slider-arrows slider-arrows-verticle`}
              >
                <SwiperSlide>
                  <Link href="" className={`${styles.instagram_post}`}>
                    <Image
                      src={getImageUrl('follow-us/insta-post1.png')}
                      alt="Post1"
                      title="Cannellio Cake Toppers - Post1"
                      className="hover-image-animation w-100 h-100"
                      width={0}
                      height={0}
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className={`${styles.instagram_post}`}>
                    <Image
                      src={getImageUrl('follow-us/insta-post2.png')}
                      alt="Post2"
                      title="Cannellio Cake Toppers - Post2"
                      className="hover-image-animation w-100 h-100"
                      width={0}
                      height={0}
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className={`${styles.instagram_post}`}>
                    <Image
                      src={getImageUrl('follow-us/insta-post1.png')}
                      alt="Post1"
                      title="Cannellio Cake Toppers - Post1"
                      className="hover-image-animation w-100 h-100"
                      width={0}
                      height={0}
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className={`${styles.instagram_post}`}>
                    <Image
                      src={getImageUrl('follow-us/insta-post2.png')}
                      alt="Post2"
                      title="Cannellio Cake Toppers - Post2"
                      className="hover-image-animation w-100 h-100"
                      width={0}
                      height={0}
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className={`${styles.instagram_post}`}>
                    <Image
                      src={getImageUrl('follow-us/insta-post3.png')}
                      alt="Post1"
                      title="Cannellio Cake Toppers - Post1"
                      className="hover-image-animation w-100 h-100"
                      width={0}
                      height={0}
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className={`${styles.instagram_post}`}>
                    <Image
                      src={getImageUrl('follow-us/insta-post4.png')}
                      alt="Post1"
                      title="Cannellio Cake Toppers - Post1"
                      className="hover-image-animation w-100 h-100"
                      width={0}
                      height={0}
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className={`${styles.instagram_post}`}>
                    <Image
                      src={getImageUrl('follow-us/insta-post3.png')}
                      alt="Post1"
                      title="Cannellio Cake Toppers - Post1"
                      className="hover-image-animation w-100 h-100"
                      width={0}
                      height={0}
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link href="" className={`${styles.instagram_post}`}>
                    <Image
                      src={getImageUrl('follow-us/insta-post4.png')}
                      alt="Post1"
                      title="Cannellio Cake Toppers - Post1"
                      className="hover-image-animation w-100 h-100"
                      width={0}
                      height={0}
                    />
                  </Link>
                </SwiperSlide>
              </Swiper>

              {/* <div className={`${styles.instagram_posts_wrapper}`}>
                <div className={`${styles.instagram_post}`}>
                  <Image
                    src={Post1}
                    alt="Post1"
                    title="Cannellio Cake Toppers - Post1"
                    width={200}
                    height={200}
                    className="hover-image-animation"
                  />
                </div>
                <div className={`${styles.instagram_post}`}>
                  <Image
                    src={Post1}
                    alt="Post1"
                    title="Cannellio Cake Toppers - Post1"
                    width={200}
                    height={200}
                    className="hover-image-animation"
                  />
                </div>{" "}
                <div className={`${styles.instagram_post}`}>
                  <Image
                    src={Post2}
                    alt="Post2"
                    title="Cannellio Cake Toppers - Post2"
                    width={200}
                    height={200}
                    className="hover-image-animation"
                  />
                </div>
                <div className={`${styles.instagram_post}`}>
                  <Image
                    src={Post3}
                    alt="Post3"
                    title="Cannellio Cake Toppers - Post3"
                    width={200}
                    height={200}
                    className="hover-image-animation"
                  />
                </div>
                <div className={`${styles.instagram_post}`}>
                  <Image
                    src={Post4}
                    alt="Post4"
                    title="Cannellio Cake Toppers - Post4"
                    width={200}
                    height={200}
                    className="hover-image-animation"
                  />
                </div>
                <div className={`${styles.instagram_post}`}>
                  <Image
                    src={Post3}
                    alt="Post3"
                    title="Cannellio Cake Toppers - Post3"
                    width={200}
                    height={200}
                    className="hover-image-animation"
                  />
                </div>
                <div className={`${styles.instagram_post}`}>
                  <Image
                    src={Post4}
                    alt="Post4"
                    title="Cannellio Cake Toppers - Post4"
                    width={200}
                    height={200}
                    className="hover-image-animation"
                  />
                </div>
                <div className={`${styles.instagram_post}`}>
                  <Image
                    src={Post3}
                    alt="Post3"
                    title="Cannellio Cake Toppers - Post3"
                    width={200}
                    height={200}
                    className="hover-image-animation"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
