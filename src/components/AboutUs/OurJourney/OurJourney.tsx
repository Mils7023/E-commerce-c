"use client";
import Image from "next/image";
import React from "react";

import styles from "./OurJourney.module.scss";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const OurJourney = () => {
  return (
    <section className={`${styles.our_journey_section} `}>
      <div className={`${styles.our_journey_main}`}>
        <div className="container">
          <div className={`${styles.our_journey_wrapper}`}>
            <div className="main-title d-flex flex-column align-items-center justify-content-between">
              <h2 className="h2 black_text jua-font text-capitalize tex">
                our journey
              </h2>
              <p className="h6 black_shade5_text text-center pt-3 pt-sm-4 mt-lg-1 mt-xxl-3">
                Food for us comes from our relatives, whether they have wings or
                fins or <br /> roots. considerfood. Food has a culture. It has a
                history.
              </p>
            </div>
            <Tab.Container defaultActiveKey="1994">
              <div className="our_journey_category_a">
                <Nav
                  variant="pills"
                  className={`${styles.our_journey_category_a_nav} justify-content-md-center`}
                >
                  <Nav.Item className="our_journey_category_a_item">
                    <Nav.Link
                      className="our_journey_category_a_link text-capitalize"
                      eventKey="1994"
                    >
                      1994
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="our_journey_category_a_item">
                    <Nav.Link
                      className="our_journey_category_a_link text-capitalize"
                      eventKey="2004"
                    >
                      2004
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="our_journey_category_a_item">
                    <Nav.Link
                      className="our_journey_category_a_link text-capitalize"
                      eventKey="2014"
                    >
                      2014
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="our_journey_category_a_item">
                    <Nav.Link
                      className="our_journey_category_a_link text-capitalize"
                      eventKey="2024"
                    >
                      2024
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="our_journey_category_a_item">
                    <Nav.Link
                      className="our_journey_category_a_link text-capitalize"
                      eventKey="2034"
                    >
                      2034
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <Tab.Content className={`${styles.our_journey_tab_content}`}>
                <Tab.Pane eventKey="1994">
                  <div className="row g-0">
                    <div
                      className={`${styles.our_journey_image_container} col-12 col-md-4`}
                    >
                      <Image
                        src={getImageUrl("about-us-page/our-journey.png")}
                        alt="ingredientandusage1"
                        title="ingredients&usage img - ingredient&usage1"
                        className={`${styles.our_journey_src} h-100 object-fit-cover`}
                        width={0}
                        height={0}
                      />
                    </div>
                    <div
                      className={`${styles.our_journey_card_content} col-12 col-md-8 d-flex flex-column justify-content-center`}
                    >
                      <h3
                        className={`${styles.our_journey_card_content_title} h3 jua-font white_text text-capitalize`}
                      >
                        first startup
                      </h3>
                      <p
                        className={`${styles.our_journey_card_content_text} h6 font_rg`}
                      >
                        Food for us comes from our relatives, whether they have
                        wings or fins or roots. considerfood. Food has a
                        culture. It has a history.first startup Food for us
                        comes from our relatives, whether they have wings or
                        fins or roots. considerfood. Food has a culture
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="2004">
                  <div className="row g-0">
                    <div
                      className={`${styles.our_journey_image_container} col-12 col-md-4`}
                    >
                      <Image
                        src={getImageUrl("about-us-page/our-journey.png")}
                        alt="ingredientandusage1"
                        title="ingredients&usage img - ingredient&usage1"
                        className={`${styles.our_journey_src} h-100 object-fit-cover`}
                        width={0}
                        height={0}
                      />
                    </div>
                    <div
                      className={`${styles.our_journey_card_content} col-12 col-md-8 d-flex flex-column justify-content-center`}
                    >
                      <h3
                        className={`${styles.our_journey_card_content_title} h3 jua-font white_text text-capitalize`}
                      >
                        first startup
                      </h3>
                      <p
                        className={`${styles.our_journey_card_content_text} h6 font_rg`}
                      >
                        Food for us comes from our relatives, whether they have
                        wings or fins or roots. considerfood. Food has a
                        culture. It has a history.first startup Food for us
                        comes from our relatives, whether they have wings or
                        fins or roots. considerfood. Food has a culture
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="2014">
                  <div className="row g-0">
                    <div
                      className={`${styles.our_journey_image_container} col-12 col-md-4`}
                    >
                      <Image
                        src={getImageUrl("about-us-page/our-journey.png")}
                        alt="ingredientandusage1"
                        title="ingredients&usage img - ingredient&usage1"
                        className={`${styles.our_journey_src} h-100 object-fit-cover`}
                        width={0}
                        height={0}
                      />
                    </div>
                    <div
                      className={`${styles.our_journey_card_content} col-12 col-md-8 d-flex flex-column justify-content-center`}
                    >
                      <h3
                        className={`${styles.our_journey_card_content_title} h3 jua-font white_text text-capitalize`}
                      >
                        first startup
                      </h3>
                      <p
                        className={`${styles.our_journey_card_content_text} h6 font_rg`}
                      >
                        Food for us comes from our relatives, whether they have
                        wings or fins or roots. considerfood. Food has a
                        culture. It has a history.first startup Food for us
                        comes from our relatives, whether they have wings or
                        fins or roots. considerfood. Food has a culture
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="2024">
                  <div className="row g-0">
                    <div
                      className={`${styles.our_journey_image_container} col-12 col-md-4`}
                    >
                      <Image
                        src={getImageUrl("about-us-page/our-journey.png")}
                        alt="ingredientandusage1"
                        title="ingredients&usage img - ingredient&usage1"
                        className={`${styles.our_journey_src} h-100 object-fit-cover`}
                        width={0}
                        height={0}
                      />
                    </div>
                    <div
                      className={`${styles.our_journey_card_content} col-12 col-md-8 d-flex flex-column justify-content-center`}
                    >
                      <h3
                        className={`${styles.our_journey_card_content_title} h3 jua-font white_text text-capitalize`}
                      >
                        first startup
                      </h3>
                      <p
                        className={`${styles.our_journey_card_content_text} h6 font_rg`}
                      >
                        Food for us comes from our relatives, whether they have
                        wings or fins or roots. considerfood. Food has a
                        culture. It has a history.first startup Food for us
                        comes from our relatives, whether they have wings or
                        fins or roots. considerfood. Food has a culture
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="2034">
                  <div className="row g-0">
                    <div
                      className={`${styles.our_journey_image_container} col-12 col-md-4`}
                    >
                      <Image
                        src={getImageUrl("about-us-page/our-journey.png")}
                        alt="ingredientandusage1"
                        title="ingredients&usage img - ingredient&usage1"
                        className={`${styles.our_journey_src} h-100 object-fit-cover`}
                        width={0}
                        height={0}
                      />
                    </div>
                    <div
                      className={`${styles.our_journey_card_content} col-12 col-md-8 d-flex flex-column justify-content-center`}
                    >
                      <h3
                        className={`${styles.our_journey_card_content_title} h3 jua-font white_text text-capitalize`}
                      >
                        first startup
                      </h3>
                      <p
                        className={`${styles.our_journey_card_content_text} h6 font_rg`}
                      >
                        Food for us comes from our relatives, whether they have
                        wings or fins or roots. considerfood. Food has a
                        culture. It has a history.first startup Food for us
                        comes from our relatives, whether they have wings or
                        fins or roots. considerfood. Food has a culture
                      </p>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default Whoweare;
