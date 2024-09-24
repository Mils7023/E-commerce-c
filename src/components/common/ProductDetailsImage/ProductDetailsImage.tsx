"use client";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./ProductDetailsImage.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, FreeMode, Navigation, Thumbs } from "swiper/modules";

export interface ProductDetailsImageProps {
  thumbsSwiper: any;
  item: any;
  variantImg: any;
  setThumbsSwiper: React.Dispatch<any>;
}

export const ProductDetailsImage: FC<ProductDetailsImageProps> = ({
  thumbsSwiper,
  item,
  setThumbsSwiper,
  variantImg,
}) => {
  const images =
    item.variants
      .find((v: any) =>
        Object.keys(variantImg).every(() =>
          v.attributes.some(
            (a: any) =>
              a.uid === (variantImg.cake_options && variantImg.materials)
          )
        )
      )
      ?.product.media_gallery_entries?.filter((media: any) =>
        Array.isArray(media.types) ? !media.types.includes("hover_image") : true
      ) ||
    item.media_gallery_entries?.filter((media: any) =>
      Array.isArray(media.types) ? !media.types.includes("hover_image") : true
    );

  return (
    <div className={`${styles.product_details_img_row}`}>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        effect="fade"
        modules={[EffectFade, Thumbs]}
        className="product_detail_slider pb-2"
      >
        {images?.map((media: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              alt="Product Image 1"
              title="Cannellio Cake Toppers - Product Image 1"
              src={media.file}
              width={0}
              height={0}
              className="w-100 h-100"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product_detail_slider_preview common-slider-arrows slider-arrows-verticle"

        // WE NEED TO ADD CLASS FOR MORE THEN 4 SLIDE HERE
      >
        {images?.map((media: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              alt="Product Image 1"
              title="Cannellio Cake Toppers - Product Image 1"
              src={media.file}
              width={0}
              height={0}
              className="w-auto h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// export default ProductDetailsImage;
