"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import styles from "./HighlightedProducts.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import Link from "next/link";
import { HomeContext } from "@/context";
import dynamic from "next/dynamic";
import { SpinnerProps } from "@/components/common/Spinner";

const Spinner = dynamic<SpinnerProps>(
  () => import("@/components/common/Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);

export const HighlightedProducts = () => {
  const { highlightedProducts } = useContext(HomeContext);

  const colorClasses = [
    styles.hightlighted_green,
    styles.hightlighted_orange,
    styles.hightlighted_blue,
    styles.hightlighted_yellow,
    styles.hightlighted_pink,
  ];

  let previousIndex = -1;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures that the component has mounted on the client
  }, []);

  return (
    <section
      className={`${styles.hightlighted_section}`}
      id="hightlighted_section"
    >
      <div
        className={`${styles.hightlighted_main} secondary_bg position-relative`}
      >
        <div className="container">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={16}
            className="hightlighted-slider pb-5 pt-md-3 pt-4"
            scrollbar={{
              draggable: true,
              hide: false,
            }}
            breakpoints={{
              576: {
                spaceBetween: 25,
              },
              1400: {
                spaceBetween: 30,
              },
              1500: {
                spaceBetween: 35,
              },
            }}
            modules={[Scrollbar]}
          >
            {highlightedProducts.error && (
              <div className="d-flex justify-content-center w-100 items-center ">
                <h4 className="h4 black_text d-sm-block d-none">
                  Error : Something Went Wrong! Please try again.
                </h4>
              </div>
            )}
            {(highlightedProducts.loading || !isClient) && (
              <Spinner size="sm" />
            )}
            {highlightedProducts.data?.items &&
              highlightedProducts.data?.items?.map((product, index) => {
                let colorIndex = (previousIndex + 1) % colorClasses.length;
                previousIndex = colorIndex;

                return (
                  <SwiperSlide key={product.id}>
                    <Link
                      href={`/${product.url_path}`}
                      className={`${styles.highlighted_col} text-center`}
                    >
                      <div
                        className={`${styles.hightlighted_bg} ${colorClasses[colorIndex]}`}
                      >
                        <Image
                          src={product.image}
                          width={100}
                          height={100}
                          alt={`${product.name} Image`}
                          title={`Cannellio Cake Toppers - ${product.name}`}
                        />
                      </div>
                      <span className="h6 white_text font_rg">
                        {product.name}
                      </span>
                    </Link>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

{
  /* <section className={`${styles.hightlighted_section}`} id="hightlighted_section">
  <div className={`${styles.hightlighted_main} secondary_bg position-relative`}>
    <div className="container">
      <div>
        <div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={16}
            className="hightlighted-slider pb-5 pt-md-3 pt-4"
            scrollbar={{
              draggable: true,
              hide: false,
            }}
            breakpoints={{
              576: {
                spaceBetween: 25,
              },
              1400: {
                spaceBetween: 30,
              },
              1500: {
                spaceBetween: 35,
              },
            }}
            modules={[Scrollbar]}
          >
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_green}`}
                >
                  <span className="h4 black_text font_smb text-start">
                    60% <br />
                    OFF
                  </span>
                </div>
                <span className="h6 white_text font_rg">Summer Sale</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_orange}`}
                >
                  <Image
                    src={Anniversary}
                    width={128}
                    height={129}
                    alt="Anniversary Image"
                    title="Cannellio Cake Toppers - Anniversary"
                  />
                </div>
                <span className="h6 white_text font_rg">Anniversary</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_blue}`}
                >
                  <Image
                    src={Sports}
                    width={124}
                    height={133}
                    alt="Sports Image"
                    title="Cannellio Cake Toppers - Sports"
                  />
                </div>
                <span className="h6 white_text font_rg">Sports</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_yellow}`}
                >
                  <Image
                    src={MothersDay}
                    width={90}
                    height={124}
                    alt="Mother’s Day Image"
                    title="Cannellio Cake Toppers - Mother’s Day"
                  />
                </div>
                <span className="h6 white_text font_rg">Mother’s Day</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_pink}`}
                >
                  <Image
                    src={Christmas}
                    width={96}
                    height={130}
                    alt="Christmas Image"
                    title="Cannellio Cake Toppers - Christmas"
                  />
                </div>
                <span className="h6 white_text font_rg">Christmas</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_blue}`}
                >
                  <Image
                    src={Animal}
                    width={115}
                    height={133}
                    alt="Animals Image"
                    title="Cannellio Cake Toppers - Animals"
                  />
                </div>
                <span className="h6 white_text font_rg">Animals</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_pink}`}
                >
                  <Image
                    src={Christmas}
                    width={96}
                    height={130}
                    alt="Christmas Image"
                    title="Cannellio Cake Toppers - Christmas"
                  />
                </div>
                <span className="h6 white_text font_rg">Christmas</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_orange}`}
                >
                  <Image
                    src={Anniversary}
                    width={128}
                    height={129}
                    alt="Anniversary Image"
                    title="Cannellio Cake Toppers - Anniversary"
                  />
                </div>
                <span className="h6 white_text font_rg">Anniversary</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_blue}`}
                >
                  <Image
                    src={Sports}
                    width={124}
                    height={133}
                    alt="Sports Image"
                    title="Cannellio Cake Toppers - Sports"
                  />
                </div>
                <span className="h6 white_text font_rg">Sports</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_yellow}`}
                >
                  <Image
                    src={MothersDay}
                    width={90}
                    height={124}
                    alt="Mother’s Day Image"
                    title="Cannellio Cake Toppers - Mother’s Day"
                  />
                </div>
                <span className="h6 white_text font_rg">Mother’s Day</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_pink}`}
                >
                  <Image
                    src={Christmas}
                    width={96}
                    height={130}
                    alt="Christmas Image"
                    title="Cannellio Cake Toppers - Christmas"
                  />
                </div>
                <span className="h6 white_text font_rg">Christmas</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="" className={`${styles.highlighted_col} text-center`}>
                <div
                  className={`${styles.hightlighted_bg} ${styles.hightlighted_blue}`}
                >
                  <Image
                    src={Animal}
                    width={115}
                    height={133}
                    alt="Animals Image"
                    title="Cannellio Cake Toppers - Animals"
                  />
                </div>
                <span className="h6 white_text font_rg">Animals</span>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</section>; */
}
