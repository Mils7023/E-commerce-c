"use client";
import Image from "next/image";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import styles from "./Banner.module.scss";

// import required modules
import { Navigation, Thumbs, Autoplay, EffectFade } from "swiper/modules";
import { getImageUrl } from "@/utils/imageHelper";
import { useRouter } from "next/navigation";

export const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>("");
  const router = useRouter();

  return (
    <section id="hero_section" className={styles.hero_sec}>
      <div className={`${styles.hero_main} position-relative overflow-hidden`}>
        <div className={`${styles.ingrident}`}>
          <div
            className={`${styles.ingrident_wrapper} primary_bg d-flex gap-2 align-items-center`}
          >
            <Image
              alt="Ingrident Image"
              width={24}
              height={24}
              src={getImageUrl("ingrident-icon.png")}
              title="Cannellio Cake Toppers - Ingrident Image"
            />
            <span
              className={`${styles.ingrident_title} white_text font_md font-16`}
            >
              Toppers Ingredient
            </span>
          </div>
        </div>
        <div className="container">
          <div
            className={`${styles.hero_wrapper} d-flex flex-wrap align-items-center justify-content-between`}
          >
            <div className={`${styles.hero_left}`}>
              <div className={`${styles.hero_title}`}>
                <h1 className={`h1 black_text jua-font`}>
                  Make your <br className="d-md-block d-none" />
                  occasion
                  <br className="d-sm-none d-block" /> special
                  <br className="d-sm-block d-none" /> with Our
                  <br className="d-sm-none d-block" /> Edible{" "}
                  <br className="d-md-block d-none" />
                  Toppers
                </h1>
              </div>
              <button
                type="button"
                className="btn btn-primary-large btn-gradient"
                onClick={() => router.push("/cake-toppers/general-toppers")}
              >
                Order Now
              </button>
            </div>
            <div className={`${styles.hero_right}`}>
              <Swiper
                className={`heroSlider`}
                slidesPerView={1}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={2000}
                loop={true}
                effect="fade"
                // navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Autoplay, Navigation, EffectFade, Thumbs]}
              >
                <SwiperSlide>
                  <Image
                    alt="Home Page Image"
                    width={591}
                    height={592}
                    src={getImageUrl("hero-banner1.png")}
                    title="Cannellio Cake Toppers - Hero img 1"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    alt="Home Page Image"
                    width={591}
                    height={592}
                    src={getImageUrl("hero-banner-image-2.png")}
                    title="Cannellio Cake Toppers - Hero img 2"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    alt="Home Page Image"
                    width={591}
                    height={592}
                    src={getImageUrl("hero-banner-image-3.png")}
                    title="Cannellio Cake Toppers - Hero img 3"
                  />
                </SwiperSlide>
              </Swiper>
              <div className={`hero_slider_thumbs`}>
                <Swiper
                  effect="fade"
                  onSwiper={setThumbsSwiper}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                  modules={[EffectFade, Navigation, Autoplay, Thumbs]}
                  className={`heroSliderThumbs`}
                >
                  <SwiperSlide>
                    <Image
                      alt="Home Page Image"
                      width={98}
                      height={79}
                      src={getImageUrl("hero-banner1.png")}
                      title="Cannellio Cake Toppers - Hero img 1"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      alt="Home Page Image"
                      width={90}
                      height={91}
                      src={getImageUrl("hero-banner-image-2.png")}
                      title="Cannellio Cake Toppers - Hero img 2"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      alt="Home Page Image"
                      width={90}
                      height={50}
                      src={getImageUrl("hero-banner-image-3.png")}
                      title="Cannellio Cake Toppers - Hero img 3"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.hero_vector_1} ${styles.yellow_circle_vector} position-absolute`}
        ></div>
        <div
          className={`${styles.hero_vector_2} ${styles.pink_circle_vector} position-absolute`}
        ></div>
        <div
          className={`${styles.hero_vector_3} ${styles.pink_triangle_vector} position-absolute`}
        ></div>
        <div
          className={`${styles.hero_vector_7} ${styles.blue_triangle_vector} position-absolute`}
        ></div>
        <div
          className={`${styles.hero_vector_5} ${styles.yellow_triangle_vector} position-absolute`}
        ></div>
        <div
          className={`${styles.hero_vector_6} ${styles.blue_star_vector} position-absolute`}
        ></div>
        <div
          className={`${styles.hero_vector_4} ${styles.yellow_triangle_vector} position-absolute`}
        ></div>
        <div
          className={`${styles.hero_vector_8} ${styles.blue_square_vector} position-absolute`}
        ></div>
      </div>
    </section>
  );
};

// export default Banner;
