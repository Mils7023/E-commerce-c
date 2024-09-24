"use client";
import {
  Dispatch,
  FC,
  SetStateAction,
  useState,
  useEffect,
  useRef,
} from "react";
import styles from "./SearchDrawer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Queries } from "@/utils/graphql";
import { getClient } from "@/graphql/apolloClient";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { SpinnerProps } from "../Spinner";

const Spinner = dynamic<SpinnerProps>(
  () => import("../Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);
const client = getClient();

export interface SearchDrawerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: React.ReactNode;
  bodyClass?: string;
  isMobile: boolean;
  searchTerm?: string;
}

export const SearchDrawer: FC<SearchDrawerProps> = ({
  isOpen,
  title,
  setIsOpen,
  bodyClass,
  searchTerm,
  isMobile,
}) => {
  const [products, setProducts] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      if ((searchTerm && searchTerm.length >= 3) || searchTerm?.length === 0) {
        setLoading(true);
        try {
          const { data: productData } = await client.query({
            query: Queries.SEARCH_PRODUCT_LIST,
            variables: {
              search: searchTerm,
              currentPage: 1,
              pageSize: 4,
            },
          });
          setProducts(productData.productTopSearch || null);
        } catch (error) {
          console.error("Error fetching product data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProducts();
  }, [searchTerm]);

  // Close the drawer if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // close the drawer when clicking outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!products || products.items.length === 0) {
    return (
      <div className={`${styles.searchBar} white_bg`} ref={drawerRef}>
        <div className="container">
          <div className="row">
            <div className={styles.recentSearch}>
              {loading ? (
                <div className="d-flex align-items-center justify-content-center">
                  <Spinner size="sm" />
                </div>
              ) : (
                <>
                  <div className={styles.recentSearch_title}>
                    <div className="d-flex align-items-center justify-content-between pb-xl-4 pb-3">
                      <span className="p font_rg black_text d-inline-block">
                        RECENT SEARCH
                      </span>
                    </div>
                    <span className="v_divider d-block"></span>
                  </div>
                  <p className="h6 black_text font_md pt-xl-4 pt-3">
                    No results found!
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className={`${styles.searchBarMobile}`}>
        <div className="row g-0">
          <div className="col-12">
            <ul className="mx-2">
              {products.related_keyword
                .slice(0, 5)
                .map((keyword: string, index: number) => (
                  <li className="mb-3" key={index}>
                    <Link
                      href={`/search-product?search=${keyword}`}
                      onClick={() => setIsOpen(false)}
                      className="font-18 black_text font_rg black-link-hover"
                    >
                      {keyword}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-12 text-center">
            <span className="v_divider d-block"></span>
          </div>
          <div className="col-12 pt-4">
            <div className={styles.recentSearch}>
              <div className={styles.recentSearch_title}>
                <div className="d-flex align-items-center justify-content-between">
                  <span className="p font_rg black_text d-inline-block">
                    RECENT SEARCH
                  </span>
                  <Link
                    href={`/search-product?search=${searchTerm}`}
                    onClick={() => setIsOpen(false)}
                    className="font_md font-18 black_text black-link-hover text-decoration-underline"
                  >
                    View All({products.total_count})
                  </Link>
                </div>
              </div>
              <div
                className={`${styles.recentSearch_products_row} g-3 pt-4 row`}
              >
                {products.items?.map((product: Product, index: number) => (
                  <Link
                    key={index}
                    href={`/${product.url_key}`}
                    onClick={() => setIsOpen(false)}
                    className={`${styles.recentSearch_products_col} d-flex col-sm-6 col-12`}
                  >
                    <span className={styles.recentSearch_product_img}>
                      <Image
                        src={product.small_image?.url || ""}
                        className="w-100 h-100 object-cover"
                        alt={product.name || ""}
                        title="Cannellio Cake toppers - Search Product1"
                        width={100}
                        height={100}
                      />
                    </span>
                    <span className={styles.recentSearch_product_content}>
                      <p className="h6 black_text font_md mb-xxl-4 mb-lg-3 mb-2 line-clamp line-clamp3">
                        {product.name}
                      </p>
                      <span
                        className={`${styles.recentSearch_product_price} d-flex align-items-center gap-1`}
                      >
                        <span
                          className={`black_text font_smb ${styles.recentSearch_product_price_label} h5`}
                        >
                          From
                        </span>
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 20 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 22L2.52723 21.4757C3.29225 21.2125 3.95759 20.7075 4.42901 20.0324C4.90042 19.3573 5.15401 18.5463 5.15385 17.7143V7.63143C5.15385 6.13788 5.7289 4.70551 6.7525 3.64941C7.7761 2.59331 9.16441 2 10.612 2H11.8097C14.0625 2 16.0868 3.41429 16.9231 5.57143M4.46154 19.8571H5.96246C7.25201 19.857 8.52388 20.1666 9.67739 20.7614L9.74662 20.7971C10.9001 21.3921 12.172 21.7019 13.4615 21.7019C14.7511 21.7019 16.023 21.3921 17.1765 20.7971L19 19.8571M1.69231 12H12.7692"
                            stroke="#000000"
                            strokeWidth="3"
                          />
                        </svg>
                        <span
                          className={`black_text font_smb ${styles.recentSearch_product_price_label} h5`}
                        >
                          {product.price_range?.minimum_price.final_price
                            .value || ""}
                        </span>
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`${styles.searchBar} white_bg`} ref={drawerRef}>
        <div className="container">
          <div className="row g-0">
            <div className="col-2">
              <ul className="">
                {products.related_keyword
                  .slice(0, 5)
                  .map((keyword: string, index: number) => (
                    <li className="mb-3" key={index}>
                      <Link
                        href={`/search-product?search=${keyword}`}
                        onClick={() => setIsOpen(false)}
                        className="font-18 black_text font_rg black-link-hover"
                      >
                        {keyword}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col-1 text-center">
              <span className="h_divider"></span>
            </div>
            <div className="col-9">
              <div className={styles.recentSearch}>
                <div className={styles.recentSearch_title}>
                  <div className="d-flex align-items-center justify-content-between pb-xl-4 pb-3">
                    <span className="p font_rg black_text d-inline-block">
                      RECENT SEARCH
                    </span>
                    <Link
                      href={`/search-product?search=${searchTerm}`}
                      onClick={() => setIsOpen(false)}
                      className="font_md font-18 black_text black-link-hover text-decoration-underline"
                    >
                      View All({products.total_count})
                    </Link>
                  </div>
                  <span className="v_divider d-block"></span>
                </div>
                <div
                  className={`${styles.recentSearch_products_row} g-4 pt-xl-4 pt-3 row`}
                >
                  {products.items?.map((product: Product, index: number) => (
                    <Link
                      key={product.id || index}
                      href={`/${product.url_key}`}
                      onClick={() => setIsOpen(false)}
                      className={`${styles.recentSearch_products_col} d-flex col-6`}
                    >
                      <span className={styles.recentSearch_product_img}>
                        <Image
                          src={product.small_image?.url || ""}
                          className="w-100 h-100 object-cover"
                          alt={product.name || ""}
                          title="Cannellio Cake toppers - Search Product1"
                          width={100}
                          height={100}
                        />
                      </span>
                      <span className={styles.recentSearch_product_content}>
                        <p className="h6 black_text font_md mb-xxl-4 mb-lg-3 mb-2 line-clamp line-clamp3">
                          {product.name}
                        </p>
                        <span
                          className={`${styles.recentSearch_product_price} d-flex align-items-center gap-1`}
                        >
                          <span
                            className={`black_text font_smb ${styles.recentSearch_product_price_label} h5`}
                          >
                            From
                          </span>
                          <svg
                            width="16"
                            height="18"
                            viewBox="0 0 20 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 22L2.52723 21.4757C3.29225 21.2125 3.95759 20.7075 4.42901 20.0324C4.90042 19.3573 5.15401 18.5463 5.15385 17.7143V7.63143C5.15385 6.13788 5.7289 4.70551 6.7525 3.64941C7.7761 2.59331 9.16441 2 10.612 2H11.8097C14.0625 2 16.0868 3.41429 16.9231 5.57143M4.46154 19.8571H5.96246C7.25201 19.857 8.52388 20.1666 9.67739 20.7614L9.74662 20.7971C10.9001 21.3921 12.172 21.7019 13.4615 21.7019C14.7511 21.7019 16.023 21.3921 17.1765 20.7971L19 19.8571M1.69231 12H12.7692"
                              stroke="#000000"
                              strokeWidth="3"
                            />
                          </svg>
                          <span
                            className={`black_text font_smb ${styles.recentSearch_product_price_label} h5`}
                          >
                            {product.price_range?.minimum_price.final_price
                              .value || ""}
                          </span>
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
