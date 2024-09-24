"use client";
import Image from "next/image";
import React from "react";

import styles from "./Ingredients.module.scss";

import Link from "next/link";
import { getImageUrl } from "@/utils/imageHelper";

export const Ingredients = () => {
  return (
    <section id="ingridients_section">
      <div className={`${styles.ingridients_main} common-padding`}>
        <div className="container">
          <div className={`${styles.common_about_row} p-0`}>
            <div
              className={`${styles.indridents_and_usage} ${styles.common_about_content}`}
            >
              <div className="main-title">
                <h2 className="h2 black_text jua-font text-capitalize">
                  ingredients & usage information
                </h2>
              </div>
              <div className={`${styles.indridents_and_usage_information} p-0`}>
                <span
                  className={`${styles.common_about_content_text} p-0 font_md black_text`}
                >
                  Icing Sheet
                </span>
                <p
                  className={`${styles.common_about_content_text} font_rg black_shade7_text pt-1 pt-sm-2 pt-xxl-3`}
                >
                  Sugar, starches (E1422, E1412), maltodextrin, glycerol E422,
                  water, stabilizer, (E414, E 415, E460i), dextrose, emulsifiers
                  (E435, E491, E471), food colouring, (E171), citric acid E330,
                  artificial flavours, preservative (E202).
                </p>
              </div>
              <div className={`${styles.indridents_and_usage_information}`}>
                <span
                  className={`${styles.common_about_content_text} p-0 font_md black_text`}
                >
                  Inks*
                </span>
                <p
                  className={`${styles.common_about_content_text} font_rg black_shade7_text pt-1 pt-sm-2 pt-xxl-3`}
                >
                  water, humectant (E422), propylene glycol, preservative
                  (E202), cyan food colours (E133, E124, E102- tartrazine),
                  acidity regulator(E330) black food colours (E122-carmoisine,
                  E133, E102- tartrazine), acidity regulator (E330). magenta
                  food colours (E122- carmoisine, E124 ponceau), acidity
                  regulator (E330). yellow E102 (tartrazine), acidity regulator
                  (E330).
                </p>
              </div>
              <div className={`${styles.indridents_and_usage_information}`}>
                <div
                  className={`${styles.indridents_and_usage_information_image} d-flex justify-centent-start`}
                >
                  <div className="d-flex flex-column align-items-center">
                    <Image
                      src={getImageUrl('about-us-page/ingrident&usage-1.png')}
                      alt="ingredientandusage1"
                      title="ingredients&usage img - ingredient&usage1"
                      className={`${styles.ingrident_and_usage_src} w-100 h-100`}
                      width={0}
                      height={0}
                    />
                    <p className="pt-2 pt-sm-3 pt-xxl-4 h6 font_rg black_shade7_text text-center text-uppercase">
                      Eggs free
                    </p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <Image
                      src={getImageUrl('about-us-page/ingrident&usage-2.png')}
                      alt="ingredientandusage2"
                      title="ingredients&usage img - ingredient&usage2"
                      className={`${styles.ingrident_and_usage_src} w-100 h-100`}
                      width={0}
                      height={0}
                    />
                    <p className="pt-2 pt-sm-3 pt-xxl-4 h6 font_rg black_shade7_text text-center text-uppercase">
                      Nuts free
                    </p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <Image
                      src={getImageUrl('about-us-page/ingrident&usage-3.png')}
                      alt="ingredientandusage3"
                      title="ingredients&usage img - ingredient&usage3"
                      className={`${styles.ingrident_and_usage_src} w-100 h-100`}
                      width={0}
                      height={0}
                    />
                    <p className="pt-2 pt-sm-3 pt-xxl-4 h6 font_rg black_shade7_text text-center text-uppercase">
                      Lactose free
                    </p>
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <Image
                      src={getImageUrl('about-us-page/ingrident&usage-4.png')}
                      alt="ingredientandusage4"
                      title="ingredients&usage img - ingredient&usage4"
                      className={`${styles.ingrident_and_usage_src} w-100 h-100`}
                      width={0}
                      height={0}
                    />
                    <p className="pt-2 pt-sm-3 pt-xxl-4 h6 font_rg black_shade7_text text-center text-uppercase">
                      Gluten free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`row align-items-center flex-row-reverse g-0 ${styles.common_about_row}`}
          >
            <div className={`col-lg-7 col-12 ${styles.common_about_content}`}>
              <div className={`${styles.ingredients_content}`}>
                <h2
                  className={`h2 font_rg black_text jua-font text-capitalize ${styles.common_about_content_title}`}
                >
                  how to apply
                </h2>
                <p
                  className={`font_rg black_shade7_text ${styles.common_about_content_text}`}
                >
                  Please remove the plastic backing from the icing cake topper.
                  For cake toppers it is recommended to spread some buttercream
                  or frosting directly to the back of the cake topper, (as if
                  you’re spreading butter on toast). Then carefully place the
                  topper on top of the cake. If you buy a cake that is ready
                  iced, some people like to moisten the icing on the cake and
                  place the topper to the icing. Care should be taken as the
                  moistened icing is very sticky, you will not have much of a
                  chance to re-align the topper once placed.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-5 col-12 d-flex justify-content-center ${styles.common_about_image}`}
            >
              <Image
                src={getImageUrl('about-us-page/ingredients-img-1.png')}
                alt="ingredient1"
                title="ingredients img - ingredient1"
                className={`${styles.common_about_image_src} w-100 h-100`}
                width={0}
                height={0}
              />
            </div>
          </div>
          <div
            className={`row align-items-center g-0 ${styles.common_about_row}`}
          >
            <div className={`col-lg-7 col-12 ${styles.common_about_content}`}>
              <div className={`${styles.ingredients_content_reverse}`}>
                <h2
                  className={`h2 font_rg black_text jua-font text-capitalize ${styles.common_about_content_title}`}
                >
                  Shelf Life
                </h2>
                <p
                  className={`font_rg black_shade7_text ${styles.common_about_content_text}`}
                >
                  All our products have a shelf life of 12 months - Please store
                  at room temperature, away from sunlight and keep in the
                  cellophane bag until you need to use.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-5 col-12 d-flex justify-content-center ${styles.common_about_image}`}
            >
              <Image
                src={getImageUrl('about-us-page/ingredients-img-2.png')}
                alt="ingredient2"
                title="ingredients img - ingredient2"
                className={`${styles.common_about_image_src} w-100 h-100`}
                width={0}
                height={0}
              />
            </div>
          </div>
          <div
            className={`row align-items-center flex-row-reverse g-0 ${styles.common_about_row}`}
          >
            <div className={`col-lg-7 col-12 ${styles.common_about_content}`}>
              <div className={`${styles.ingredients_content}`}>
                <h2
                  className={`h2 font_rg black_text jua-font text-capitalize ${styles.common_about_content_title}`}
                >
                  How to Store
                </h2>
                <p
                  className={`font_rg black_shade7_text ${styles.common_about_content_text}`}
                >
                  Do not store in the fridge, it will make the colours run and
                  the cake topper will go soggy Apply the topper shortly before
                  you are going to use it.
                </p>
              </div>
            </div>
            <div
              className={`col-lg-5 col-12 d-flex justify-content-center ${styles.common_about_image}`}
            >
              <Image
                src={getImageUrl('about-us-page/ingredients-img-3.png')}
                alt="ingredient3"
                title="ingredients img - ingredient3"
                className={`${styles.common_about_image_src} w-100 h-100`}
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

// export default Whoweare;
