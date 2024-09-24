"use client";
import Image from "next/image";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styles from "./Faq.module.scss";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const Faq = () => {
  return (
    <section className={`${styles.faq_section}`}>
      <div className={`${styles.faq_main} common-padding`}>
        <div className="container">
          <div className={`${styles.faq_wrapper}`}>
            <div className="main-title d-block d-lg-flex align-items-center justify-content-between">
              <h2 className="h2 black_text jua-font">
                What Can We Help You Find?
              </h2>
              <div
                className={`${styles.faq_search} pt-2 pt-sm-3 pt-md-4 pt-lg-0`}
              >
                <div
                  className={`${styles.faq_search_wrapper} position-relative`}
                >
                  <input
                    type="text"
                    placeholder="Search Your Question Here..."
                    className="form-control"
                  ></input>
                  <button
                    className={`${styles.faq_search_btn} btn  position-absolute top-0 bottom-0 end-0`}
                  >
                    <Image
                      alt="Search Icon"
                      width={24}
                      height={24}
                      src={getImageUrl('faq-page/search-icon-black.png')}
                      title="Cannellio Cake Toppers - Search Icon"
                    />
                  </button>
                </div>
              </div>
            </div>
            <p className={`${styles.search_result_title} h4 font_smb`}>
              Search results found for{" "}
              <span className={`${styles.search_result} primary_text`}>
                “How to order”.
              </span>
            </p>
            <Accordion className="faq_accordian" defaultActiveKey="0" flush>
              <Accordion.Item className="faq_accordian_item" eventKey="0">
                <Accordion.Header>
                  <span className="faq_accordian_number h4 font_bl">01</span>
                  What materials are the cake toppers made from?
                </Accordion.Header>
                <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                  Our cake toppers are made from high-quality materials such as
                  acrylic, wood, and food-safe plastic.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq_accordian_item" eventKey="1">
                <Accordion.Header>
                  <span className="faq_accordian_number h4 font_bl">02</span>
                  Are your cake toppers food-safe?
                </Accordion.Header>
                <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                  Our cake toppers are made from high-quality materials such as
                  acrylic, wood, and food-safe plastic.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq_accordian_item" eventKey="2">
                <Accordion.Header>
                  <span className="faq_accordian_number h4 font_bl">03</span>
                  How do I request a return or exchange?
                </Accordion.Header>
                <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                  Our cake toppers are made from high-quality materials such as
                  acrylic, wood, and food-safe plastic.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq_accordian_item" eventKey="3">
                <Accordion.Header>
                  <span className="faq_accordian_number h4 font_bl">04</span>
                  What are your shipping options?
                </Accordion.Header>
                <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                  Our cake toppers are made from high-quality materials such as
                  acrylic, wood, and food-safe plastic.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq_accordian_item" eventKey="4">
                <Accordion.Header>
                  <span className="faq_accordian_number h4 font_bl">05</span>
                  How long does it take to process a custom order?
                </Accordion.Header>
                <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                  Our cake toppers are made from high-quality materials such as
                  acrylic, wood, and food-safe plastic.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq_accordian_item" eventKey="5">
                <Accordion.Header>
                  <span className="faq_accordian_number h4 font_bl">06</span>
                  How long does it take to process a custom order?
                </Accordion.Header>
                <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                  Our cake toppers are made from high-quality materials such as
                  acrylic, wood, and food-safe plastic.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq_accordian_item" eventKey="6">
                <Accordion.Header>
                  <span className="faq_accordian_number h4 font_bl">07</span>
                  How long does it take to process a custom order?
                </Accordion.Header>
                <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                  Our cake toppers are made from high-quality materials such as
                  acrylic, wood, and food-safe plastic.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="faq_accordian_item" eventKey="7">
                <Accordion.Header>
                  <span className="faq_accordian_number h4 font_bl">08</span>
                  How long does it take to process a custom order?
                </Accordion.Header>
                <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                  Our cake toppers are made from high-quality materials such as
                  acrylic, wood, and food-safe plastic.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Faq;
