"use client";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();
  return (
    <footer>
      {pathname === "/checkout" ? (
        <div className={`primary_dark_bg py-md-4 py-3`}>
          <div className={`text-center`}>
            <span className="white_text font_18">
              &copy;2024{" "}
              <Link href="" className="white_text text-uppercase font_md">
                Cannelliocakes
              </Link>{" "}
              All Rights Reserved.
            </span>
          </div>
        </div>
      ) : (
        <div className={`${styles.footer_main} common-padding-t pb-5`}>
          <div className="container">
            <div className={`${styles.footer_wrapper} d-flex flex-column`}>
              <div
                className={`${styles.footer_head} row g-lg-5 g-4 order-md-1 order-2`}
              >
                <div className={`${styles.join_us} col-md-8 col-12`}>
                  <span className="h6 black_text font_smb mb-lg-4 mb-3 d-inline-block">
                    Join Us To Get Updates :
                  </span>
                  <form className={`${styles.joinus_form}`}>
                    <div className="d-flex gap-xxl-4 gap-3">
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                        className={`${styles.form_control} w-100`}
                      />
                      <button className={`${styles.joinus_btn} h-auto`}>
                        SUBSCRIBE
                      </button>
                    </div>
                  </form>
                </div>
                <div
                  className={`${styles.payment_method} col-md-4 d-flex flex-column justify-content-between`}
                >
                  <span className="h6 black_text font_smb mb-lg-4 mb-3 d-inline-block">
                    We Accept :
                  </span>
                  <div
                    className={`${styles.payment_method_wrapper} d-flex gap-xxl-3 gap-2`}
                  >
                    <Link href="">
                      <Image
                        src={getImageUrl("payment-method/r-pay.png")}
                        width={100}
                        height={50}
                        alt="Payment Method 1"
                        title="Cannellio Cake Toppers - Payment Method 1"
                      />
                    </Link>
                    <Link href="">
                      <Image
                        src={getImageUrl("payment-method/visa.png")}
                        width={80}
                        height={50}
                        alt="Payment Method 2"
                        title="Cannellio Cake Toppers - Payment Method 2"
                      />
                    </Link>
                    <Link href="">
                      <Image
                        src={getImageUrl("payment-method/maestro.png")}
                        width={80}
                        height={50}
                        alt="Payment Method 3"
                        title="Cannellio Cake Toppers - Payment Method 3"
                      />
                    </Link>
                    <Link href="">
                      <Image
                        src={getImageUrl("payment-method/discover.png")}
                        width={80}
                        height={50}
                        alt="Payment Method 4"
                        title="Cannellio Cake Toppers - Payment Method 4"
                      />
                    </Link>
                    <Link href="">
                      <Image
                        src={getImageUrl("payment-method/american-express.png")}
                        width={80}
                        height={50}
                        alt="Payment Method 5"
                        title="Cannellio Cake Toppers - Payment Method 5"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className={`${styles.footer_body} row order-md-2 order-1`}>
                <div className="col-lg-3 col-md-6 col-12 mb-lg-0 mb-md-5 mb-4">
                  <Link
                    href=""
                    className={`mb-md-5 mb-4 ${styles.footer_logo}`}
                  >
                    <Image
                      alt="Site Logo"
                      width={225}
                      height={105}
                      src={getImageUrl("logo.png")}
                      title="Cannellio Cake Toppers - Logo"
                    />
                  </Link>
                  <div className={`${styles.site_contact_details}`}>
                    <div className="d-flex align-items-start gap-3 mb-md-4 mb-3">
                      <Image
                        alt="Location"
                        width={24}
                        height={24}
                        src={getImageUrl("location-icon.png")}
                        title="Cannellio Cake Toppers - Location"
                        className="pt-1"
                      />
                      <Link href="" className="black_text font-18 font-rg">
                        xyz colony,Abc area,
                        <br /> United Kingdom
                      </Link>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <Image
                        alt="Mail Icon"
                        width={24}
                        height={19}
                        src={getImageUrl("mail-icon.png")}
                        title="Cannellio Cake Toppers - Mail Icon"
                      />
                      <Link
                        href="mailTo:cannelliocake@gmail.com"
                        className="black_text font-18 font-rg"
                      >
                        cannelliocake@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md col-12 mb-md-0 mb-4">
                  <span
                    className={`${styles.footer_links_title} h5 jua-font primary_text font_md`}
                  >
                    Company
                  </span>
                  <ul
                    className={`${styles.footer_links} d-flex flex-column gap-xxl-4 gap-md-3 gap-2`}
                  >
                    <li>
                      <Link href="">About Us</Link>
                    </li>
                    <li>
                      <Link href="">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="">Ingredients</Link>
                    </li>
                    <li>
                      <Link href="">Blogs</Link>
                    </li>
                    <li>
                      <Link href="">FAQ’s</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md col-12 mb-md-0 mb-4">
                  <span
                    className={`${styles.footer_links_title} h5 jua-font primary_text font_md`}
                  >
                    Services
                  </span>
                  <ul
                    className={`${styles.footer_links} d-flex flex-column gap-xxl-4 gap-md-3 gap-2`}
                  >
                    <li>
                      <Link href="">Track Order</Link>
                    </li>
                    <li>
                      <Link href="">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link href="">Privacy policy</Link>
                    </li>
                    <li>
                      <Link href="">Return Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-4 col-lg-5 col-md-6 col-12">
                  <span
                    className={`${styles.footer_links_title} h5 jua-font primary_text font_md`}
                  >
                    Categories
                  </span>
                  <div className="d-flex gap-xl-5 gap-md-4 gap-5 justify-content-md-between">
                    <ul
                      className={`${styles.footer_links} d-flex flex-column gap-xxl-4 gap-md-3 gap-2`}
                    >
                      <li>
                        <Link href="">Sports</Link>
                      </li>
                      <li>
                        <Link href="">Animals</Link>
                      </li>
                      <li>
                        <Link href="">Superhero</Link>
                      </li>
                      <li>
                        <Link href="">Unicorn</Link>
                      </li>
                      <li>
                        <Link href="">Wedding</Link>
                      </li>
                    </ul>
                    <div className={`${styles.menu_divider}`}></div>
                    <ul
                      className={`${styles.footer_links} d-flex flex-column gap-xxl-4 gap-md-3 gap-2`}
                    >
                      <li>
                        <Link href="">Baby Shower</Link>
                      </li>
                      <li>
                        <Link href="">Custom Photo Upload</Link>
                      </li>
                      <li>
                        <Link href="">Valentine’s Day</Link>
                      </li>
                      <li>
                        <Link href="">Graduation</Link>
                      </li>
                      <li>
                        <Link href="">Arts & Monster</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.footer_end} d-flex flex-md-row flex-column justify-content-md-between align-items-md-start align-items-center order-3 gap-md-0 gap-2`}
              >
                <span className="black_text font-18">
                  &copy;2024{" "}
                  <Link
                    href="http://cennolliocake.wedowebapps.in/"
                    className="primary_text text-uppercase font_md"
                  >
                    Cannelliocakes
                  </Link>{" "}
                  All Rights Reserved.
                </span>

                <span className="black_text font-18">
                  Designed & Developed By{" "}
                  <Link
                    href="https://www.wedowebapps.com/"
                    className="primary_text text-uppercase font_md"
                  >
                    WEDOWEBAPPS
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
