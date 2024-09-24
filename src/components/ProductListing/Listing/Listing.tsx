"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./Listing.module.scss";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import {
  FilterSidebar,
  Pagination,
  ProductCard,
  ProductCardSkeleton,
} from "@/components/common";
import { CancelIcon, FilterIcon } from "@/assets/icons";
import { usePathname, useRouter } from "next/navigation";
import { useWidthMediaQuery } from "@/hooks";
import Link from "next/link";

export interface ListingProps {
  searchParams: any;
  handleAddFilter: (value: any) => void;
  handleRemoveFilter: (value?: any) => void;
  sidebarFilters: any;
  setMobileFilters: (filters: any) => void;
  applyMobileFilters: () => void;
}

export const Listing: FC<ListingProps> = ({
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

  const router = useRouter();
  const pathname = usePathname();
  const isToppersByShape = pathname.includes("toppers-by-shape");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures that the component has mounted on the client
  }, []);

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

  const handleTabSelect = (key: string | null) => {
    if (key) {
      router.push(`/${key}`, { scroll: false });
    }
  };

  const handleMobileFilter = () => {
    applyMobileFilters();
    toggleClass();
  };

  return (
    <section className={`${styles.listing_section} common-padding-b pt-4 mt-3`}>
      <div className={`${styles.listing_main}`}>
        <div className="container">
          <div className={`${styles.listing_wrapper} `}>
            <Tab.Container
              defaultActiveKey={`${sidebarFilters.categories.items[0].url_path}`}
              onSelect={handleTabSelect}
            >
              <div
                className={`${styles.filter_title} d-flex flex-md-row flex-column gap-md-4 gap-3  align-items-start justify-content-between position-relative`}
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

                {isToppersByShape ? (
                  <div className="filter_category_by_shape d-flex justify-content-md-end">
                    <Nav
                      variant="pills"
                      className={`${styles.filter_category_a_nav} pe-1`}
                    >
                      {sidebarFilters.categories.items[0].parent_category
                        .length > 0 && (
                        <Nav.Item className="filter_category_by_shape_item">
                          <Nav.Link
                            className="filter_category_by_shape_link"
                            eventKey={`${sidebarFilters.categories.items[0].parent_category[0].url_path}`}
                          >
                            {`${sidebarFilters.categories.items[0].parent_category[0].name}`}
                          </Nav.Link>
                        </Nav.Item>
                      )}
                      {sidebarFilters.categories.items[0].children.length > 0
                        ? sidebarFilters.categories.items[0].children.map(
                            (item: any, index: any) => (
                              <Nav.Item
                                key={index}
                                className="filter_category_by_shape_item"
                              >
                                <Nav.Link
                                  className="filter_category_by_shape_link"
                                  eventKey={item.url_path}
                                >
                                  {item.name}
                                </Nav.Link>
                              </Nav.Item>
                            )
                          )
                        : sidebarFilters.categories.items[0].sibling_categories.map(
                            (item: any, index: any) => (
                              <Nav.Item
                                key={index}
                                className="filter_category_by_shape_item"
                              >
                                <Nav.Link
                                  className="filter_category_by_shape_link"
                                  eventKey={item.url_path}
                                >
                                  {item.name}
                                </Nav.Link>
                              </Nav.Item>
                            )
                          )}
                    </Nav>
                  </div>
                ) : (
                  <div className="filter_category_a d-flex justify-content-md-end">
                    <Nav
                      variant="pills"
                      className={`${styles.filter_category_a_nav}`}
                    >
                      {sidebarFilters.categories.items[0].parent_category
                        .length > 0 && (
                        <Nav.Item className="filter_category_a_item">
                          <Nav.Link
                            className="filter_category_a_link text-capitalize"
                            eventKey={`${sidebarFilters.categories.items[0].parent_category[0].url_path}`}
                          >
                            {`${sidebarFilters.categories.items[0].parent_category[0].name}`}
                          </Nav.Link>
                        </Nav.Item>
                      )}
                      {sidebarFilters.categories.items[0].children.length > 0
                        ? sidebarFilters.categories.items[0].children.map(
                            (item: any, index: any) => (
                              <Nav.Item
                                key={index}
                                className="filter_category_a_item"
                              >
                                <Nav.Link
                                  className="filter_category_a_link text-capitalize"
                                  eventKey={item.url_path}
                                >
                                  {item.name}
                                </Nav.Link>
                              </Nav.Item>
                            )
                          )
                        : sidebarFilters.categories.items[0].sibling_categories.map(
                            (item: any, index: any) => (
                              <Nav.Item
                                key={index}
                                className="filter_category_a_item"
                              >
                                <Nav.Link
                                  className="filter_category_a_link text-capitalize"
                                  eventKey={item.url_path}
                                >
                                  {item.name}
                                </Nav.Link>
                              </Nav.Item>
                            )
                          )}
                    </Nav>
                  </div>
                )}
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
                  <Tab.Content>
                    {sidebarFilters.categories.items[0].parent_category.length >
                      0 && (
                      <Tab.Pane
                        eventKey={
                          sidebarFilters.categories.items[0].parent_category[0]
                            .url_path
                        }
                      >
                        <div
                          className={`${styles.featured_products_row} p_cards_row row g-xxl-4 g-3`}
                        >
                          {!sidebarFilters.categories.items[0]
                            .parent_category[0].category_products.items
                            ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                                (index) => (
                                  <div
                                    key={index}
                                    className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                                  >
                                    <ProductCardSkeleton />
                                  </div>
                                )
                              )
                            : sidebarFilters.categories.items[0].parent_category[0].category_products.items.map(
                                (product: any, index: any) => (
                                  <div
                                    key={index}
                                    className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                                  >
                                    <ProductCard product={product} />
                                  </div>
                                )
                              )}
                        </div>
                        <div
                          className={`${styles.product_pagination} mt-lg-5 mt-3 pt-xxl-5 pt-4 d-flex justify-content-center`}
                        >
                          <Pagination
                            currentPage={currentPage}
                            perPage={
                              sidebarFilters.categories.items[0]
                                .parent_category[0].category_products.page_info
                                ?.page_size
                            }
                            totalPage={
                              sidebarFilters.categories.items[0]
                                .parent_category[0].category_products.page_info
                                ?.total_pages
                            }
                            handlePagination={handlePagination}
                          />
                        </div>
                      </Tab.Pane>
                    )}
                    {sidebarFilters.categories.items[0].sibling_categories.map(
                      (item: any, index: any) => (
                        <Tab.Pane key={index} eventKey={item.url_path}>
                          <div
                            className={`${styles.featured_products_row} p_cards_row row g-xxl-4 g-3`}
                          >
                            {!item.category_products.items
                              ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                                  (index) => (
                                    <div
                                      key={index}
                                      className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                                    >
                                      <ProductCardSkeleton />
                                    </div>
                                  )
                                )
                              : item.category_products.items.map(
                                  (product: any, index: any) => (
                                    <div
                                      key={index}
                                      className={`${styles.featured_products_col} p_cards_col col-xl-4 col-sm-6 col-12`}
                                    >
                                      <ProductCard product={product} />
                                    </div>
                                  )
                                )}
                          </div>

                          <div
                            className={`${styles.product_pagination} mt-lg-5 mt-3 pt-xxl-5 pt-4 d-flex justify-content-center`}
                          >
                            <Pagination
                              currentPage={currentPage}
                              perPage={
                                item.category_products.page_info?.page_size
                              }
                              totalPage={
                                item.category_products.page_info?.total_pages
                              }
                              handlePagination={handlePagination}
                            />
                          </div>
                        </Tab.Pane>
                      )
                    )}
                  </Tab.Content>
                </div>
              </div>
            </Tab.Container>
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
          <div className={`${styles.filter_box} position-relative`}>
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
