"use client";

import Image from "next/image";
import { FC, useEffect, useMemo } from "react";

import styles from "./ProductCard.module.scss";
import { FetchWishlist, Product } from "@/types";
import { useRouter } from "next/navigation";
import { Queries } from "@/utils/graphql";
import { useLazyQuery } from "@apollo/client";
import { FavoriteToggle } from "../FavoriteToggle";
import { useWishlist } from "@/hooks";
import { getImageUrl } from "@/utils/imageHelper";

export interface ProductCardProps {
  product: Product;
  isSuperhero?: boolean;
  wishlist?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({ product, isSuperhero }) => {
  const router = useRouter();
  const finalPrice =
    product.price_range?.minimum_price?.final_price?.value ||
    product.productPrice;
  const currency =
    product.price_range?.minimum_price?.final_price?.currency || "Pound";
  const imageUrl = product.small_image?.url || product.productImage;
  const productName = product.name || "";
  const imageAlt = product.small_image?.label || productName;
  const rating = product.rating_summary || 4.5;

  // For Superhero
  const price = product.price_range?.minimum_price?.final_price?.value || 0;
  const thumbnailUrl = product.thumbnail?.url || "";
  const hoverImageUrl =
    product.media_gallery_entries?.find((entry) => {
      return Array.isArray(entry.types) && entry.types.includes("hover_image");
    })?.file || "";

  const { GET_CUSTOMER_WISHLIST } = Queries;
  const [
    getCustomerWishlist,
    { data: wishlistData, loading: wishlistLoading },
  ] = useLazyQuery<FetchWishlist>(GET_CUSTOMER_WISHLIST, {
    variables: {
      currentPage: 1,
      pageSize: 20,
    },
  });

  const wishlist = wishlistData?.customer?.wishlist_v2;

  const currentWishlistItem = useMemo(
    () =>
      wishlist?.items_v2?.items.find((x) => x.product?.sku === product?.sku),
    [product?.sku, wishlist?.items_v2?.items]
  );

  useEffect(() => {
    (async () => {
      await getCustomerWishlist();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isSuperhero ? (
        <div
          className={`col-lg-4 col-sm-6 col-12 ${styles.superheroes_products_col_wrapper}`}
        >
          <div
            className={`${styles.superheroes_products_col} p_cards_lg_col position-relative`}
          >
            <Image
              src={hoverImageUrl}
              alt="Superhero 1"
              title="Cannellio Cake Toppers - Superhero 1"
              width={486}
              height={700}
              className={`${styles.superheroes_image} w-100`}
            />
            <div
              className={`${styles.superheroes_products_touch} position-absolute d-flex align-items-center justify-content-center`}
            >
              <Image
                src={getImageUrl("superheros/touch-icon.png")}
                alt="TouchIcon"
                title="Cannellio Cake Toppers - TouchIcon"
                width={30}
                height={36}
              />
            </div>
            <div
              className={`${styles.superheroes_products_hover_col}  p_cards position-absolute top-0 bottom-0 start-0 end-0`}
              // onClick={() => router.push(`/${product.url_key}`)}
            >
              <div className="overflow-hidden">
                <Image
                  src={thumbnailUrl}
                  width={357}
                  height={375}
                  alt={productName}
                  title="Cannellio Cake Toppers - Product"
                  className={`${styles.superhero_hover_card_image} p_card_image`}
                />
              </div>
              <div className="p_card_content">
                <div className="p_card_content_head">
                  <span
                    className="p_card_title  line-clamp line-clamp2"
                    onClick={() => router.push(`/${product.url_key}`)}
                  >
                    {productName}
                  </span>
                  {/* <button className="p_card_like">
                    <Image
                      src={LikeProduct}
                      width={20}
                      height={20}
                      alt="Product wishlist Image"
                      title="Cannellio Cake Toppers - Product wishlist"
                    />
                  </button> */}
                  <FavoriteToggle
                    product={product!}
                    currentWishlistItem={currentWishlistItem}
                    loading={wishlistLoading}
                    buttonClass="p_card_like"
                  />
                </div>
                <div className="p_card_content_body d-flex align-items-center justify-content-between">
                  <div className="p_card_review gap-xxl-2 gap-1 d-flex align-items-center">
                    <span className="p_card_review_text">{rating}</span>
                    <Image
                      src={getImageUrl("review-star.png")}
                      width={18}
                      height={18}
                      alt="Product Review Image"
                      className="p_card_review_icon"
                      title="Cannellio Cake Toppers - Product Review"
                    />
                  </div>
                  <div className="p_card_btn">
                    <button
                      className="btn product_btn"
                      onClick={() => router.push(`/${product.url_key}`)}
                    >
                      <Image
                        src={getImageUrl("products/add-to-bag-icon.png")}
                        width={24}
                        height={27}
                        alt="Add To Cart Image"
                        title="Cannellio Cake Toppers - Add To Cart"
                      />
                      View Product{" "}
                      <span className="p_card_amount d-flex align-items-center gap-1">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 14 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.268066 15L1.36799 14.633C1.91896 14.4487 2.39814 14.0953 2.73765 13.6227C3.07717 13.1501 3.2598 12.5824 3.25969 12V4.942C3.25969 3.89652 3.67384 2.89385 4.41105 2.15459C5.14825 1.41532 6.14811 1 7.19067 1H8.05326C9.67571 1 11.1336 1.99 11.7359 3.5M2.76108 13.5H3.84205C4.77079 13.4999 5.6868 13.7166 6.51756 14.133L6.56742 14.158C7.39815 14.5745 8.31416 14.7913 9.24292 14.7913C10.1717 14.7913 11.0877 14.5745 11.9184 14.158L13.2318 13.5M0.76667 8H8.74432"
                            stroke="#F8F8F8"
                          />
                        </svg>
                        {price}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.products_col} p_cards`}>
          <div
            className="overflow-hidden position-relative"
            onClick={() => router.push(`/${product.url_key}`)}
          >
            {/* REMOVE PRODUCT TO HERE */}
            {/* {wishlist && (
              <div
                className={`${styles.removeProduct} d-flex align-items-center position-absolute justify-content-center`}
              >
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17C15 17.7956 14.6839 18.5587 14.1213 19.1213C13.5587 19.6839 12.7956 20 12 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V5H1V2H5.5L6.5 1H10.5L11.5 2H16V5H15V17ZM3 5V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H12C12.5304 19 13.0391 18.7893 13.4142 18.4142C13.7893 18.0391 14 17.5304 14 17V5H3ZM15 4V3H11L10 2H7L6 3H2V4H15ZM5 7H6V17H5V7ZM11 7H12V17H11V7Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
            )} */}
            {imageUrl ? (
              <Image
                src={imageUrl}
                width={357}
                height={375}
                alt={imageAlt}
                title={productName}
                className="p_card_image"
              />
            ) : (
              <div className="p_card_image-placeholder">
                Image Not Available
              </div>
            )}
          </div>
          <div className="p_card_content">
            <div className="p_card_content_head">
              <span
                className="p_card_title line-clamp line-clamp2"
                onClick={() => router.push(`/${product.url_key}`)}
              >
                {productName}
              </span>
              {/* <button className="p_card_like"> */}
              {/* <Image
                  src={LikeProduct}
                  width={20}
                  height={20}
                  alt="Add to Wishlist"
                  title="Add to Wishlist"
                /> */}
              <FavoriteToggle
                product={product!}
                currentWishlistItem={currentWishlistItem}
                loading={wishlistLoading}
                buttonClass="p_card_like"
              />
              {/* </button> */}
            </div>
            <div className="p_card_content_body d-flex align-items-center justify-content-between">
              <div className="p_card_review gap-xxl-2 gap-1 d-flex align-items-center">
                <span className="p_card_review_text">{rating}</span>
                <Image
                  src={getImageUrl("review-star.png")}
                  width={18}
                  height={18}
                  alt="Review Stars"
                  title="Product Review"
                  className="p_card_review_icon"
                />
              </div>
              <div className="p_card_btn">
                <button
                  className="btn product_btn"
                  onClick={() => router.push(`/${product.url_key}`)}
                >
                  <Image
                    src={getImageUrl("products/add-to-bag-icon.png")}
                    width={24}
                    height={27}
                    alt="Add to Cart"
                    title="Add to Cart"
                  />
                  View Product{" "}
                  <span className="p_card_amount d-flex align-items-center gap-1">
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.268066 15L1.36799 14.633C1.91896 14.4487 2.39814 14.0953 2.73765 13.6227C3.07717 13.1501 3.2598 12.5824 3.25969 12V4.942C3.25969 3.89652 3.67384 2.89385 4.41105 2.15459C5.14825 1.41532 6.14811 1 7.19067 1H8.05326C9.67571 1 11.1336 1.99 11.7359 3.5M2.76108 13.5H3.84205C4.77079 13.4999 5.6868 13.7166 6.51756 14.133L6.56742 14.158C7.39815 14.5745 8.31416 14.7913 9.24292 14.7913C10.1717 14.7913 11.0877 14.5745 11.9184 14.158L13.2318 13.5M0.76667 8H8.74432"
                        stroke="#F8F8F8"
                      />
                    </svg>
                    {finalPrice}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
