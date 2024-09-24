"use client";

import Image from "next/image";
import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { useState } from "react";
import styles from "./ShoppingCart.module.scss";
import { ProductCounter } from "@/components/common";
import { DeleteIcon, EditIcon } from "@/assets/icons";
import { currencyFormatter } from "@/utils/helper";
import { BrowserPersistence, localStorageKeys } from "@/utils";
import { useCartItem, useDebouncedValue } from "@/hooks";
import { CartItemType } from "@/types";
import { useCartContext } from "@/context";
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";
import { CartEditModal } from "./CartEditModal";
import { getImageUrl } from "@/utils/imageHelper";

export interface ShoppingItemProps {
  cartItem: CartItemType;
  handleEditClick: (value?: any) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const ShoppingItem: FC<ShoppingItemProps> = ({
  cartItem,
  handleEditClick,
  setLoading,
}) => {
  const [productQty, setProductQty] = useState<number>(cartItem?.quantity);

  const [debouncedProductQty] = useDebouncedValue(productQty, 500);
  const {
    handleProductQty,
    handleRemoveFromCart,
    productRemoveLoading,
    productUpdateLoading,
  } = useCartItem();
  const router = useRouter();

  const storage = new BrowserPersistence();
  const cartId = storage.getItem(localStorageKeys.CART_ID);

  useEffect(() => {
    if (cartItem?.quantity) {
      setProductQty(cartItem?.quantity);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItem?.quantity]);

  useEffect(() => {
    const updateProductQty = async () => {
      if (debouncedProductQty !== cartItem?.quantity && cartItem?.uid) {
        await handleProductQty({
          input: {
            cart_id: cartId,
            cart_items: [
              {
                cart_item_uid: cartItem?.uid,
                quantity: debouncedProductQty,
              },
            ],
          },
        });
      }
    };

    if (debouncedProductQty !== null && debouncedProductQty > 0) {
      updateProductQty();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedProductQty, cartItem?.quantity, cartItem?.uid, cartId]);

  return (
    <div className={`${styles.shopping_bg_col}`}>
      <div className="row g-xxl-5 g-4 align-items-center">
        <div
          className={`col-xxl-6 col-xl-7 col-md-6 col-12 ${styles.shopping_bg_col1} d-flex align-items-center`}
        >
          <div
            className={styles.shopping_bg_img}
            onClick={() => router.push(`/${cartItem?.product?.url_key}`)}
          >
            <Image
              title="Cannellio cake toppers - Shopping bag image"
              className="w-100 h-100 hover-image-animation"
              src={cartItem?.product?.thumbnail?.url}
              alt={cartItem?.product?.thumbnail?.label ?? "Shopping bag image"}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.shopping_title}>
            <h2
              className="p black_text font_md cursor-pointer black-link-hover line-clamp line-clamp2 mb-1"
              onClick={() => router.push(`/${cartItem?.product?.url_key}`)}
            >
              {cartItem?.product.name}
            </h2>
            <span className="h6 black_text font_smb pt-2">
              <span className="black_shade5_text font_md">Image type:</span>{" "}
              PHYSICAL PRODUCT (Shipped to your door)
            </span>
            <div className="d-flex align-items-center gap-2 pt-xl-4 pt-3 mt-xl-1">
              <button
                className={styles.product_socialMedia}
                onClick={() => handleEditClick(cartItem.uid)}
              >
                <EditIcon
                  height={19}
                  width={19}
                  fill="white"
                  stroke="#F8F8F8"
                  strokeWidth={2}
                />
              </button>
              <button
                className={styles.product_socialMedia}
                onClick={() =>
                  handleRemoveFromCart({
                    cart_id: cartId,
                    cart_item_uid: cartItem.uid,
                  })
                }
              >
                <DeleteIcon
                  width={20}
                  height={20}
                  fill="white"
                  stroke="white"
                  strokeWidth={0.7}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={`col-md-2 col-4 text-start ${styles.shopping_bg_col2}`}>
          <span className="p font_smb black_text d-flex align-items-center gap-1">
            {currencyFormatter({
              currency: cartItem?.prices?.price?.currency,
              number: cartItem?.prices?.price?.value ?? 0,
            })}
          </span>
        </div>
        <div
          className={`col-xxl-2 col-xl-1 col-md-2 col-4 d-flex align-items-center justify-content-center ${styles.shopping_bg_col3}`}
        >
          <ProductCounter
            productQty={productQty}
            setProductQty={setProductQty}
          />
        </div>
        <div className={`col-md-2 col-4 text-end ${styles.shopping_bg_col4}`}>
          <span className="p font_smb black_text d-flex align-items-center gap-1 justify-content-end">
            {currencyFormatter({
              currency: cartItem?.prices?.price?.currency,
              number:
                productQty * cartItem?.prices?.price?.value
                  ? productQty * cartItem?.prices?.price?.value
                  : 0,
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export const ShoppingBag = () => {
  const [show, setShow] = useState(false);
  const [selectedItemUid, setSelectedItemUid] = useState(null);
  const { cartDetails } = useCartContext();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleEditClick = (uid: any) => {
    setSelectedItemUid(uid);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedItemUid(null);
  };

  return (
    <section className={`${styles.shopping_bag_section} common-padding-t`}>
      {cartDetails?.items.length === 0 ? (
        <div className={`${styles.emptyOrderWrapper} text-center py-4`}>
          <Image
            src={getImageUrl("my-profile-page/empty-order.png")}
            alt=""
            title=""
            width={230}
            height={220}
            className={`${styles.emptyOrderImage}`}
          />
          <div className="pt-4 pb-xl-4 pb-3">
            <span className="h5 black_text font_md">
              look like you have not <br />
              made your choice yet...
            </span>
          </div>
          <Link href="/" className="btn btn-primary rounded-pill">
            SHOP NOW
          </Link>
        </div>
      ) : (
        <>
          <div className="container">
            <div
              className={`${styles.shopping_bag_header} main-title d-flex flex-md-row flex-column align-items-md-center justify-content-between gap-3`}
            >
              {!cartDetails ? (
                <h2 className="h5 black_text font_md">
                  <span className="primary_dark_text font_smb">
                    <Skeleton width={300} />
                  </span>
                </h2>
              ) : (
                <h2 className="h5 black_text font_md">
                  Shopping cart{" "}
                  <span className="primary_dark_text font_smb">
                    (Your cart: {cartDetails && cartDetails.items.length} Item)
                  </span>
                </h2>
              )}
              <div className="d-flex gap-md-3 gap-2">
                <button
                  className={`btn btn-gradient rounded-pill ${styles.shopping_bag_btn}`}
                  onClick={() => router.push("/")}
                >
                  Continue shopping
                </button>
              </div>
            </div>
            <div className={`${styles.shopping_bag_row}`}>
              <div className={`${styles.shopping_bg_col_hd}`}>
                <div className="row g-md-5 g-0">
                  <div className="col-xxl-6 col-xl-7 col-md-6 col-12">
                    <span className="h5 black_text font_smb">Products</span>
                  </div>
                  <div className="col-2 text-start d-md-block d-none">
                    <span className="h5 black_text font_smb">Price</span>
                  </div>
                  <div className="col-xxl-2 col-xl-1 col-2 text-center d-md-block d-none">
                    <span className="h5 black_text font_smb">Qty.</span>
                  </div>
                  <div className="col-2 text-end d-md-block d-none">
                    <span className="h5 black_text font_smb">Total</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.shopping_bg_col_bd}`}>
                {loading || !cartDetails
                  ? Array.from({ length: cartDetails?.items.length || 2 }).map(
                      (_, index) => (
                        <div
                          key={index}
                          className={`${styles.shopping_bg_col}`}
                        >
                          <div className="row g-xxl-5 g-4 align-items-center">
                            <div
                              className={`col-xxl-6 col-xl-7 col-md-6 col-12 ${styles.shopping_bg_col1} d-flex align-items-center`}
                            >
                              <div className={styles.shopping_bg_img}>
                                <Skeleton width={230} height={230} />
                              </div>
                              <div className={styles.shopping_title}>
                                <h2 className="p black_text font_md cursor-pointer black-link-hover line-clamp line-clamp2 mb-1">
                                  <Skeleton width={300} />
                                </h2>
                                <span className="h6 black_text font_smb pt-2">
                                  <Skeleton width={200} />
                                </span>
                                <div className="d-flex align-items-center gap-2 pt-xl-4 pt-3 mt-xl-1">
                                  <Skeleton
                                    circle={true}
                                    height={24}
                                    width={24}
                                    className={`${styles.skeleton_like} `}
                                  />
                                  <Skeleton
                                    circle={true}
                                    height={24}
                                    width={24}
                                    className={`${styles.skeleton_like} `}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className={`col-md-2 col-4 text-start ${styles.shopping_bg_col2}`}
                            >
                              <span className="p font_smb black_text d-flex align-items-center gap-1">
                                <Skeleton width={65} />
                              </span>
                            </div>
                            <div
                              className={`col-xxl-2 col-xl-1 col-md-2 col-4 d-flex align-items-center justify-content-center ${styles.shopping_bg_col3}`}
                            >
                              <Skeleton
                                borderRadius={100}
                                width={130}
                                height={50}
                              />
                            </div>
                            <div
                              className={`col-md-2 col-4 text-end ${styles.shopping_bg_col4}`}
                            >
                              <span className="p font_smb black_text d-flex align-items-center gap-1 justify-content-end">
                                <Skeleton width={65} />
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )
                  : cartDetails?.items.map((item, index) => (
                      <ShoppingItem
                        key={index}
                        cartItem={item}
                        handleEditClick={handleEditClick}
                        setLoading={setLoading}
                      />
                    ))}
              </div>
              <div className={`${styles.shopping_bg_col_ft}`}>
                <div className="row g-xl-5 g-4 justify-content-between">
                  <div className="col-lg-6 col-12"></div>
                  <div className="col-xl-5 col-lg-6 col-12">
                    <div className="d-flex align-items-center justify-content-between pb-1">
                      <span className="p font_md black_text">Subtotal</span>
                      {!cartDetails ? (
                        <span className="p font_md black_text d-flex align-items-center gap-1 justify-content-center">
                          <Skeleton width={65} />
                        </span>
                      ) : (
                        <span className="p font_md black_text d-flex align-items-center gap-1 justify-content-center">
                          {currencyFormatter({
                            currency:
                              cartDetails?.prices?.subtotal_excluding_tax
                                ?.currency,
                            number:
                              cartDetails?.prices?.subtotal_excluding_tax
                                ?.value ?? 0,
                          })}
                        </span>
                      )}
                    </div>
                    <div className="d-flex align-items-center justify-content-between pb-1">
                      <span className="p font_md black_text">
                        Shipping and handling
                      </span>
                      {!cartDetails ? (
                        <span className="p font_md black_text d-flex align-items-center gap-1 justify-content-center">
                          <Skeleton width={65} />
                        </span>
                      ) : (
                        <span className="p font_md black_text d-flex align-items-center gap-1 justify-content-center">
                          {currencyFormatter({
                            currency:
                              cartDetails?.prices?.estimatedShipping?.amount
                                ?.currency,
                            number:
                              cartDetails?.prices?.estimatedShipping?.amount
                                ?.value || 0,
                          })}
                        </span>
                      )}
                    </div>
                    {cartDetails?.prices?.discount && (
                      <div className="d-flex align-items-center justify-content-between pb-1">
                        <span className="p font_md black_text">Discount</span>
                        <span className="p font_md black_text d-flex align-items-center gap-1 justify-content-center">
                          {currencyFormatter({
                            currency:
                              cartDetails?.prices?.discount?.amount?.currency,
                            number:
                              cartDetails?.prices?.discount?.amount?.value || 0,
                          })}
                        </span>
                      </div>
                    )}
                    <div
                      className={`${styles.shopping_bg_subtotal} d-flex align-items-center justify-content-between`}
                    >
                      <span className="h5 font_smb black_text">Subtotal :</span>
                      {!cartDetails ? (
                        <span className="h5 font_smb black_text d-flex align-items-center gap-1 justify-content-center">
                          <Skeleton width={65} />
                        </span>
                      ) : (
                        <span className="h5 font_smb black_text d-flex align-items-center gap-1 justify-content-center">
                          {currencyFormatter({
                            currency:
                              cartDetails?.prices?.grand_total?.currency,
                            number:
                              cartDetails?.prices?.grand_total?.value ?? 0,
                          })}
                        </span>
                      )}
                    </div>
                    <button
                      className="btn btn-gradient w-100 mt-4"
                      onClick={() => router.push("/checkout")}
                    >
                      CHECK OUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CartEditModal
            show={show}
            handleClose={handleClose}
            selectedItemUid={selectedItemUid}
          />
        </>
      )}
    </section>
  );
};
