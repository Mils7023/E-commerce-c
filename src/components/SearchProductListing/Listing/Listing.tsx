"use client";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import styles from "./Listing.module.scss";
import { FilterSidebar, Pagination, ProductCard } from "@/components/common";
import { CancelIcon, FilterIcon } from "@/assets/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useWidthMediaQuery } from "@/hooks";
import NoSearchResult from "../NoSearchResult/NoSearchResult";
import { getImageUrl } from "@/utils/imageHelper";

export interface ListingProps {
  productData: any;
  searchParams: any;
  handleAddFilter: (value: any) => void;
  handleRemoveFilter: (value?: any) => void;
  sidebarFilters: any;
  setMobileFilters: (filters: any) => void;
  applyMobileFilters: () => void;
}

export const Listing: FC<ListingProps> = ({
  productData,
  handleAddFilter,
  handleRemoveFilter,
  searchParams,
  sidebarFilters,
  setMobileFilters,
  applyMobileFilters,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [isActive, setActive] = useState(false);
  const [isMobile] = useWidthMediaQuery();

  const handleChange = (event: any) => {
    const name = event?.target?.name;
    const value = event?.target?.value;
    if (name && value) {
      setSelectedCategory({ ...selectedCategory, [name]: value });
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      handleAddFilter({ ...selectedCategory });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    handleAddFilter({ page: currentPage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePagination = (page: number) => {
    if (page) {
      setCurrentPage(page);
    }
  };

  const handleMobileFilter = () => {
    applyMobileFilters();
    toggleClass();
  };

  if (sidebarFilters?.products?.aggregations?.length === 0) {
    return <NoSearchResult />;
  }

  return (
    <section className={`${styles.listing_section} common-padding-b pt-4 mt-3`}>
      <div className={`${styles.listing_main}`}>
        <div className="container">
          <div className={`${styles.listing_wrapper} `}>
            <div
              className={`${styles.filter_title} d-flex flex-md-row flex-column gap-md-2 gap-3 align-items-md-center align-items-start justify-content-between position-relative`}
            >
              <span
                className={`${styles.filter_btn} d-md-flex d-none gap-2 align-items-center`}
              >
                Filter <FilterIcon />
              </span>

              <span
                onClick={toggleClass}
                className={`${styles.filter_btn} d-md-none d-flex gap-2 align-items-center`}
              >
                Filter <FilterIcon />
              </span>
            </div>
            <div className={`row ${styles.pf_row} g-lg-4 g-3`}>
              {!isMobile && sidebarFilters?.products && (
                <FilterSidebar
                  handleChange={handleChange}
                  productSidebarFilter={sidebarFilters.products}
                  searchParams={searchParams}
                  handleRemoveFilter={handleRemoveFilter}
                  handleAddFilter={handleAddFilter}
                  isMobile={isMobile}
                />
              )}

              <div
                className={`col-xl-9 col-lg-8 col-md-9 col-12 ${styles.products_col}`}
              >
                <div
                  className={`${styles.featured_products_row} p_cards_row row g-xxl-4 g-3`}
                >
                  {productData?.productTopSearch?.items?.map(
                    (product: any, index: any) => (
                      <div
                        key={product.id}
                        className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                      >
                        <ProductCard product={product} />
                      </div>
                    )
                  )}
                  {productData?.productTopSearch?.total_count <= 0 && (
                    <div
                      className={`${styles.noSearchWrapper} pt-md-5 pt-md-4 pt-3 mt-lg-4 text-center`}
                    >
                      <Image
                        src={getImageUrl(
                          "search-product/search-noresult-img.png"
                        )}
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
                          Check your spelling or adjust the filters and try
                          again.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`${styles.product_pagination} mt-lg-5 mt-3 pt-xxl-5 pt-4 d-flex justify-content-center`}
                >
                  <Pagination
                    currentPage={currentPage}
                    perPage={
                      productData?.productTopSearch?.page_info?.page_size
                    }
                    totalPage={
                      productData?.productTopSearch?.page_info?.total_pages
                    }
                    handlePagination={handlePagination}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW FILTER */}
      {isMobile && (
        <div
          className={
            isActive
              ? `${styles.showFilter} ${styles.filterDrawer} d-md-none d-block`
              : `${styles.hideFilter} ${styles.filterDrawer} d-md-none d-block`
          }
        >
          <div className={`${styles.filter_box} position-relative `}>
            <button
              className={`${styles.closeButton} btn-transparent`}
              onClick={toggleClass}
            >
              <CancelIcon className="black_text" />
            </button>
            {sidebarFilters?.products && (
              <FilterSidebar
                handleChange={handleChange}
                productSidebarFilter={sidebarFilters.products}
                searchParams={searchParams}
                handleRemoveFilter={handleRemoveFilter}
                handleAddFilter={handleAddFilter}
                setMobileFilters={setMobileFilters}
                isMobile={isMobile}
              />
            )}
            <button className="btn w-100" onClick={handleMobileFilter}>
              Apply Filter
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

// export default Banner;
