import React from "react";
import styles from "./NoSearchResult.module.scss";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHelper";

function NoSearchResult() {
  return (
    <section className={`${styles.listing_section} pt-4 mt-3 common-padding-b`}>
      <div className={`${styles.listing_main}`}>
        <div className="container">
          <div className={`${styles.listing_wrapper} `}>
            <div
              className={`${styles.noSearchWrapper} pt-md-5 pt-md-4 pt-3 mt-lg-4 text-center`}
            >
              <Image
                src={getImageUrl('search-product/search-noresult-img.png')}
                alt=""
                title=""
                width={325}
                height={293}
                className={`${styles.noSearchImage}`}
              />
              <div className="pt-5 mt-lg-4">
                <span className="h4 black_text font_md pb-3 d-inline-block">
                  Sorry, we couldn’t find what you’re looking for.
                </span>
                <p className="h6 black_shade5_text font_rg">
                  Check your spelling or adjust the filters and try again.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoSearchResult;
