"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Listing.module.scss";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { ProductCard } from "@/components/common";
import { CategoryRadio, Checkbox, RadioGroup } from "@/components/core";
import { CancelIcon } from "@/assets/icons";
import { CustomSlider } from "../../core";
import { getImageUrl } from "@/utils/imageHelper";

const productDetails = [
  {
    productImage: getImageUrl("products/product4.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product4.png"),
    name: "Gamming BIRTHDAY PARTY PERSONALISED ICING EDIBLE COSTCO CAKE TOPPER",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product4.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product4.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product4.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product4.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
];

export const Listing = () => {
  const [priceRange, setPriceRange] = useState<number[]>([100, 500]);
  const handleCheck = () => {};
  const handleChange = () => {};

  const handleRangeChange = () => {
    // console.log("Selected Range:", range, 111);
  };

  const option = [
    {
      label: "Price LOW - HIGH",
    },
    {
      label: "Price HIGH - LOW",
    },
    {
      label: "Recent Added",
    },
    {
      label: "Top Selling",
    },
  ];
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <section className={`${styles.listing_section} common-padding-b pt-4 mt-3`}>
      <div className={`${styles.listing_main}`}>
        <div className="container">
          <div className={`${styles.listing_wrapper} `}>
            <div
              className={`${styles.filter_title} d-flex flex-md-row flex-column gap-md-5 gap-xxl-2 gap-3 align-items-xxl-center align-items-start justify-content-between position-relative`}
            >
              <span
                className={`${styles.filter_btn} d-md-flex d-none gap-2 align-items-center`}
              >
                Filter{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 17.5H15"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 17.5H2"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6.5H19"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 6.5H2"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 14.5H13C14.1 14.5 15 15 15 16.5V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V16.5C5 15 5.9 14.5 7 14.5Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 3.5H17C18.1 3.5 19 4 19 5.5V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V5.5C9 4 9.9 3.5 11 3.5Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span
                onClick={toggleClass}
                className={`${styles.filter_btn} d-md-none d-flex gap-2 align-items-center`}
              >
                Filter{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 17.5H15"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 17.5H2"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6.5H19"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 6.5H2"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 14.5H13C14.1 14.5 15 15 15 16.5V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V16.5C5 15 5.9 14.5 7 14.5Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 3.5H17C18.1 3.5 19 4 19 5.5V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V5.5C9 4 9.9 3.5 11 3.5Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="filter_category_by_shape">
                <div className="filter_category_by_shape_container d-flex justify-content-xxl-end">
                  <div className="filter_category_by_shape_item">
                    <Link
                      href=""
                      className={`${styles.filter_product_shape_btn} filter_category_by_shape_link btn btn-gradient h6 font_smb text-capitalize`}
                    >
                      Round
                    </Link>
                  </div>
                  <div className="filter_category_by_shape_item">
                    <Link
                      href=""
                      className={`${styles.filter_product_shape_btn} btn-black-outline filter_category_by_shape_link btn h6 font_rg text-capitalize`}
                    >
                      Rectangle
                    </Link>
                  </div>
                  <div className="filter_category_by_shape_item">
                    <Link
                      href=""
                      className={`${styles.filter_product_shape_btn} btn-black-outline filter_category_by_shape_link btn h6 font_rg text-capitalize`}
                    >
                      square
                    </Link>
                  </div>
                  <div className="filter_category_by_shape_item">
                    <Link
                      href=""
                      className={`${styles.filter_product_shape_btn} btn-black-outline filter_category_by_shape_link btn h6 font_rg text-capitalize`}
                    >
                      cup cake
                    </Link>
                  </div>
                  <div className="filter_category_by_shape_item">
                    <Link
                      href=""
                      className={`${styles.filter_product_shape_btn} btn-black-outline filter_category_by_shape_link btn h6 font_rg text-capitalize`}
                    >
                      costco cake
                    </Link>
                  </div>
                  <div className="filter_category_by_shape_item">
                    <Link
                      href=""
                      className={`${styles.filter_product_shape_btn} btn-black-outline filter_category_by_shape_link btn h6 font_rg text-capitalize`}
                    >
                      wrap cake
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`row ${styles.pf_row} g-lg-4 g-3`}>
              <div
                className={`col-xl-3 col-lg-4 col-3 d-md-block d-none ${styles.filter_sidebar} `}
              >
                <div className={`${styles.filter_box}`}>
                  <div className={`${styles.filter_col} text-end`}>
                    <button className={`${styles.clear_filter}`}>
                      Clear all filters
                    </button>
                  </div>
                  <div className={`${styles.filter_col}`}>
                    <div className={`${styles.filter_title} d-flex gap-4`}>
                      <span className="h5 black_text font_smb">Price</span>
                      <span className="h6 black_text font_rg">
                        £{priceRange[0]} - £{priceRange[1]}
                      </span>
                    </div>
                    <div className="px-xxl-3 px-lg-2">
                      <CustomSlider
                        onRangeChange={handleRangeChange}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                      />
                    </div>
                  </div>
                  <div className={`${styles.filter_col}`}>
                    <div
                      className={`${styles.filter_title} d-flex justify-content-between`}
                    >
                      <span className="h5 black_text font_smb">Materials</span>
                    </div>
                    <div className="px-xxl-3 px-lg-2">
                      <Checkbox
                        key={1}
                        id="Icing"
                        onChange={() => handleCheck}
                        label="Icing"
                        name="check"
                      />
                      <Checkbox
                        key={1}
                        id="RicePaper"
                        onChange={() => handleCheck}
                        label="Rice Paper"
                        name="check"
                      />
                    </div>
                  </div>
                  <hr className={`${styles.filter_col}`} />
                  <div className={`${styles.filter_col}`}>
                    <div
                      className={`${styles.filter_title} d-flex justify-content-between`}
                    >
                      <span className="h5 black_text font_smb">Sort By</span>
                    </div>
                    <div className="px-xxl-3 px-lg-2">
                      {option.map((e, index) => (
                        <CategoryRadio
                          key={index}
                          onChange={() => handleChange}
                          title={e.label}
                          name="radio"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`col-xl-9 col-lg-8 col-md-9 col-12 ${styles.products_col}`}
              >
                <div
                  className={`${styles.featured_products_row} p_cards_row row g-xxl-4 g-3`}
                >
                  {productDetails?.map((product, index) => (
                    <div
                      className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                      key={index}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>

                <div
                  className={`${styles.product_pagination} mt-lg-5 mt-3 pt-xxl-5 pt-4 d-flex justify-content-center`}
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
        </div>
      </div>

      {/* MOBILE VIEW FILTER */}
      <div
        className={
          isActive
            ? `${styles.showFilter} ${styles.filterDrawer} d-md-none d-block`
            : `${styles.hideFilter} ${styles.filterDrawer} d-md-none d-block`
        }
      >
        <div className={`${styles.filter_box} position-relative`}>
          <button
            className={`${styles.closeButton} btn-transparent`}
            onClick={toggleClass}
          >
            <CancelIcon className="black_text" />
          </button>
          <div className={`${styles.filter_col}`}>
            <div
              className={`${styles.filter_title} d-flex flex-lg-row flex-column-reverse justify-content-lg-between align-items-start gap-lg-0 gap-3`}
            >
              {/* <span className="h5 black_text font_smb">Shapes</span> */}
              <button className={`${styles.clear_filter} btn-transparent`}>
                Clear all filters
              </button>
            </div>
            {/* <div className="px-xxl-3 px-lg-2">
              <Checkbox
                key={1}
                id="key1"
                onChange={() => handleCheck}
                label="Rectangle"
                name="check"
                //
              />
              <Checkbox
                key={1}
                id="key2"
                onChange={() => handleCheck}
                label="Round"
                name="check"
              />
              <Checkbox
                key={1}
                id="key3"
                onChange={() => handleCheck}
                label="Square"
                name="check"
              />
              <Checkbox
                key={1}
                id="key4"
                onChange={() => handleCheck}
                label="Costco"
                name="check"
              />
              <Checkbox
                key={1}
                id="key5"
                onChange={() => handleCheck}
                label="Wrap Cake"
                name="check"
              />
              <Checkbox
                key={1}
                id="key6"
                onChange={() => handleCheck}
                label="Cupcakes"
                name="check"
              />
            </div> */}
          </div>
          <div className={`${styles.filter_col}`}>
            <div
              className={`${styles.filter_title} d-flex justify-content-between`}
            >
              <span className="h5 black_text font_smb">Materials</span>
            </div>
            <div className="px-xxl-3 px-lg-2">
              <Checkbox
                key={1}
                id="Icing"
                onChange={() => handleCheck}
                label="Icing"
                name="check"
              />
              <Checkbox
                key={1}
                id="RicePaper"
                onChange={() => handleCheck}
                label="Rice Paper"
                name="check"
              />
            </div>
          </div>
          <hr className={`${styles.filter_col}`} />
          <div className={`${styles.filter_col}`}>
            <div
              className={`${styles.filter_title} d-flex justify-content-between`}
            >
              <span className="h5 black_text font_smb">Sort By</span>
            </div>
            <div className="px-xxl-3 px-lg-2">
              {option.map((e, index) => (
                <CategoryRadio
                  key={index}
                  onChange={() => handleChange}
                  title={e.label}
                  name="radio"
                />
              ))}
            </div>
          </div>
          <button className="btn w-100">Apply Filter</button>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
