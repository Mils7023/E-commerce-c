"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import styles from "./OrderHistory.module.scss";
import Tab from "react-bootstrap/Tab";
import { Input, Select, TextArea } from "@/components/core";
import { Form, Pagination } from "@/components/common";
import { reviewFormSchema } from "@/utils";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { CancelIcon } from "@/assets/icons";
import Link from "next/link";
import { useCustomerDetails } from "@/hooks";
import dynamic from "next/dynamic";
import { SpinnerProps } from "@/components/common/Spinner";
import { useAddressDetails } from "@/hooks";
import { CustomerAddress, CustomerCountry, OrderItem } from "@/types";
import { OrderHistoryDetail } from "../OrderHistoryDetail";
import { getImageUrl } from "@/utils/imageHelper";
import { StarIcon } from "@/assets/icons/StarIcon";
import { useOrder } from "@/hooks/useOrder";

// Function to format date
const formatOrderDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short", // e.g., "Sep"
    day: "2-digit", // e.g., "11"
    year: "numeric", // e.g., "2024"
  });
};

const Spinner = dynamic<SpinnerProps>(
  () => import("@/components/common/Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);

export interface ReviewFormValue {
  productInfoData: any;
  reviewsData: any;
}

export const OrderHistory = () => {
  const handleTabChange = () => {};
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [orderSelectedData, setOrderSelectedData] = useState<OrderItem>();
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [selectedTab, setSelectedTab] = useState([]);
  const { ordersData, getOrdersLoading, refetchOrders } = useOrder(
    currentPage,
    5,
    {
      number: { match: "" },
    }
  );

  const [OrderItems, setOrderItems] = useState(
    ordersData?.customer?.orders?.items
  );

  const handlePagination = (page: number) => {
    if (page) {
      setCurrentPage(page);
    }
  };

  const emptyOrders = () => {
    {
      /* EMPTY ADDRESS BOOK DESIGN HERE */
    }
    return (
      <div className={`${styles.emptyOrderWrapper} text-center py-4`}>
        <Image
          src={getImageUrl("my-profile-page/empty-order.png")}
          alt=""
          title=""
          width={230}
          height={220}
          className={`${styles.emptyOrderImage}`}
        />
        <div className="pt-4 pb-xl-4 pb-3">
          <span className="h5 black_text font_md">
            Looks like you haven&#39;t placed any orders yet.
          </span>
        </div>
        <Link
          href="/cake-toppers/general-toppers"
          className="btn btn-primary rounded-pill"
        >
          SHOP NOW
        </Link>
      </div>
    );
  };

  const handleShowOrderDetail = (order?: OrderItem) => {
    order ? setOrderSelectedData(order) : "";
    setShowOrderDetail(!showOrderDetail);
  };

  useEffect(() => {
    setOrderItems(ordersData?.customer?.orders?.items);
    console.log("ordersData ", ordersData);
  }, [ordersData]);

  const tabsData = [
    { eventKey: "all_order", title: "All", apiCallKey: "all" },
    { eventKey: "order_pending", title: "Pending", apiCallKey: "pending" },
    {
      eventKey: "order_processing",
      title: "Processing",
      apiCallKey: "processing",
    },
    { eventKey: "order_shipping", title: "Shipping", apiCallKey: "shipping" },
    {
      eventKey: "order_delivered",
      title: "Delivered",
      apiCallKey: "delivered",
    },
    {
      eventKey: "order_reviews",
      title: "Reviews",
      apiCallKey: "reviews",
    },
  ];

  return !showOrderDetail ? (
    <Tab.Pane eventKey="orderHistory">
      {/* ORDER HHISTORY DETAILS PAGE IT WILL DISPLAY WHEN CLICK ON DETAILS */}
      {/* <OrderHistoryDetail /> */}
      <div className={`${styles.profile_title} common-profile-shadow`}>
        <p className="h5 font_smb">Orders History</p>
      </div>
      <div className={`${styles.profile_body} common-profile-shadow mt-3`}>
        {getOrdersLoading && (
          <div className="d-flex justify-content-center">
            <Spinner size="sm" />
          </div>
        )}
        {!getOrdersLoading && (
          <Tabs
            defaultActiveKey="all_order"
            id="order_history_info_navs"
            className="order_history_info_navs"
          >
            {tabsData.map((tab) => (
              <Tab
                key={tab.eventKey}
                eventKey={tab.eventKey}
                title={tab.title}
                className="order_history_info_nav"
              >
                {/* Here you can place common HTML or render tab-specific content */}
                <div className={`${styles.order_table} mt-4`}>
                  <div
                    className={`d-sm-block d-none ${styles.order_table_header}`}
                  >
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
                      <div className="col-1 text-center">
                        <span
                          className={`${styles.order_table_hd} black_text font_smb text-uppercase`}
                        >
                          QTY
                        </span>
                      </div>
                      <div className="col-2 text-center">
                        <span
                          className={`${styles.order_table_hd} black_text font_smb text-uppercase`}
                        >
                          STATUS
                        </span>
                      </div>
                      <div className="col-2 text-center">
                        <span
                          className={`${styles.order_table_hd} black_text font_smb text-uppercase`}
                        >
                          OPERATION
                        </span>
                      </div>
                    </div>
                  </div>
                  {OrderItems &&
                    OrderItems?.map((order) =>
                      tab.title === "All" || order?.status === tab.title ? (
                        <div
                          key={order?.id}
                          className={styles.order_table_body}
                        >
                          <div className={`${styles.order_table_body_title}`}>
                            <div className="row">
                              <div className="col-md-10 col-9 d-flex gap-2 gap-xl-3 align-items-center">
                                <span
                                  className={`${styles.order_table_bd} black_text font_md`}
                                >
                                  ORDER : {order?.number}
                                </span>
                                <span
                                  className={`${styles.order_table_bd} black_text font_md`}
                                >
                                  {formatOrderDate(order?.order_date)}
                                </span>
                              </div>
                              <div className="col-md-2 col-3 text-md-center text-end">
                                <Link
                                  href=""
                                  className={`${styles.order_table_main_link} black_text d-sm-block d-none font_smb text-uppercase text-decoration-underline`}
                                >
                                  ORDER DETAILS
                                </Link>
                                <Link
                                  href=""
                                  className={`${styles.order_table_main_link} black_text d-sm-none d-block font_smb text-uppercase text-decoration-underline`}
                                >
                                  DETAILS
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div
                            className={` ${styles.order_table_body_row} d-flex flex-column gap-sm-0 gap-3 py-sm-0 py-2`}
                          >
                            {order &&
                              order?.items.map((product, index) => (
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
                                          src={
                                            product?.product?.small_image?.url
                                          }
                                          alt={
                                            product?.product?.small_image?.label
                                          }
                                          className={`${styles.order_table_product_img} h-100`}
                                          width={0}
                                          height={0}
                                          title={
                                            product?.product?.small_image?.label
                                          }
                                        />
                                        <div
                                          className={`${styles.order_table_product_content}`}
                                        >
                                          <span
                                            className={`${styles.order_table_product_name} black_text font_rg pb-sm-1 d-inline-block line-clamp line-clamp2`}
                                          >
                                            {product?.product_name}
                                          </span>

                                          {product?.selected_options &&
                                            product?.selected_options.map(
                                              (selected_option, index) => (
                                                <span
                                                  key={index}
                                                  className={`${styles.order_table_product_name} black_text font_rg line-clamp line-clamp2`}
                                                >
                                                  <span>
                                                    {selected_option?.label}
                                                  </span>
                                                  :{" "}
                                                  <span>
                                                    {selected_option?.value}
                                                  </span>
                                                </span>
                                              )
                                            )}
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
                                  <div className="col-sm-1 col-2 text-center order-sm-3 order-2">
                                    <span
                                      className={`${styles.order_table_bd} d-flex align-items-center justify-content-sm-center justify-content-end font_rg text-uppercase h-100`}
                                    >
                                      <span className="d-sm-none d-block">
                                        ×
                                      </span>
                                      {""} {product?.quantity_ordered}
                                    </span>
                                  </div>
                                  <div
                                    className={`col-sm-2 col-6 text-sm-center text-end order-4 ${styles.order_status}`}
                                  >
                                    <span
                                      className={`${styles.order_table_bd} d-flex align-items-center justify-content-sm-center justify-content-end h-100 black_text font_rg text-uppercase`}
                                    >
                                      {order?.status}
                                    </span>
                                  </div>
                                  {index === 0 && (
                                    <div className="col-sm-2 col-12 text-center order-5">
                                      <div
                                        className={`${styles.order_table_bd} d-flex flex-sm-column flex-row gap-1 align-items-center justify-content-sm-center justify-content-start h-100`}
                                      >
                                        {order?.status === "Delivered" && (
                                          <>
                                            <button
                                              className={`${styles.order_table_btn} font-12 font_md btn btn-black-outline rounded-pill`}
                                            >
                                              REORDER
                                            </button>
                                            <button
                                              className={`${styles.order_table_btn} font-12 font_md btn btn-black-outline rounded-pill`}
                                            >
                                              REVIEW
                                            </button>
                                          </>
                                        )}
                                        <button
                                          onClick={() =>
                                            handleShowOrderDetail(order)
                                          }
                                          className={`${styles.order_table_btn} font-12 font_md btn btn-gradient rounded-pill`}
                                        >
                                          VIEW
                                        </button>
                                        {order?.status === "Pending" && (
                                          <button
                                            className={`${styles.order_table_btn} font-12 font_md btn btn-black-outline rounded-pill`}
                                          >
                                            CANCEL
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      ) : null
                    )}
                  <div
                    className={`${styles.product_pagination} mt-5 pt-xxl-5 pt-4 d-flex justify-content-center`}
                  >
                    <Pagination
                      currentPage={currentPage}
                      perPage={
                        ordersData
                          ? ordersData?.customer?.orders?.page_info?.page_size
                          : 5
                      }
                      totalPage={
                        ordersData
                          ? ordersData?.customer?.orders?.page_info?.total_pages
                          : 0
                      }
                      handlePagination={handlePagination}
                    />
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        )}
      </div>
    </Tab.Pane>
  ) : (
    <OrderHistoryDetail
      handleShowOrderDetail={handleShowOrderDetail}
      OrderItems={orderSelectedData} // Passing OrderItems state
    />
  );
};
