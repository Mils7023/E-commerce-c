"use client";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import styles from "./OrderHistoryDetail.module.scss";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";
import { OrderItem } from "@/types";
import { useRouter } from "next/navigation";
interface OrderHistoryDetailProps {
  handleShowOrderDetail: (order?: OrderItem) => void; // Type for the function
  OrderItems?: OrderItem; // Type for the OrderItems, you can replace 'any' with a more specific type if available
}

export const OrderHistoryDetail: React.FC<OrderHistoryDetailProps> = ({
  handleShowOrderDetail,
  OrderItems,
}) => {
  const router = useRouter();

  const handleContactUs = () => {
    router.push("/contact-us");
  };

  // Function to format date
  const formatOrderDate = (dateString?: string): string => {
    if (!dateString) {
      return "N/A"; // Default value if dateString is undefined
    }
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short", // e.g., "Sep"
      day: "2-digit", // e.g., "11"
      year: "numeric", // e.g., "2024"
    });
  };

  console.log("hello order passed is: ", OrderItems);
  return (
    <div>
      <div className={`${styles.profile_title} common-profile-shadow`}>
        <button
          onClick={() => handleShowOrderDetail()}
          className="font_md d-flex gap-2 d-flex align-items-center btn-transparent black-link-hover"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.355 27.1045L5.24998 17.9995L14.355 8.89449"
              stroke="#292D32"
              strokeWidth="2.7"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30.7505 18L5.50549 18"
              stroke="#292D32"
              strokeWidth="2.7"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="h5 font_smb">
            Your Order is{" "}
            {OrderItems?.status === "shipping"
              ? "being shipped"
              : OrderItems?.status}
          </p>
        </button>
      </div>
      <div className={`${styles.profile_body} common-profile-shadow mt-3`}>
        {/* DEFAULT ADDRESS CARDS */}
        <div className={`${styles.profile_address_book}`}>
          <div className={`${styles.addressbook_card} row g-3`}>
            {OrderItems?.shipping_address && (
              <div className="col-xl-4 col-md-6 col-12">
                <div className={`${styles.address_card}`}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="font-16 font_smb">
                      {OrderItems?.shipping_address?.firstname}{" "}
                      {OrderItems?.shipping_address?.lastname}
                    </p>
                    <p
                      className={`${styles.default_btn} font-10 font_smb text-nowrap`}
                    >
                      Shipping
                    </p>
                  </div>
                  <p className="font-14 font_md black_shade3_text">
                    {"+44 "}
                    {OrderItems?.shipping_address?.telephone}
                  </p>
                  <p className="font-14 font_md black_shade3_text pt-1">
                    {OrderItems?.shipping_address?.street?.join(", ")},{" "}
                    {OrderItems?.shipping_address?.city},{" "}
                    {OrderItems?.shipping_address?.region?.toString()},{" "}
                    {"United Kingdom"} {OrderItems?.shipping_address?.postcode}
                    {/* First street, abc mall, Newyork, America 356568 */}
                  </p>
                  {/* <hr className="black_shade3_text" /> */}
                  {/* <div className="d-flex align-items-center justify-content-end  gap-2">
                    <button className="font-14 font_smb primary_text btn-transparent d-flex align-items-center justify-content-end gap-2">
                      <span className={`${styles.edit_vector}`}>
                        <svg
                          width="20"
                          height="22"
                          viewBox="0 0 7 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.48712 7.91152C6.48712 8.25881 6.3419 8.59187 6.0834 8.83745C5.82491 9.08302 5.47431 9.22098 5.10874 9.22098H1.89253C1.52696 9.22098 1.17636 9.08302 0.917865 8.83745C0.659369 8.59187 0.514147 8.25881 0.514147 7.91152V2.67368H0.0546875V1.36422H2.12226L2.58171 0.927734H4.41955L4.87901 1.36422H6.94658V2.67368H6.48712V7.91152ZM0.973606 2.67368V7.91152C0.973606 8.14304 1.07042 8.36509 1.24275 8.5288C1.41508 8.69252 1.64881 8.78449 1.89253 8.78449H5.10874C5.35245 8.78449 5.58618 8.69252 5.75852 8.5288C5.93085 8.36509 6.02766 8.14304 6.02766 7.91152V2.67368H0.973606ZM6.48712 2.23719V1.80071H4.64928L4.18982 1.36422H2.81144L2.35198 1.80071H0.514147V2.23719H6.48712ZM1.89253 3.54665H2.35198V7.91152H1.89253V3.54665ZM4.64928 3.54665H5.10874V7.91152H4.64928V3.54665Z"
                            fill="#F8F8F8"
                          />
                        </svg>
                      </span>
                    </button>
                    <button className="font-14 font_smb primary_text btn-transparent d-flex align-items-center justify-content-end gap-2">
                      EDIT
                    </button>
                  </div> */}
                </div>
              </div>
            )}
            {OrderItems?.billing_address && (
              <div className="col-xl-4 col-md-6 col-12">
                <div className={`${styles.address_card}`}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <p className="font-16 font_smb">
                      {OrderItems?.billing_address?.firstname}{" "}
                      {OrderItems?.billing_address?.lastname}
                    </p>
                    <p
                      className={`${styles.default_btn} font-10 font_smb text-nowrap`}
                    >
                      Billing
                    </p>
                  </div>
                  <p className="font-14 font_md black_shade3_text">
                    +44 {OrderItems?.billing_address?.telephone}
                  </p>
                  <p className="font-14 font_md black_shade3_text pt-1">
                    {OrderItems?.billing_address?.street?.join(", ")},{" "}
                    {OrderItems?.billing_address?.city},{" "}
                    {OrderItems?.billing_address?.region?.toString()},{" "}
                    {"United Kingdom"} {OrderItems?.billing_address?.postcode}
                  </p>
                  {/* <hr className="black_shade3_text" /> */}
                  {/* <div className="d-flex align-items-center justify-content-end  gap-2">
                    <button className="font-14 font_smb primary_text btn-transparent d-flex align-items-center justify-content-end gap-2">
                      <span className={`${styles.edit_vector}`}>
                        <svg
                          width="20"
                          height="22"
                          viewBox="0 0 7 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.48712 7.91152C6.48712 8.25881 6.3419 8.59187 6.0834 8.83745C5.82491 9.08302 5.47431 9.22098 5.10874 9.22098H1.89253C1.52696 9.22098 1.17636 9.08302 0.917865 8.83745C0.659369 8.59187 0.514147 8.25881 0.514147 7.91152V2.67368H0.0546875V1.36422H2.12226L2.58171 0.927734H4.41955L4.87901 1.36422H6.94658V2.67368H6.48712V7.91152ZM0.973606 2.67368V7.91152C0.973606 8.14304 1.07042 8.36509 1.24275 8.5288C1.41508 8.69252 1.64881 8.78449 1.89253 8.78449H5.10874C5.35245 8.78449 5.58618 8.69252 5.75852 8.5288C5.93085 8.36509 6.02766 8.14304 6.02766 7.91152V2.67368H0.973606ZM6.48712 2.23719V1.80071H4.64928L4.18982 1.36422H2.81144L2.35198 1.80071H0.514147V2.23719H6.48712ZM1.89253 3.54665H2.35198V7.91152H1.89253V3.54665ZM4.64928 3.54665H5.10874V7.91152H4.64928V3.54665Z"
                            fill="#F8F8F8"
                          />
                        </svg>
                      </span>
                    </button>
                    <button className="font-14 font_smb primary_text btn-transparent d-flex align-items-center justify-content-end gap-2">
                      EDIT
                    </button>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* OPRODUCTS ORDER TABLE */}
        <div className={`${styles.order_table} mt-4`}>
          <div className={`d-sm-block d-none ${styles.order_table_header}`}>
            <div className="row">
              <div className="col-5">
                <span
                  className={`${styles.order_table_hd} black_text font_smb text-uppercase`}
                >
                  PRODUCT NAME
                </span>
              </div>
              <div className="col-2">
                <span
                  className={`${styles.order_table_hd} black_text font_smb text-uppercase`}
                >
                  PRICE
                </span>
              </div>
              <div className="col-2 text-center">
                <span
                  className={`${styles.order_table_hd} black_text font_smb text-uppercase`}
                >
                  QTY
                </span>
              </div>
              <div className="col-3 text-center">
                <span
                  className={`${styles.order_table_hd} black_text font_smb text-uppercase`}
                >
                  STATUS
                </span>
              </div>
            </div>
          </div>
          <div className={styles.order_table_body}>
            <div className={`${styles.order_table_body_title}`}>
              <div className="row">
                <div className="col-12 d-flex gap-2 gap-xl-3 align-items-center">
                  <span
                    className={`${styles.order_table_bd} black_text font_md`}
                  >
                    {/* ORDER : {OrderHistoryDetail?.} */}
                  </span>
                  <span
                    className={`${styles.order_table_bd} black_text font_md`}
                  >
                    {formatOrderDate(OrderItems?.order_date)}
                  </span>
                </div>
              </div>
            </div>
            <div
              className={` ${styles.order_table_body_row} d-flex flex-column gap-sm-0 gap-3 py-sm-0 py-2`}
            >
              {OrderItems?.items &&
                OrderItems?.items.map((product, index) => (
                  <div
                    className={`row g-lg-3 g-2 ${styles.order_table_body_col}`}
                    key={product?.id}
                  >
                    <div className="col-sm-5 col-10 order-1">
                      <div className={`${styles.order_table_bd}`}>
                        <div
                          className={`${styles.order_table_product} d-flex align-items-sm-center align-items-start`}
                        >
                          <Image
                            src={product?.product?.small_image?.url}
                            alt="Product Image"
                            className={`${styles.order_table_product_img}`}
                            title="Cannellio Cake Toppers - Product Image"
                            width={100}
                            height={100}
                          />
                          <div
                            className={`${styles.order_table_product_content}`}
                          >
                            <span
                              className={`${styles.order_table_product_name} black_text font_rg pb-sm-1 d-inline-block line-clamp line-clamp2`}
                            >
                              {product?.product_name}
                            </span>
                            <span
                              className={`${styles.order_table_product_name} black_text font_rg line-clamp line-clamp2`}
                            >
                              {product?.selected_options &&
                                product?.selected_options.map(
                                  (selected_option, index) => (
                                    <span
                                      key={index}
                                      className={`${styles.order_table_product_name} black_text font_rg line-clamp line-clamp2`}
                                    >
                                      <span>{selected_option?.label}</span>:{" "}
                                      <span>{selected_option?.value}</span>
                                    </span>
                                  )
                                )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2 col-6 order-sm-2 order-3">
                      <span
                        className={`${styles.order_table_bd} d-flex align-items-center h-100 gap-1 black_text font_rg text-uppercase`}
                      >
                        <svg
                          width="11"
                          height="12"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 11L1.76362 10.7379C2.14613 10.6062 2.4788 10.3538 2.7145 10.0162C2.95021 9.67867 3.077 9.27317 3.07692 8.85714V3.81571C3.07692 3.06894 3.36445 2.35275 3.87625 1.8247C4.38805 1.29665 5.0822 1 5.806 1H6.40485C7.53123 1 8.54338 1.70714 8.96154 2.78571M2.73077 9.92857H3.48123C4.12601 9.92851 4.76194 10.0833 5.33869 10.3807L5.37331 10.3986C5.95004 10.6961 6.58598 10.8509 7.23077 10.8509C7.87556 10.8509 8.5115 10.6961 9.08823 10.3986L10 9.92857M1.34615 6H6.88462"
                            stroke="black"
                          />
                        </svg>
                        {product?.product_sale_price?.value}
                      </span>
                    </div>
                    <div
                      className={`col-2 text-center order-sm-3 order-2 ${styles.order_qty}`}
                    >
                      <span
                        className={`${styles.order_table_bd} d-flex align-items-center justify-content-sm-center justify-content-end font_rg text-uppercase h-100`}
                      >
                        <span className="d-sm-none d-block">×</span>
                        {""}
                        {product?.quantity_ordered}
                      </span>
                    </div>
                    <div
                      className={`col-sm-3 col-6 text-sm-center text-end order-4 ${styles.order_status}`}
                    >
                      <span
                        className={`${styles.order_table_bd} d-flex align-items-center justify-content-sm-center justify-content-end h-100 black_text font_rg text-uppercase`}
                      >
                        {OrderItems?.status}
                      </span>
                    </div>
                  </div>
                ))}
              {/* <div className={`row g-lg-3 g-2 ${styles.order_table_body_col}`}>
                <div className="col-sm-5 col-10 order-1">
                  <div className={`${styles.order_table_bd}`}>
                    <div
                      className={`${styles.order_table_product} d-flex align-items-sm-center align-items-start`}
                    >
                      <Image
                        src={getImageUrl("products/product1.png")}
                        alt="Product Image"
                        className={`${styles.order_table_product_img}`}
                        title="Cannellio Cake Toppers - Product Image"
                        width={100}
                        height={100}
                      />
                      <div className={`${styles.order_table_product_content}`}>
                        <span
                          className={`${styles.order_table_product_name} black_text font_rg pb-sm-1 d-inline-block line-clamp line-clamp2`}
                        >
                          Unicorn birthday party personalized icing edible
                          costco cake topper r2-uz
                        </span>
                        <span
                          className={`${styles.order_table_product_name} black_text font_rg line-clamp line-clamp2`}
                        >
                          Image type: a4 rectangle cake (8 inch x 11 inch)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 col-6 order-sm-2 order-3">
                  <span
                    className={`${styles.order_table_bd} d-flex align-items-center h-100 gap-1 black_text font_rg text-uppercase`}
                  >
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L1.76362 10.7379C2.14613 10.6062 2.4788 10.3538 2.7145 10.0162C2.95021 9.67867 3.077 9.27317 3.07692 8.85714V3.81571C3.07692 3.06894 3.36445 2.35275 3.87625 1.8247C4.38805 1.29665 5.0822 1 5.806 1H6.40485C7.53123 1 8.54338 1.70714 8.96154 2.78571M2.73077 9.92857H3.48123C4.12601 9.92851 4.76194 10.0833 5.33869 10.3807L5.37331 10.3986C5.95004 10.6961 6.58598 10.8509 7.23077 10.8509C7.87556 10.8509 8.5115 10.6961 9.08823 10.3986L10 9.92857M1.34615 6H6.88462"
                        stroke="black"
                      />
                    </svg>
                    200
                  </span>
                </div>
                <div
                  className={`col-2 text-center order-sm-3 order-2 ${styles.order_qty}`}
                >
                  <span
                    className={`${styles.order_table_bd} d-flex align-items-center justify-content-sm-center justify-content-end font_rg text-uppercase h-100`}
                  >
                    <span className="d-sm-none d-block">×</span>
                    {""}1
                  </span>
                </div>
                <div
                  className={`col-sm-3 col-6 text-sm-center text-end order-4 ${styles.order_status}`}
                >
                  <span
                    className={`${styles.order_table_bd} d-flex align-items-center justify-content-sm-center justify-content-end h-100 black_text font_rg text-uppercase`}
                  >
                    PAYMENT REVIEW
                  </span>
                </div>
              </div>
              <div className={`row g-lg-3 g-2 ${styles.order_table_body_col}`}>
                <div className="col-sm-5 col-10 order-1">
                  <div className={`${styles.order_table_bd}`}>
                    <div
                      className={`${styles.order_table_product} d-flex align-items-sm-center align-items-start`}
                    >
                      <Image
                        src={getImageUrl("products/product1.png")}
                        alt="Product Image"
                        className={`${styles.order_table_product_img}`}
                        title="Cannellio Cake Toppers - Product Image"
                        width={100}
                        height={100}
                      />
                      <div className={`${styles.order_table_product_content}`}>
                        <span
                          className={`${styles.order_table_product_name} black_text font_rg pb-sm-1 d-inline-block line-clamp line-clamp2`}
                        >
                          Unicorn birthday party personalized icing edible
                          costco cake topper r2-uz
                        </span>
                        <span
                          className={`${styles.order_table_product_name} black_text font_rg line-clamp line-clamp2`}
                        >
                          Image type: a4 rectangle cake (8 inch x 11 inch)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 col-6 order-sm-2 order-3">
                  <span
                    className={`${styles.order_table_bd} d-flex align-items-center h-100 gap-1 black_text font_rg text-uppercase`}
                  >
                    <svg
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 11L1.76362 10.7379C2.14613 10.6062 2.4788 10.3538 2.7145 10.0162C2.95021 9.67867 3.077 9.27317 3.07692 8.85714V3.81571C3.07692 3.06894 3.36445 2.35275 3.87625 1.8247C4.38805 1.29665 5.0822 1 5.806 1H6.40485C7.53123 1 8.54338 1.70714 8.96154 2.78571M2.73077 9.92857H3.48123C4.12601 9.92851 4.76194 10.0833 5.33869 10.3807L5.37331 10.3986C5.95004 10.6961 6.58598 10.8509 7.23077 10.8509C7.87556 10.8509 8.5115 10.6961 9.08823 10.3986L10 9.92857M1.34615 6H6.88462"
                        stroke="black"
                      />
                    </svg>
                    200
                  </span>
                </div>
                <div
                  className={`col-2 text-center order-sm-3 order-2 ${styles.order_qty}`}
                >
                  <span
                    className={`${styles.order_table_bd} d-flex align-items-center justify-content-sm-center justify-content-end font_rg text-uppercase h-100`}
                  >
                    <span className="d-sm-none d-block">×</span>
                    {""}1
                  </span>
                </div>
                <div
                  className={`col-sm-3 col-6 text-sm-center text-end order-4 ${styles.order_status}`}
                >
                  <span
                    className={`${styles.order_table_bd} d-flex align-items-center justify-content-sm-center justify-content-end h-100 black_text font_rg text-uppercase`}
                  >
                    PAYMENT REVIEW
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* ORDER SUBTOTAL */}
        <div className="mt-3 d-flex flex-column gap-4 justify-content-end">
          <div className="col-md-5 col-12 ms-auto d-flex flex-column gap-md-3 gap-2">
            <div className="d-flex align-items-center justify-content-between">
              <span className="font-16 black_text font_rg">Subtotal</span>
              <span
                className={` d-flex align-items-center font-16 gap-1 black_text font_rg text-uppercase`}
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L1.76362 10.7379C2.14613 10.6062 2.4788 10.3538 2.7145 10.0162C2.95021 9.67867 3.077 9.27317 3.07692 8.85714V3.81571C3.07692 3.06894 3.36445 2.35275 3.87625 1.8247C4.38805 1.29665 5.0822 1 5.806 1H6.40485C7.53123 1 8.54338 1.70714 8.96154 2.78571M2.73077 9.92857H3.48123C4.12601 9.92851 4.76194 10.0833 5.33869 10.3807L5.37331 10.3986C5.95004 10.6961 6.58598 10.8509 7.23077 10.8509C7.87556 10.8509 8.5115 10.6961 9.08823 10.3986L10 9.92857M1.34615 6H6.88462"
                    stroke="black"
                    strokeWidth={1.3}
                  />
                </svg>
                {OrderItems?.total?.subtotal?.value}
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span className="font-16 black_text font_rg">
                Shipping & Handling
              </span>
              <span
                className={` d-flex align-items-center font-16 gap-1 black_text font_rg text-uppercase`}
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L1.76362 10.7379C2.14613 10.6062 2.4788 10.3538 2.7145 10.0162C2.95021 9.67867 3.077 9.27317 3.07692 8.85714V3.81571C3.07692 3.06894 3.36445 2.35275 3.87625 1.8247C4.38805 1.29665 5.0822 1 5.806 1H6.40485C7.53123 1 8.54338 1.70714 8.96154 2.78571M2.73077 9.92857H3.48123C4.12601 9.92851 4.76194 10.0833 5.33869 10.3807L5.37331 10.3986C5.95004 10.6961 6.58598 10.8509 7.23077 10.8509C7.87556 10.8509 8.5115 10.6961 9.08823 10.3986L10 9.92857M1.34615 6H6.88462"
                    stroke="black"
                    strokeWidth={1.3}
                  />
                </svg>
                {OrderItems?.total?.shipping_handling?.total_amount?.value}
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span className="font-16 black_text font_rg">Tax</span>
              <span
                className={` d-flex align-items-center font-16 gap-1 black_text font_rg text-uppercase`}
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L1.76362 10.7379C2.14613 10.6062 2.4788 10.3538 2.7145 10.0162C2.95021 9.67867 3.077 9.27317 3.07692 8.85714V3.81571C3.07692 3.06894 3.36445 2.35275 3.87625 1.8247C4.38805 1.29665 5.0822 1 5.806 1H6.40485C7.53123 1 8.54338 1.70714 8.96154 2.78571M2.73077 9.92857H3.48123C4.12601 9.92851 4.76194 10.0833 5.33869 10.3807L5.37331 10.3986C5.95004 10.6961 6.58598 10.8509 7.23077 10.8509C7.87556 10.8509 8.5115 10.6961 9.08823 10.3986L10 9.92857M1.34615 6H6.88462"
                    stroke="black"
                    strokeWidth={1.3}
                  />
                </svg>
                {OrderItems?.total?.total_tax?.value}
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span className="font-16 black_text font_rg">Discount</span>
              <span
                className={` d-flex align-items-center font-16 gap-1 black_text font_rg text-uppercase`}
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L1.76362 10.7379C2.14613 10.6062 2.4788 10.3538 2.7145 10.0162C2.95021 9.67867 3.077 9.27317 3.07692 8.85714V3.81571C3.07692 3.06894 3.36445 2.35275 3.87625 1.8247C4.38805 1.29665 5.0822 1 5.806 1H6.40485C7.53123 1 8.54338 1.70714 8.96154 2.78571M2.73077 9.92857H3.48123C4.12601 9.92851 4.76194 10.0833 5.33869 10.3807L5.37331 10.3986C5.95004 10.6961 6.58598 10.8509 7.23077 10.8509C7.87556 10.8509 8.5115 10.6961 9.08823 10.3986L10 9.92857M1.34615 6H6.88462"
                    stroke="black"
                    strokeWidth={1.3}
                  />
                </svg>
                {OrderItems?.total?.discounts[0]
                  ? OrderItems?.total?.discounts[0]?.amount?.value
                  : "0.00"}
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span className="font-16 black_text font_md">Grand Total</span>
              <span
                className={` d-flex align-items-center font-16 gap-1 black_text font_md text-uppercase`}
              >
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L1.76362 10.7379C2.14613 10.6062 2.4788 10.3538 2.7145 10.0162C2.95021 9.67867 3.077 9.27317 3.07692 8.85714V3.81571C3.07692 3.06894 3.36445 2.35275 3.87625 1.8247C4.38805 1.29665 5.0822 1 5.806 1H6.40485C7.53123 1 8.54338 1.70714 8.96154 2.78571M2.73077 9.92857H3.48123C4.12601 9.92851 4.76194 10.0833 5.33869 10.3807L5.37331 10.3986C5.95004 10.6961 6.58598 10.8509 7.23077 10.8509C7.87556 10.8509 8.5115 10.6961 9.08823 10.3986L10 9.92857M1.34615 6H6.88462"
                    stroke="black"
                    strokeWidth={1.3}
                  />
                </svg>
                {OrderItems?.total?.grand_total?.value}
              </span>
            </div>
          </div>
          <div className="v_divider"></div>
          <div className="d-flex gap-3 justify-content-end">
            {OrderItems?.status === "Pending" ? (
              <button className="btn btn-black-outline">CANCEL</button>
            ) : (
              ""
            )}
            <button
              onClick={handleContactUs}
              className="btn btn-primary rounded-pill"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
