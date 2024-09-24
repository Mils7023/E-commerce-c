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
import { getImageUrl } from "@/utils/imageHelper";

const productDetails = [
  {
    productImage: getImageUrl("products/product1.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product2.png"),
    name: "Gamming BIRTHDAY PARTY PERSONALISED ICING EDIBLE COSTCO CAKE TOPPER",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product3.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product4.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product5.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product6.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product7.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product8.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product5.png"),
    name: "Unicorn birthday party personalised icing edible costco cake topper r2-uz",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product2.png"),
    name: "Gamming BIRTHDAY PARTY PERSONALISED ICING EDIBLE COSTCO CAKE TOPPER",
    productPrice: "200",
  },
  {
    productImage: getImageUrl("products/product3.png"),
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
  const handleCheck = () => {};
  const handleChange = () => {};

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
    <section className={`${styles.listing_section} common-padding-b pt-5 mt-4`}>
      <div className={`${styles.listing_main}`}>
        <div className="container">
          <div className={`${styles.listing_wrapper} `}>
            <Tab.Container defaultActiveKey="nav1">
              <div
                className={`${styles.filter_title} d-flex flex-md-column-reverse flex-column gap-md-2 gap-3 align-items-md-center align-items-start justify-content-between position-relative`}
              >
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
                <div className="filter_category_a">
                  <Nav
                    variant="pills"
                    className={`${styles.filter_category_a_nav}`}
                  >
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav1"
                      >
                        All
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav2"
                      >
                        Christmas
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav3"
                      >
                        Halloween
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav4"
                      >
                        Easter
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav5"
                      >
                        Valentine’s Day
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav6"
                      >
                        Mother’s Day
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav7"
                      >
                        Fathers day
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav8"
                      >
                        St Patrick’s Day
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav9"
                      >
                        Graduation
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav10"
                      >
                        Sports Events
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="filter_category_a_item">
                      <Nav.Link
                        className="filter_category_a_link text-capitalize"
                        eventKey="nav11"
                      >
                        Other
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>
              <div className={`row ${styles.pf_row} g-lg-4 g-3`}>
                <div
                  className={`col-xl-3 col-lg-4 col-3 d-md-block d-none ${styles.filter_sidebar} `}
                >
                  <span
                    className={`${styles.filter_btn} d-md-flex d-none gap-2 align-items-center mb-5`}
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
                  <div className={`${styles.filter_box}`}>
                    <div className={`${styles.filter_col}`}>
                      <div
                        className={`${styles.filter_title} d-flex flex-lg-row flex-column-reverse justify-content-lg-between align-items-start gap-lg-0 gap-3`}
                      >
                        <span className="h5 black_text font_smb">Shapes</span>
                        <button className={`${styles.clear_filter}`}>
                          Clear all filters
                        </button>
                      </div>
                      <div className="px-xxl-3 px-lg-2">
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
                      </div>
                    </div>
                    <div className={`${styles.filter_col}`}>
                      <div
                        className={`${styles.filter_title} d-flex justify-content-between`}
                      >
                        <span className="h5 black_text font_smb">
                          Materials
                        </span>
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
                  {/* THIS TEXT DISPLAY WHEN NO RESULT FOUND */}
                  {/* <div
                    className={`${styles.emptyProductsWrapper} text-center pt-lg-5 pt-4 mt-lg-4`}
                  >
                    <Image
                      src={EmptyList}
                      alt=""
                      title=""
                      width={300}
                      height={260}
                      className={`${styles.emptyProductsImage}`}
                    />
                    <div className="pt-md-5 pt-4 mt-lg-4 pb-lg-5 pb-4">
                      <span className="h4 black_text font_md ">
                        Oops! No products available in this category right now.
                      </span>
                    </div>
                    <button className="btn btn-gradient rounded-pill">
                      SHOP NOW
                    </button>
                  </div> */}

                  <Tab.Content>
                    <Tab.Pane eventKey="nav1">
                      <div
                        className={`${styles.featured_products_row} p_cards_row row g-xxl-4 g-3`}
                      >
                        {productDetails.map((product, index) => (
                          <div
                            className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                            key={index}
                          >
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="nav2">
                      <div
                        className={`${styles.featured_products_row} p_cards_row row g-xxl-4 g-3`}
                      >
                        {productDetails.map((product, index) => (
                          <div
                            className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                            key={index}
                          >
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="nav3">
                      <div
                        className={`${styles.featured_products_row} p_cards_row row g-xxl-4 g-3`}
                      >
                        {productDetails.map((product, index) => (
                          <div
                            className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                            key={index}
                          >
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="nav4">
                      <div
                        className={`${styles.featured_products_row} p_cards_row row g-xxl-4 g-3`}
                      >
                        {productDetails.map((product, index) => (
                          <div
                            className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                            key={index}
                          >
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="nav5">
                      <div
                        className={`${styles.featured_products_row} p_cards_row row g-xxl-4 g-3`}
                      >
                        {productDetails.map((product, index) => (
                          <div
                            className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                            key={index}
                          >
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>

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
            </Tab.Container>
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
              <span className="h5 black_text font_smb">Shapes</span>
              <button className={`${styles.clear_filter} btn-transparent`}>
                Clear all filters
              </button>
            </div>
            <div className="px-xxl-3 px-lg-2">
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
          <button className="btn w-100">Apply Filter</button>
        </div>
      </div>
    </section>
  );
};

// export default Banner;
