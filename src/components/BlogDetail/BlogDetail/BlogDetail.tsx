"use client";
import Image from "next/image";
import React from "react";
import styles from "./BlogDetail.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const BlogDetail = () => {
  return (
    <section id="blog_detail_section">
      <div className={`${styles.blog_detail_main} common-padding-t`}>
        <div className="container">
          <div className={`${styles.blog_detail_wrapper}`}>
            <div className="main-title d-flex align-items-center justify-content-between col-lg-8">
              <h2 className="h2 black_text jua-font">
                Game with Delight: Creating the Gaming Theme Cake.
              </h2>
            </div>
            <div className={`${styles.blog_detail} row`}>
              <div className="col-lg-8 col-md-7 col-12">
                <div className={`${styles.blog_detail_content}`}>
                  <Image
                    src={getImageUrl('blog-detail-page/blog-details-img.png')}
                    width={1000}
                    height={569}
                    alt="Blog Image"
                    title="Cannellio Cake Toppers - Blog Image"
                    className={`${styles.blog_detail_img_src}`}
                  />
                  <div
                    className={`${styles.blog_detail_padding_t} d-flex gap-3 gap-lg-4 gap-xxl-5`}
                  >
                    <span
                      className={`${styles.blog_title_btn} primary_bg h5 font_rg white_text`}
                    >
                      Gamming
                    </span>
                    <span className={`${styles.blog_date_btn} h5 font_md`}>
                      July 20,2024
                    </span>
                  </div>
                  <p
                    className={`${styles.blog_detail_padding_t} ${styles.blog_line_height} h6 font_rg black_shade7_text`}
                  >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isnt
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to.
                  </p>
                  <p
                    className={`${styles.blog_detail_padding_t} ${styles.blog_line_height} h6 font_rg black_shade7_text`}
                  >
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks
                    reasonable.There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which
                    dont look even slightly believable. If you are going to use
                    a passage of Lorem Ipsum, you need to be sure there isnt
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                  </p>
                  <div className={`${styles.blog_detail_padding}`}>
                    <iframe
                      width="100%"
                      height="384"
                      src="https://www.youtube.com/embed/XB0yr51JnFc"
                      title="Astronaut cake topper tutorial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                  <div>
                    <p className="h4 font_md text-capitalize">
                      gaming funny messages
                    </p>
                    <ol
                      className={`${styles.blog_detail_padding_t} ${styles.blog_line_height} h6 font_rg black_shade7_text ps-3 ps-sm-4`}
                    >
                      <li>
                        Happy Father’s Day to one of my favourite ever parents.
                      </li>
                      <li>Well done dad – I turned out awesome!</li>
                      <li>
                        I hope your Father’s Day is as fun as your life was
                        before you had us kids.
                      </li>
                      <li>
                        I love how we don’t even need to say out loud that I am
                        your favourite child. It’s a really special bond we
                        share.
                      </li>
                      <li>
                        Happy Father’s Day dad, you’ve always been like a father
                        to me.
                      </li>
                      <li>
                        Dad – I wouldn’t trade you for anything. I mean,
                        nobody’s offered me anything, but I’m pretty sure I
                        wouldn’t!
                      </li>
                      <li>
                        Even though you never bought me a pony, I still love
                        you. Happy Father’s Day!
                      </li>
                      <li>
                        I was going to give you the most amazing gift ever… then
                        I remembered you already have me.
                      </li>
                      <li>
                        All I can say is that mum had amazing taste to pick you
                        to be our dad!
                      </li>
                      <li>
                        Happy Father’s Day to someone who inexplicably loves
                        signing his name in each of his text messages.
                      </li>
                      <li>
                        Thanks for having me – even though it was so you’d have
                        someone to take care of you when you’re old and lonely.
                      </li>
                      <li>
                        As a reward for being such a good father, I promise I’ll
                        let you pick your own nursing home…
                      </li>
                      <li>Thanks for not leaving me somewhere in a bucket.</li>
                      <li>
                        Well done – you rank in the top 10 of all the dads I’ve
                        ever had.
                      </li>
                      <li>Thanks for not letting me screw up my life.</li>
                      <li>You’ve always been my favourite ATM.</li>
                      <li>
                        Happy Father’s Day. I’m sorry I spent all of your money!
                      </li>
                      <li>
                        Thanks for helping me out financially so I can be an
                        independent person and not rely on others.
                      </li>
                      <li>
                        I’m so grateful for all the things you’ve done for me
                        over the years that I bought you this £3 card. Happy
                        Father’s Day.
                      </li>
                      <li>
                        Dad, I just wanted to say congratulations, I turned out
                        perfectly.
                      </li>
                      <li>
                        Have a great Father’s Day. Love from your favourite
                        financial burden.
                      </li>
                      <li>
                        Please accept this Father’s Day card as a token of my
                        poverty.
                      </li>
                      <li>
                        You’re by far the best dad I could have asked for...
                      </li>
                    </ol>
                    <div>
                      <p
                        className={`${styles.blog_detail_padding_t} h4 font_md black_text`}
                      >
                        Source of information
                      </p>
                      <p
                        className={`${styles.blog_detail_padding_t} ${styles.blog_line_height} h6 font_rg black_shade7_text`}
                      >
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isnt anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet.
                      </p>
                    </div>
                    <Image
                      src={getImageUrl('blog-detail-page/blog-follow-us-img.png')}
                      width={1000}
                      height={150}
                      alt="Blog Image"
                      title="Cannellio Cake Toppers - Blog Image"
                      className={`${styles.blog_detail_img_src} ${styles.blog_detail_padding}`}
                    />
                    <div>
                      <p className={`h4 font_md black_text text-capitalize`}>
                        how to add on cake
                      </p>
                      <p
                        className={`${styles.blog_detail_padding_t} ${styles.blog_line_height} h6 font_rg black_shade7_text`}
                      >
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isnt anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet.
                      </p>
                      <p
                        className={`${styles.blog_detail_padding_t} ${styles.blog_line_height} h6 font_rg black_shade7_text`}
                      >
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        dont look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isnt anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures, to generate Lorem
                        Ipsum which looks reasonable.There are many variations
                        of passages of Lorem Ipsum available, but the majority
                        have suffered alteration in some form, by injected
                        humour, or randomised words which dont look even
                        slightly believable. If you are going to use a passage
                        of Lorem Ipsum, you need to be sure there isnt anything
                        embarrassing hidden in the middle of text. All the Lorem
                        Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first
                        true generator on the Internet. It uses a dictionary of
                        over 200 Latin words, combined with a handful of model
                        sentence structures, to generate Lorem Ipsum which looks
                        reasonable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-12 g-0 gx-md-4">
                <div
                  className={`${styles.trending_blog_wrapper} h-scrollbar mt-4 mt-sm-5 mt-md-0`}
                >
                  <div className={`${styles.trending_blogs}`}>
                    <p className="h4 font_smb pb-4">Trending Blogs</p>
                    <div className="row gy-3 gx-0 g-sm-3 gy-md-3 gx-md-0">
                      <div
                        className={`${styles.blog_col} col-sm-6 col-md-12 col-12 pb-3`}
                      >
                        <div className={`${styles.blog_image}`}>
                          <Image
                            src={getImageUrl('blog-detail-page/trending-blog-img.png')}
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
                            className={`${styles.blog_title} h6 black_text font_md`}
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
                      <div
                        className={`${styles.blog_col} col-sm-6 col-md-12 col-12 pb-3`}
                      >
                        <div className={`${styles.blog_image}`}>
                          <Image
                            src={getImageUrl('blog-detail-page/trending-blog-img.png')}
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
                            className={`${styles.blog_title} h6 black_text font_md`}
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
                      <div
                        className={`${styles.blog_col} col-sm-6 col-md-12 col-12 pb-3`}
                      >
                        <div className={`${styles.blog_image}`}>
                          <Image
                            src={getImageUrl('blog-detail-page/trending-blog-img.png')}
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
                            className={`${styles.blog_title} h6 black_text font_md`}
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
                      <div
                        className={`${styles.blog_col} col-sm-6 col-md-12 col-12 pb-3`}
                      >
                        <div className={`${styles.blog_image}`}>
                          <Image
                            src={getImageUrl('blog-detail-page/trending-blog-img.png')}
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
                            className={`${styles.blog_title} h6 black_text font_md`}
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
                      <div
                        className={`${styles.blog_col} col-sm-6 col-md-12 col-12 pb-3`}
                      >
                        <div className={`${styles.blog_image}`}>
                          <Image
                            src={getImageUrl('blog-detail-page/trending-blog-img.png')}
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
                            className={`${styles.blog_title} h6 black_text font_md`}
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
                      <div
                        className={`${styles.blog_col} col-sm-6 col-md-12 col-12 pb-3`}
                      >
                        <div className={`${styles.blog_image}`}>
                          <Image
                            src={getImageUrl('blog-detail-page/trending-blog-img.png')}
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
                            className={`${styles.blog_title} h6 black_text font_md`}
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
