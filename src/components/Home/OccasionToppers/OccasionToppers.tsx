// src/components/Home/OccasionToppers/OccasionToppers.tsx
"use client";
import Image from "next/image";
import React, { useContext } from "react";

import styles from "./OccasionToppers.module.scss";
import { ToppersByShapeItems } from "@/types";
import { HomeContext } from "@/context";
import dynamic from "next/dynamic";
import { SpinnerProps } from "@/components/common/Spinner";
import { ProductCardSkeleton } from "@/components/common";

const Spinner = dynamic<SpinnerProps>(
  () => import("@/components/common/Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);

export const OccasionToppers = () => {
  const { occasionToppers } = useContext(HomeContext);

  return (
    <section id="occasion_products_section">
      <div className={`common-padding-t`}>
        <div className="container">
          <div>
            <div className="main-title">
              <h2 className="h2 black_text jua-font">
                Celebrate Occasions With Our Toppers
              </h2>
            </div>

            <div
              className={`${styles.occasion_products_row} row g-xxl-4 g-sm-3 g-2`}
            >
              {occasionToppers.error && (
                <div className="d-flex justify-content-center w-100 items-center ">
                  <h4 className="h4 black_text d-sm-block d-none">
                    Error : Something Went Wrong! Please try again.
                  </h4>
                </div>
              )}
              {occasionToppers.data?.items && (
                    <>
                      {occasionToppers.data?.items?.map(
                        (menu: ToppersByShapeItems, index: number) => (
                          <React.Fragment key={menu.id}>
                            {menu.id === 5 && (
                              <div className="col-lg-3 col-5 order-1">
                                <a
                                  href={`/${menu.url_path}` || ""}
                                  className={`${styles.occasion_products_card} position-relative`}
                                >
                                  <Image
                                    src={
                                      menu.desktop_image_for_home_section || ""
                                    }
                                    alt={menu.name}
                                    title={menu.name}
                                    width={100}
                                    height={100}
                                    className="w-100 h-100 "
                                  />
                                  <h3 className="h3 jua-font black_shade7_text position-absolute text-center py-sm-4 py-3 px-2 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                                    {menu.name}
                                  </h3>
                                </a>
                              </div>
                            )}
                            {menu.id === 7 && (
                              <div className="col-lg-6 col-7 order-2">
                                <a
                                  href={`/${menu.url_path}` || ""}
                                  className={`${styles.occasion_products_card} position-relative`}
                                >
                                  <Image
                                    src={
                                      menu.desktop_image_for_home_section || ""
                                    }
                                    alt={menu.name}
                                    title={menu.name}
                                    width={100}
                                    height={100}
                                    className="w-100 h-100 "
                                  />
                                  <h3 className="h3 jua-font black_shade7_text position-absolute py-sm-4 py-3 px-2 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                                    {menu.name}
                                  </h3>
                                </a>
                              </div>
                            )}
                            {menu.id === 6 && (
                              <div className="col-lg-3 col-sm-4 col-5 order-lg-3 order-4">
                                <a
                                  href={`/${menu.url_path}` || ""}
                                  className={`${styles.occasion_products_card} position-relative`}
                                >
                                  <Image
                                    src={
                                      menu.desktop_image_for_home_section || ""
                                    }
                                    alt={menu.name}
                                    title={menu.name}
                                    width={100}
                                    height={100}
                                    className="w-100 h-100 "
                                  />
                                  <h3 className="h3 jua-font black_shade7_text text-center position-absolute py-sm-4 py-3 px-2 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                                    {menu.name}
                                  </h3>
                                </a>
                              </div>
                            )}
                            {menu.id === 10 && (
                              <div className="col-lg-7 col-sm-8 col-7 order-lg-4 order-3">
                                <a
                                  href={`/${menu.url_path}` || ""}
                                  className={`${styles.occasion_products_card} ${styles.occasion_products_lg_card} position-relative`}
                                >
                                  <Image
                                    src={
                                      menu.desktop_image_for_home_section || ""
                                    }
                                    alt={menu.name}
                                    title={menu.name}
                                    width={100}
                                    height={100}
                                    className="w-100 h-100 "
                                  />
                                  <h3 className="h3 jua-font black_shade7_text position-absolute  py-sm-4 py-3 px-2 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                                    {menu.name}
                                  </h3>
                                </a>
                              </div>
                            )}
                          </React.Fragment>
                        )
                      )}

                      <div className="col-lg-5 col-12 order-5">
                        <div className="d-flex flex-lg-column flex-row justify-content-between">
                          {occasionToppers.data?.items?.map(
                            (menu: ToppersByShapeItems, index: number) => (
                              <React.Fragment key={menu.id}>
                                {menu.id === 8 && (
                                  <a
                                    href={`/${menu.url_path}` || ""}
                                    className={`${styles.occasion_products_card} ${styles.occasion_products_sm_card} position-relative mb-lg-4 me-lg-0 me-sm-3 me-2`}
                                  >
                                    <Image
                                      src={
                                        menu.desktop_image_for_home_section ||
                                        ""
                                      }
                                      alt={menu.name}
                                      title={menu.name}
                                      width={100}
                                      height={100}
                                      className="w-100 h-100 d-sm-block d-none"
                                    />
                                    <Image
                                      src={
                                        menu.mobile_image_for_home_section || ""
                                      }
                                      alt={menu.name}
                                      title={menu.name}
                                      width={172}
                                      height={140}
                                      className="w-100 h-100 d-sm-none d-block"
                                    />
                                    <h3 className="h3 jua-font black_shade7_text position-absolute py-sm-4 py-3 px-sm-4 px-sm-3 px-2 top-0 bottom-0 start-0 end-0 d-sm-flex d-none align-items-center">
                                      {menu.name.split(" ")[0]}
                                      <br className="d-sm-block d-none" />{" "}
                                      {menu.name.split(" ")[1]}{" "}
                                      {menu.name.split(" ")[2]}
                                    </h3>
                                    <h3 className="h3 jua-font black_shade7_text position-absolute py-sm-4 py-3 px-sm-4 px-sm-3 px-2 bottom-0 start-0 end-0 d-sm-none d-flex align-items-center justify-content-center">
                                      {menu.name}
                                    </h3>
                                  </a>
                                )}

                                {menu.id === 9 && (
                                  <a
                                    href={`/${menu.url_path}` || ""}
                                    className={`${styles.occasion_products_card} ${styles.occasion_products_sm_card} position-relative`}
                                  >
                                    <Image
                                      src={
                                        menu.desktop_image_for_home_section ||
                                        ""
                                      }
                                      alt={menu.name}
                                      title={menu.name}
                                      width={100}
                                      height={100}
                                      className="w-100 h-100 d-sm-block d-none"
                                    />
                                    <Image
                                      src={
                                        menu.mobile_image_for_home_section || ""
                                      }
                                      alt={menu.name}
                                      title={menu.name}
                                      width={172}
                                      height={140}
                                      className="w-100 h-100 d-sm-none d-block"
                                    />
                                    <h3 className="h3 jua-font black_shade7_text position-absolute py-sm-4 py-3 px-sm-4 px-sm-3 px-2 top-0 bottom-0 start-0 d-sm-flex d-none justify-content-center align-items-center">
                                      {menu.name.split(" ")[0]}
                                      <br /> {menu.name.split(" ")[1]}{" "}
                                      {menu.name.split(" ")[2]}
                                    </h3>
                                    <h3 className="h3 jua-font black_shade7_text position-absolute py-sm-4 py-3 px-sm-4 px-sm-3 px-2 bottom-0 start-0 end-0 d-sm-none d-flex align-items-center justify-content-center">
                                      {menu.name}
                                    </h3>
                                  </a>
                                )}
                              </React.Fragment>
                            )
                          )}
                        </div>
                      </div>
                    </>
                  )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
