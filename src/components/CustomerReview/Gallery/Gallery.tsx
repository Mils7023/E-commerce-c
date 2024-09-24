"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";
import { ReviewStar } from "@/assets/icons";
import { useCustomerReview } from "@/hooks";
import dynamic from "next/dynamic";
import { SpinnerProps } from "@/components/common/Spinner";
import { Review, ReviewGallery } from "@/types";
import { Pagination } from "@/components";

const Spinner = dynamic<SpinnerProps>(
  () => import("@/components/common/Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);
export const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { reviewData, refetch, reviewLoading, handleAddLike } =
    useCustomerReview(currentPage, 6);
  const [likedReviews, setLikedReviews] = useState<Set<number>>(new Set());
  const totalStar = 5;

  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
  const [isLongText, setIsLongText] = useState<Record<number, boolean>>({});

  const calculateStars = (percent: number) => {
    return Math.round((percent / 100) * totalStar);
  };

  const handlePagination = (page: number) => {
    if (page) {
      setCurrentPage(page);
    }
  };

  const handleLike = async (review_detail_id: number) => {
    if (likedReviews.has(review_detail_id)) return;

    await handleAddLike(review_detail_id);
    setLikedReviews((prev) => new Set(prev).add(review_detail_id));
    refetch();
  };

  const toggleReadMore = (index: number) => {
    setExpandedReviews((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const reviewRefs = useRef<Array<HTMLParagraphElement | null>>([]);

  useEffect(() => {
    reviewRefs.current.forEach((ref, index) => {
      if (ref) {
        const lineHeight = parseInt(
          window.getComputedStyle(ref).lineHeight,
          10
        );
        const maxHeight = lineHeight * 6; // Assuming line-clamp is set to 5 lines
        setIsLongText((prev) => ({
          ...prev,
          [index]: ref.scrollHeight > maxHeight,
        }));
      }
    });
  }, [reviewData]);

  return (
    <section id="customergallery_section">
      <div
        className={`${styles.customer_gallery_main} common-padding-t common-padding-b`}
      >
        <div className="container">
          <div className={`${styles.customer_gallery_wrapper} mb-5`}>
            {reviewLoading && (
              <div className="d-flex justify-content-center">
                <Spinner size="md" />
              </div>
            )}
            <div className={styles.galleryRow}>
              {reviewData &&
                reviewData.reviews?.items?.map(
                  (review: Review, index: number) => (
                    <React.Fragment key={index}>
                      <div className={`${styles.customer_gallery_card}`}>
                        <div
                          className={`${styles.customer_gallery_card_head} d-flex align-items-center gap-2 gap-md-3`}
                        >
                          <div>
                            <Image
                              src={
                                review.avatar || getImageUrl("user-image.png")
                              }
                              alt={review.nickname}
                              title="Cannellio Cake Toppers - Customer Profile"
                              width={60}
                              height={60}
                              className={`${styles.Customer_profile_img_src} rounded-circle`}
                            />
                          </div>
                          <div>
                            <p className="font-18 font_md primary_text">
                              {review.nickname}
                            </p>
                            <div
                              className={`${styles.customergallery_ratings_stars} d-flex align-items-center gap-1`}
                            >
                              {[...Array(totalStar)].map((_, index) => (
                                <>
                                  <ReviewStar
                                    key={index}
                                    fill={
                                      index <
                                      calculateStars(
                                        review.rating_votes[0].percent
                                      )
                                        ? "#FFA83A"
                                        : undefined
                                    }
                                    stroke={
                                      index >=
                                      calculateStars(
                                        review.rating_votes[0].percent
                                      )
                                        ? "#B8B8B8"
                                        : undefined
                                    }
                                    strokeWidth={
                                      index >=
                                      calculateStars(
                                        review.rating_votes[0].percent
                                      )
                                        ? 0.756119
                                        : undefined
                                    }
                                  />
                                </>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div
                          className={`${styles.customer_gallery_card_divider} my-3 my-xxl-4 my-md-3`}
                        ></div>
                        <div className={`${styles.customer_gallery_card_body}`}>
                          <div>
                            <p
                              ref={(el) => {
                                // Assign to the current array, but don't return anything
                                reviewRefs.current[index] = el;
                              }}
                              className={`${
                                expandedReviews.includes(index)
                                  ? ""
                                  : "line-clamp line-clamp5"
                              } font-16 font_rg black_text`}
                            >
                              {review.detail}
                            </p>
                            {isLongText[index] && (
                              <a
                                href=""
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleReadMore(index);
                                }}
                                className="pe-auto font-16 font_rg primary_text"
                              >
                                {expandedReviews.includes(index)
                                  ? "Read Less"
                                  : "Read More"}
                              </a>
                            )}
                          </div>
                          <div className="d-flex justify-content-between my-3 my-xxl-4 my-md-3 gap-2 gap-lg-1">
                            <div
                              className={`${styles.date_like_button} d-flex w-md-50 w-100 align-items-center justify-content-center gap-2`}
                            >
                              <Image
                                src={getImageUrl(
                                  "customer-gallery-page/clock-vector.png"
                                )}
                                alt="Clock"
                                title="Cannellio Cake Toppers - Clock"
                                width={16}
                                height={16}
                              />
                              <span className="font-14 font_md black_shade3_text">
                                {review.created_at}
                              </span>
                            </div>
                            <button
                              className={`${styles.date_like_button} cursor-pointer d-flex w-md-50 w-100 align-items-center justify-content-center gap-2 btn-transparent`}
                              onClick={() =>
                                handleLike(review.review_detail_id)
                              }
                              disabled={likedReviews.has(
                                review.review_detail_id
                              )}
                              style={
                                likedReviews.has(review.review_detail_id)
                                  ? { cursor: "default" }
                                  : {}
                              }
                            >
                              <Image
                                src={getImageUrl(
                                  "customer-gallery-page/like-Vector.png"
                                )}
                                alt="like-thumb"
                                title="Cannellio Cake Toppers - like-thumb"
                                width={16}
                                height={16}
                              />
                              <span className="font-14 font_md black_shade3_text">
                                Helpful ({review.likes_num || 0})
                              </span>
                            </button>
                          </div>
                        </div>
                        {review.gallery && (
                          <>
                            <div
                              className={`${styles.customer_gallery_card_divider} my-3 my-xxl-4 my-md-3`}
                            ></div>
                            <div
                              className={`${styles.customer_gallery_card_footer}`}
                            >
                              <Swiper
                                slidesPerView={2}
                                spaceBetween={16}
                                navigation={true}
                                breakpoints={{
                                  420: {
                                    spaceBetween: 16,
                                    slidesPerView: 3,
                                  },
                                }}
                                modules={[Navigation]}
                                className="customer-gallery-arrow common-slider-arrows slider-arrows-verticle"
                              >
                                {review.gallery.map(
                                  (gallery: ReviewGallery, index: number) => (
                                    <SwiperSlide key={index}>
                                      <div
                                        className={`${styles.gallery_slider_image}`}
                                      >
                                        <Image
                                          src={gallery.preview_url}
                                          width={128}
                                          height={160}
                                          alt={gallery.label || ""}
                                          title="Cannellio Cake Toppers - Product"
                                          className={`w-100 h-100 hover-image-animation`}
                                        />
                                      </div>
                                    </SwiperSlide>
                                  )
                                )}
                              </Swiper>
                            </div>
                          </>
                        )}
                      </div>
                    </React.Fragment>
                  )
                )}
            </div>
            <div className="pt-md-5 pt-4 mt-xl-4 d-flex justify-content-center">
              {/* <button
                className={`btn-gradient btn rounded-pill font-18 font_smb`}
              >
                LOAD MORE
              </button> */}
              {!reviewLoading && (
                <Pagination
                  currentPage={currentPage}
                  perPage={reviewData?.reviews?.page_info?.page_size}
                  totalPage={reviewData?.reviews?.page_info?.total_pages}
                  handlePagination={handlePagination}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <section id="customergallery_section">
  <div
    className={`${styles.customer_gallery_main} common-padding-t common-padding-b`}
  >
    <div className="container">
      <div className={`${styles.customer_gallery_wrapper} mb-5`}>
        <div className={styles.galleryRow}>
          <div className={`${styles.customer_gallery_card}`}>
            <div
              className={`${styles.customer_gallery_card_head} d-flex align-items-center gap-2 gap-md-3`}
            >
              <div>
                <Image
                  src={getImageUrl(
                    "customer-gallery-page/customer-profile-image.png"
                  )}
                  alt="Customer-profile-Image"
                  title="Cannellio Cake Toppers - Customer Profile"
                  width={60}
                  height={60}
                  className={`${styles.Customer_profile_img_src} rounded-circle`}
                />
              </div>
              <div>
                <p className="font-18 font_md primary_text">J********h</p>
                <div
                  className={`${styles.customergallery_ratings_stars} d-flex align-items-center gap-1`}
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
            </div>
            <div
              className={`${styles.customer_gallery_card_divider} my-3 my-xxl-4 my-md-3`}
            ></div>
            <div className={`${styles.customer_gallery_card_body}`}>
              <div>
                <p className="line-clamp line-clamp5 font-16 font_rg black_text">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo Lorem ipsum dolor sit amet
                </p>
                <a href="#" className="pe-auto font-16 font_rg primary_text">
                  Read More
                </a>
              </div>
              <div className="d-flex justify-content-between my-3 my-xxl-4 my-md-3 gap-2 gap-lg-1">
                <div
                  className={`${styles.date_like_button} d-flex w-md-50 w-100 align-items-center justify-content-center gap-2`}
                >
                  <Image
                    src={getImageUrl("customer-gallery-page/clock-vector.png")}
                    alt="Clock"
                    title="Cannellio Cake Toppers - Clock"
                    width={16}
                    height={16}
                  />
                  <span className="font-14 font_md black_shade3_text">
                    Aug 15, 2024
                  </span>
                </div>
                <div
                  className={`${styles.date_like_button} cursor-pointer d-flex w-md-50 w-100 align-items-center justify-content-center gap-2`}
                >
                  <Image
                    src={getImageUrl("customer-gallery-page/like-Vector.png")}
                    alt="like-thumb"
                    title="Cannellio Cake Toppers - like-thumb"
                    width={16}
                    height={16}
                  />
                  <span className="font-14 font_md black_shade3_text">
                    Helpful (0)
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`${styles.customer_gallery_card_divider} my-3 my-xxl-4 my-md-3`}
            ></div>
            <div className={`${styles.customer_gallery_card_footer}`}>
              <Swiper
                slidesPerView={2}
                spaceBetween={16}
                navigation={true}
                breakpoints={{
                  420: {
                    spaceBetween: 16,
                    slidesPerView: 3,
                  },
                }}
                modules={[Navigation]}
                className="customer-gallery-arrow common-slider-arrows slider-arrows-verticle"
              >
                <SwiperSlide>
                  <div className={`${styles.gallery_slider_image}`}>
                    <Image
                      src={getImageUrl(
                        "customer-gallery-page/customer-gallery-slider-img.png"
                      )}
                      width={128}
                      height={160}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${styles.gallery_slider_image}`}>
                    <Image
                      src={getImageUrl(
                        "customer-gallery-page/customer-gallery-slider-img.png"
                      )}
                      width={128}
                      height={160}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${styles.gallery_slider_image}`}>
                    <Image
                      src={getImageUrl(
                        "customer-gallery-page/customer-gallery-slider-img.png"
                      )}
                      width={128}
                      height={160}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${styles.gallery_slider_image}`}>
                    <Image
                      src={getImageUrl(
                        "customer-gallery-page/customer-gallery-slider-img.png"
                      )}
                      width={128}
                      height={160}
                      alt="Product Image"
                      title="Cannellio Cake Toppers - Product"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>; */
}
