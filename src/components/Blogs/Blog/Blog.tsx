"use client";
import Image from "next/image";
import React from "react";
import styles from "./Blog.module.scss";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";
export const Blog = () => {
  return (
    <section id="blogs_section">
      <div className={`${styles.blogs_main} common-padding-t common-padding-b`}>
        <div className="container">
          <div className={`${styles.blogs_wrapper} mb-5`}>
            <div className="main-title d-flex flex-md-row flex-column gap-2 align-items-md-center justify-content-between">
              <h2 className="h2 black_text jua-font">Read Our Latest Blog</h2>
              <div className={`${styles.blog_search}`}>
                <div
                  className={`${styles.blog_search_wrapper} position-relative`}
                >
                  <input
                    type="text"
                    placeholder="Search Blog Here..."
                    className="form-control"
                  ></input>
                  <button
                    className={`${styles.blog_search_btn} btn  position-absolute top-0 bottom-0 end-0`}
                  >
                    <Image
                      alt="Search Icon"
                      width={24}
                      height={24}
                      src={getImageUrl("faq-page/search-icon-black.png")}
                      title="Cannellio Cake Toppers - Search Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className={`${styles.blogs}`}>
              <div
                className={`${styles.blog_card} d-flex flex-column flex-md-row gap-3 gap-md-0`}
              >
                <div className={`${styles.blog_card_image}`}>
                  <Link href="" className="w-100 h-100">
                    <Image
                      src={getImageUrl("blog-page/blog-image-1.png")}
                      width={645}
                      height={367}
                      alt="Blog Image"
                      title="Cannellio Cake Toppers - Blog Image"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </Link>
                </div>
                <div
                  className={`${styles.blog_card_content} d-flex flex-column gap-xl-3 gap-2 align-items-start`}
                >
                  <span
                    className={`${styles.blog_content_title_btn} h6 font_rg white_text`}
                  >
                    Gamming
                  </span>
                  <h4
                    className={`${styles.blog_content_title} h4 font_smb black_text line-clamp line-clamp2`}
                  >
                    Game with Delight: Creating the Gaming Theme Cake
                  </h4>
                  <p
                    className={`${styles.blog_content_description} h6 font_rg black_shade7_text line-clamp line-clamp5`}
                  >
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words If you are going to use
                    a passage of Lorem the majority have suffered alteration in
                    some form, by injected humour, or randomised words If you
                    are going to use a passage of Lorem the majority have
                    suffered alteration in some form, by injected humour, or
                  </p>
                  <Link
                    href=""
                    className={`${styles.blog_content_link} h5 font_smb primary_dark_text d-flex align-items-center gap-2 gap-xl-3`}
                  >
                    Read More
                    <svg
                      width="35"
                      height="23"
                      viewBox="0 0 41 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.0657 12.9564C40.6543 12.3678 40.6543 11.4135 40.0657 10.8249L30.4741 1.2332C29.8855 0.644605 28.9312 0.644605 28.3426 1.2332C27.754 1.82179 27.754 2.77609 28.3426 3.36468L36.8685 11.8906L28.3426 20.4166C27.754 21.0052 27.754 21.9595 28.3426 22.5481C28.9312 23.1366 29.8855 23.1366 30.4741 22.5481L40.0657 12.9564ZM0 13.3978L39 13.3978V10.3834L0 10.3834L0 13.3978Z"
                        fill="#e275a8"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div
                className={`${styles.blog_card} d-flex flex-column flex-md-row-reverse gap-3 gap-md-0`}
              >
                <div className={`${styles.blog_card_image}`}>
                  <Link href="" className="w-100 h-100">
                    <Image
                      src={getImageUrl("blog-page/blog-image-2.png")}
                      width={645}
                      height={367}
                      alt="Blog Image"
                      title="Cannellio Cake Toppers - Blog Image"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </Link>
                </div>
                <div
                  className={`${styles.blog_card_content} d-flex flex-column gap-xl-3 gap-2 align-items-start`}
                >
                  <span
                    className={`${styles.blog_content_title_btn} h6 font_rg white_text`}
                  >
                    Gamming
                  </span>
                  <h4
                    className={`${styles.blog_content_title} h4 font_smb black_text line-clamp line-clamp2`}
                  >
                    Game with Delight: Creating the Gaming Theme Cake
                  </h4>
                  <p
                    className={`${styles.blog_content_description} h6 font_rg black_shade7_text line-clamp line-clamp5`}
                  >
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words If you are going to use
                    a passage of Lorem the majority have suffered alteration in
                    some form, by injected humour, or randomised words If you
                    are going to use a passage of Lorem the majority have
                    suffered alteration in some form, by injected humour, or
                  </p>
                  <Link
                    href=""
                    className={`${styles.blog_content_link} h5 font_smb primary_dark_text d-flex align-items-center gap-2 gap-xl-3`}
                  >
                    Read More
                    <svg
                      width="35"
                      height="23"
                      viewBox="0 0 41 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.0657 12.9564C40.6543 12.3678 40.6543 11.4135 40.0657 10.8249L30.4741 1.2332C29.8855 0.644605 28.9312 0.644605 28.3426 1.2332C27.754 1.82179 27.754 2.77609 28.3426 3.36468L36.8685 11.8906L28.3426 20.4166C27.754 21.0052 27.754 21.9595 28.3426 22.5481C28.9312 23.1366 29.8855 23.1366 30.4741 22.5481L40.0657 12.9564ZM0 13.3978L39 13.3978V10.3834L0 10.3834L0 13.3978Z"
                        fill="#e275a8"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div
                className={`${styles.blog_card} d-flex flex-column flex-md-row gap-3 gap-md-0`}
              >
                <div className={`${styles.blog_card_image}`}>
                  <Link href="" className="w-100 h-100">
                    <Image
                      src={getImageUrl("blog-page/blog-image-1.png")}
                      width={645}
                      height={367}
                      alt="Blog Image"
                      title="Cannellio Cake Toppers - Blog Image"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </Link>
                </div>
                <div
                  className={`${styles.blog_card_content} d-flex flex-column gap-xl-3 gap-2 align-items-start`}
                >
                  <span
                    className={`${styles.blog_content_title_btn} h6 font_rg white_text`}
                  >
                    Gamming
                  </span>
                  <h4
                    className={`${styles.blog_content_title} h4 font_smb black_text line-clamp line-clamp2`}
                  >
                    Game with Delight: Creating the Gaming Theme Cake
                  </h4>
                  <p
                    className={`${styles.blog_content_description} h6 font_rg black_shade7_text line-clamp line-clamp5`}
                  >
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words If you are going to use
                    a passage of Lorem the majority have suffered alteration in
                    some form, by injected humour, or randomised words If you
                    are going to use a passage of Lorem the majority have
                    suffered alteration in some form, by injected humour, or
                  </p>
                  <Link
                    href=""
                    className={`${styles.blog_content_link} h5 font_smb primary_dark_text d-flex align-items-center gap-2 gap-xl-3`}
                  >
                    Read More
                    <svg
                      width="35"
                      height="23"
                      viewBox="0 0 41 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.0657 12.9564C40.6543 12.3678 40.6543 11.4135 40.0657 10.8249L30.4741 1.2332C29.8855 0.644605 28.9312 0.644605 28.3426 1.2332C27.754 1.82179 27.754 2.77609 28.3426 3.36468L36.8685 11.8906L28.3426 20.4166C27.754 21.0052 27.754 21.9595 28.3426 22.5481C28.9312 23.1366 29.8855 23.1366 30.4741 22.5481L40.0657 12.9564ZM0 13.3978L39 13.3978V10.3834L0 10.3834L0 13.3978Z"
                        fill="#e275a8"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div
                className={`${styles.blog_card} d-flex flex-column flex-md-row-reverse gap-3 gap-md-0`}
              >
                <div className={`${styles.blog_card_image}`}>
                  <Link href="" className="w-100 h-100">
                    <Image
                      src={getImageUrl("blog-page/blog-image-2.png")}
                      width={645}
                      height={367}
                      alt="Blog Image"
                      title="Cannellio Cake Toppers - Blog Image"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </Link>
                </div>
                <div
                  className={`${styles.blog_card_content} d-flex flex-column gap-xl-3 gap-2 align-items-start`}
                >
                  <span
                    className={`${styles.blog_content_title_btn} h6 font_rg white_text`}
                  >
                    Gamming
                  </span>
                  <h4
                    className={`${styles.blog_content_title} h4 font_smb black_text line-clamp line-clamp2`}
                  >
                    Game with Delight: Creating the Gaming Theme Cake
                  </h4>
                  <p
                    className={`${styles.blog_content_description} h6 font_rg black_shade7_text line-clamp line-clamp5`}
                  >
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words If you are going to use
                    a passage of Lorem the majority have suffered alteration in
                    some form, by injected humour, or randomised words If you
                    are going to use a passage of Lorem the majority have
                    suffered alteration in some form, by injected humour, or
                  </p>
                  <Link
                    href=""
                    className={`${styles.blog_content_link} h5 font_smb primary_dark_text d-flex align-items-center gap-2 gap-xl-3`}
                  >
                    Read More
                    <svg
                      width="35"
                      height="23"
                      viewBox="0 0 41 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.0657 12.9564C40.6543 12.3678 40.6543 11.4135 40.0657 10.8249L30.4741 1.2332C29.8855 0.644605 28.9312 0.644605 28.3426 1.2332C27.754 1.82179 27.754 2.77609 28.3426 3.36468L36.8685 11.8906L28.3426 20.4166C27.754 21.0052 27.754 21.9595 28.3426 22.5481C28.9312 23.1366 29.8855 23.1366 30.4741 22.5481L40.0657 12.9564ZM0 13.3978L39 13.3978V10.3834L0 10.3834L0 13.3978Z"
                        fill="#e275a8"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div
                className={`${styles.blog_card} d-flex flex-column flex-md-row gap-3 gap-md-0`}
              >
                <div className={`${styles.blog_card_image}`}>
                  <Link href="" className="w-100 h-100">
                    <Image
                      src={getImageUrl("blog-page/blog-image-1.png")}
                      width={645}
                      height={367}
                      alt="Blog Image"
                      title="Cannellio Cake Toppers - Blog Image"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </Link>
                </div>
                <div
                  className={`${styles.blog_card_content} d-flex flex-column gap-xl-3 gap-2 align-items-start`}
                >
                  <span
                    className={`${styles.blog_content_title_btn} h6 font_rg white_text`}
                  >
                    Gamming
                  </span>
                  <h4
                    className={`${styles.blog_content_title} h4 font_smb black_text line-clamp line-clamp2`}
                  >
                    Game with Delight: Creating the Gaming Theme Cake
                  </h4>
                  <p
                    className={`${styles.blog_content_description} h6 font_rg black_shade7_text line-clamp line-clamp5`}
                  >
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words If you are going to use
                    a passage of Lorem the majority have suffered alteration in
                    some form, by injected humour, or randomised words If you
                    are going to use a passage of Lorem the majority have
                    suffered alteration in some form, by injected humour, or
                  </p>
                  <Link
                    href=""
                    className={`${styles.blog_content_link} h5 font_smb primary_dark_text d-flex align-items-center gap-2 gap-xl-3`}
                  >
                    Read More
                    <svg
                      width="35"
                      height="23"
                      viewBox="0 0 41 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.0657 12.9564C40.6543 12.3678 40.6543 11.4135 40.0657 10.8249L30.4741 1.2332C29.8855 0.644605 28.9312 0.644605 28.3426 1.2332C27.754 1.82179 27.754 2.77609 28.3426 3.36468L36.8685 11.8906L28.3426 20.4166C27.754 21.0052 27.754 21.9595 28.3426 22.5481C28.9312 23.1366 29.8855 23.1366 30.4741 22.5481L40.0657 12.9564ZM0 13.3978L39 13.3978V10.3834L0 10.3834L0 13.3978Z"
                        fill="#e275a8"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div
                className={`${styles.blog_card} d-flex flex-column flex-md-row-reverse gap-3 gap-md-0`}
              >
                <div className={`${styles.blog_card_image}`}>
                  <Link href="" className="w-100 h-100">
                    <Image
                      src={getImageUrl("blog-page/blog-image-2.png")}
                      width={645}
                      height={367}
                      alt="Blog Image"
                      title="Cannellio Cake Toppers - Blog Image"
                      className={`w-100 h-100 hover-image-animation`}
                    />
                  </Link>
                </div>
                <div
                  className={`${styles.blog_card_content} d-flex flex-column gap-xl-3 gap-2 align-items-start`}
                >
                  <span
                    className={`${styles.blog_content_title_btn} h6 font_rg white_text`}
                  >
                    Gamming
                  </span>
                  <h4
                    className={`${styles.blog_content_title} h4 font_smb black_text line-clamp line-clamp2`}
                  >
                    Game with Delight: Creating the Gaming Theme Cake
                  </h4>
                  <p
                    className={`${styles.blog_content_description} h6 font_rg black_shade7_text line-clamp line-clamp5`}
                  >
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words If you are going to use
                    a passage of Lorem the majority have suffered alteration in
                    some form, by injected humour, or randomised words If you
                    are going to use a passage of Lorem the majority have
                    suffered alteration in some form, by injected humour, or
                  </p>
                  <Link
                    href=""
                    className={`${styles.blog_content_link} h5 font_smb primary_dark_text d-flex align-items-center gap-2 gap-xl-3`}
                  >
                    Read More
                    <svg
                      width="35"
                      height="23"
                      viewBox="0 0 41 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40.0657 12.9564C40.6543 12.3678 40.6543 11.4135 40.0657 10.8249L30.4741 1.2332C29.8855 0.644605 28.9312 0.644605 28.3426 1.2332C27.754 1.82179 27.754 2.77609 28.3426 3.36468L36.8685 11.8906L28.3426 20.4166C27.754 21.0052 27.754 21.9595 28.3426 22.5481C28.9312 23.1366 29.8855 23.1366 30.4741 22.5481L40.0657 12.9564ZM0 13.3978L39 13.3978V10.3834L0 10.3834L0 13.3978Z"
                        fill="#e275a8"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`${styles.product_pagination} d-flex justify-content-center`}
            >
              <Image
                src={getImageUrl("pagination.png")}
                alt="Pagination"
                title="Cannellio Cake Topppers - Pagination"
                className="w-auto"
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
