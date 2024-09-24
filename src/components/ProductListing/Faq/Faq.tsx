"use client";
import Image from "next/image";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

import styles from "./Faq.module.scss";

import Link from "next/link";

export const Faq = () => {
  return (
    <section className={`${styles.faq_section}`}>
      <div className={`${styles.faq_main} common-padding`}>
        <div className="container">
          <div className={`${styles.faq_wrapper}`}>
            <div className="main-title d-flex align-items-center justify-content-between">
              <h2 className="h2 black_text jua-font">
                Frequently Asked Questions
              </h2>
              <Link
                href=""
                className="btn btn-black-outline d-flex align-items-center w-auto gap-2 text-nowrap"
              >
                View All{" "}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6512 1.84865C19.6512 1.29637 19.2035 0.848651 18.6512 0.848651L9.65123 0.848652C9.09894 0.848651 8.65123 1.29637 8.65123 1.84865C8.65123 2.40094 9.09894 2.84865 9.65123 2.84865L17.6512 2.84865L17.6512 10.8487C17.6512 11.4009 18.0989 11.8487 18.6512 11.8487C19.2035 11.8487 19.6512 11.4009 19.6512 10.8487L19.6512 1.84865ZM2.38777 19.5263L19.3583 2.55576L17.9441 1.14154L0.973557 18.1121L2.38777 19.5263Z"
                    fill="black"
                  />
                </svg>
              </Link>
            </div>
            <Accordion className="faq_accordian" defaultActiveKey="0" flush>
              <Accordion.Item className="faq_accordian_item" eventKey="0">
                <Accordion.Header>
                  <span className="faq_accordian_number h4 font_bl">01</span>
                  What materials are the cake toppers made from?
                </Accordion.Header>
                <Accordion.Body className="faq_accordian-body h5 font_rg black_shade5_text">
                  Our cake toppers are made from high-quality materials such as
                  acrylic, wood, and food-safe plastic.Our cake toppers are made
                  from high-quality materials such as acrylic, wood, and
                  food-safe plastic.
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
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Faq;
