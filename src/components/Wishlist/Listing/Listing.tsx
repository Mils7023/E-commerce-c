"use client";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import styles from "./Listing.module.scss";
import EmptyWishlist from "@/assets/images/wishlist/empty-wishlist.png";
import {
  Pagination,
  ProductCard,
  ProductCardSkeleton,
} from "@/components/common";
import { useWishlist } from "@/hooks";
import { useRouter } from "next/navigation";
import { WishlistItemV2 } from "@/types";
import { getImageUrl } from "@/utils/imageHelper";

export const Listing = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [wishlistItems, setWishlistItems] = useState<WishlistItemV2[]>([]);
  const router = useRouter();

  const { fetchWishlist, refetchWishList, wishlist, wishlistLoading } =
    useWishlist();

  useEffect(() => {
    refetchWishList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    refetchWishList();
    if (wishlist?.items_v2?.items) {
      setWishlistItems(wishlist.items_v2.items);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wishlist]);

  // Use useCallback to prevent recreation of handlePagination on every render
  const handlePagination = useCallback((page: number) => {
    if (page) {
      setCurrentPage(page);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await fetchWishlist({
        currentPage,
        pageSize: 8,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <section
      className={`${styles.listing_section} common-padding-t common-padding-b mb-5`}
    >
      <div className={styles.listing_main}>
        <div className="container">
          <div className={styles.listing_wrapper}>
            <div className={`p_cards_row row g-xxl-4 g-3`}>
              {/* Render skeletons while loading */}
              {wishlistLoading && !wishlistItems
                ? [0, 1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className={`p_cards_col col-xl-3 col-lg-4 col-sm-6 col-12`}
                    >
                      <ProductCardSkeleton />
                    </div>
                  ))
                : wishlistItems.map((item, index) => (
                    <div
                      className={`p_cards_col col-xl-3 col-lg-4 col-sm-6 col-12`}
                      key={index}
                    >
                      <ProductCard product={item.product} wishlist={true} />
                    </div>
                  ))}
            </div>

            <div
              className={`${styles.product_pagination} mt-lg-5 mt-3 pt-xxl-5 pt-4 d-flex justify-content-center`}
            >
              {wishlist && (
                <Pagination
                  currentPage={currentPage}
                  perPage={wishlist?.items_v2?.page_info?.page_size}
                  totalPage={wishlist?.items_v2?.page_info?.total_pages}
                  handlePagination={handlePagination}
                />
              )}
            </div>

            {/* Empty wishlist state */}
            {wishlist?.items_count === 0 && !wishlistLoading && (
              <div className={`${styles.emptyWishlistWrapper} text-center`}>
                <Image
                  src={getImageUrl("wishlist/empty-wishlist.png")}
                  alt="Empty Wishlist"
                  width={325}
                  height={293}
                  className={styles.emptyWishlistImage}
                />
                <div className="pt-5 mt-lg-4 pb-lg-5 pb-4">
                  <span className="h4 black_text font_md d-inline-block pb-2 w-100">
                    Your wishlist is empty!!
                  </span>
                  <span className="h4 black_text font_md d-inline-block">
                    Shop now and add your favorite products to the wishlist.
                  </span>
                </div>
                <button
                  className="btn btn-gradient rounded-pill"
                  onClick={() => router.push("/cake-toppers/special-events")}
                >
                  SHOP NOW
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
