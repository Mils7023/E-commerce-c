"use client";

import { CheckoutContext } from "@/context";
import { FC, useContext, useEffect, useState } from "react";
import styles from "../Checkoutform/Checkoutform.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Form } from "@/components/common";
import { Input } from "@/components/core";
import { discountSchema } from "@/utils";
import { currencyFormatter } from "@/utils/helper";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Mutations } from "@/utils/graphql";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";

export interface OrderSummeryProps {}
export interface DiscountFormValue {
  discount: string;
}

export const OrderSummery: FC<OrderSummeryProps> = () => {
  const {
    cartId,
    cartDetails,
    cartLoading,
    checkoutLoading,
    refetchCartDetails,
  } = useContext(CheckoutContext);

  const handleDiscount = () => {};

  const { APPLY_COUPON_TO_CART, REMOVE_COUPON_CODE_FROM_CART } = Mutations;
  const [applyCouponToCart, { loading: applyCouponToCartLoading }] =
    useMutation(APPLY_COUPON_TO_CART);
  const [removeCouponFromCart, { loading: removeCouponLoading }] = useMutation(
    REMOVE_COUPON_CODE_FROM_CART
  );
  const [code, setCode] = useState<string>("");
  const [hasCoupon, setHasCoupon] = useState<boolean>(false);
  const loading =
    applyCouponToCartLoading || removeCouponLoading || cartLoading;

  const handleApplyCouponCode = async (code: string) => {
    const payload = {
      cartId,
      code,
    };

    try {
      if (code) {
        const response = await applyCouponToCart({ variables: payload });
        if (response) {
          await refetchCartDetails();
          toast.success("Coupon Applied");
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleRemoveCouponCode = async () => {
    try {
      if (code) {
        const response = await removeCouponFromCart({
          variables: {
            input: {
              cart_id: cartId,
            },
          },
        });
        if (response) {
          await refetchCartDetails();
          setCode("");
          setHasCoupon(false);
          toast.success("Coupon Removed");
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const handleCouponAction = () => {
    if (hasCoupon) {
      handleRemoveCouponCode();
    } else {
      handleApplyCouponCode(code);
    }
  };

  useEffect(() => {
    if (
      Array.isArray(cartDetails?.applied_coupons) &&
      cartDetails?.applied_coupons[0]?.code
    ) {
      setCode(cartDetails?.applied_coupons[0]?.code);
      setHasCoupon(true);
    }
  }, [cartDetails]);

  return (
    <div
      className={`${styles.checkout_orders} ${styles.checkout_card} mt-lg-0 mt-4`}
    >
      <div>
        <span className="h5 black_text font_md">
          {checkoutLoading ? (
            <Skeleton width={150} />
          ) : (
            `ORDERS & DISCOUNT (${cartDetails?.items?.length} item)`
          )}
        </span>
      </div>
      <div className="v_divider"></div>

      <div
        className={`${styles.checkout_orders_row} d-flex flex-column gap-lg-4 gap-3 ps-1 mt-3 mb-2 pb-1 h-scrollbar`}
      >
        {checkoutLoading
          ? [...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`${styles.checkout_order_col} d-flex`}
              >
                <Skeleton
                  height={100}
                  width={100}
                  className={styles.checkout_order_image}
                />
                <div
                  className={`${styles.checkout_order_content} d-flex flex-column justify-content-between`}
                >
                  <Skeleton width={200} height={20} />
                  <Skeleton width={80} height={15} />
                </div>
              </div>
            ))
          : cartDetails?.items?.map((item, index) => (
              <div
                key={index}
                className={`${styles.checkout_order_col} d-flex`}
              >
                <div className={`${styles.checkout_order_image}`}>
                  <Image
                    src={item?.product?.thumbnail?.url}
                    alt="Order product image"
                    title="Order product image"
                    className="w-100 h-100 object-cover hover-image-animation"
                    height={100}
                    width={100}
                  />
                </div>
                <div
                  className={`${styles.checkout_order_content} d-flex flex-column justify-content-between`}
                >
                  <div className="d-flex gap-2 justify-content-between">
                    <Link
                      href=""
                      className="font-16 black_text font_smb line-clamp line-clamp3"
                    >
                      {item?.product?.name}
                    </Link>
                    <span className="font-16 black_text font_smb text-nowrap">
                      {currencyFormatter({
                        number: item?.prices?.price?.value ?? 0,
                        currency: item?.prices?.price?.currency,
                      })}
                    </span>
                  </div>
                  <p className="black_shade5_text font-16 font_md">
                    Qty : {`${item?.quantity}x`}
                  </p>
                </div>
              </div>
            ))}
      </div>

      <div className="v_divider"></div>

      <div className="pt-md-4 pt-3">
        {checkoutLoading ? (
          <Skeleton height={45} width="100%" />
        ) : (
          <Form<DiscountFormValue>
            onSubmit={handleDiscount}
            schema={discountSchema}
            className="pb-3"
          >
            <div className="form-group d-flex gap-2 w-100">
              <Input
                type="text"
                name="discount"
                // className="h-100"
                placeholder="Discount code"
                formGroupClass="w-100"
                onChange={(e: any) => setCode(e.target.value)}
                value={code}
                disabled={hasCoupon}
              />
              <button
                type="submit"
                className={`btn ${styles.discountBtn} btn-gradient btn-primary-md font_rg d-flex justify-content-center align-items-center`}
                onClick={handleCouponAction}
              >
                {loading ? "Loading..." : hasCoupon ? "Remove" : "Apply"}
              </button>
            </div>
          </Form>
        )}
        <div className="d-flex align-items-center justify-content-between pb-1">
          <span className={`font_18 font_md black_text`}>Subtotal</span>
          <span
            className={`font_18 font_md black_text d-flex align-items-center gap-1 justify-content-center`}
          >
            {checkoutLoading ? (
              <Skeleton width={80} />
            ) : (
              currencyFormatter({
                currency: cartDetails?.prices?.subtotal_excluding_tax?.currency,
                number: cartDetails?.prices?.subtotal_excluding_tax?.value ?? 0,
              })
            )}
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between pb-1">
          <span className={`font_18 font_md black_text`}>Shipping</span>
          <span
            className={`font_18 font_md black_text d-flex align-items-center gap-1 justify-content-center`}
          >
            {checkoutLoading ? (
              <Skeleton width={80} />
            ) : (
              currencyFormatter({
                currency:
                  cartDetails?.prices?.estimatedShipping?.amount?.currency,
                number:
                  cartDetails?.prices?.estimatedShipping?.amount?.value || 0,
              })
            )}
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between pb-1">
          <span className={`font_18 font_md black_text`}>Tax and handling</span>
          <span
            className={`font_18 font_md black_text d-flex align-items-center gap-1 justify-content-center`}
          >
            {checkoutLoading ? <Skeleton width={80} /> : "£ 00"}
          </span>
        </div>
        {cartDetails?.prices?.discount && (
          <div className="d-flex align-items-center justify-content-between pb-1">
            <span className={`font_18 font_md black_text`}>
              Discount
              {/* {cartDetails?.prices?.discount?.label?.map((code) => code)}) */}
            </span>
            <span
              className={`font_18 font_md black_text d-flex align-items-center gap-1 justify-content-center`}
            >
              {checkoutLoading ? (
                <Skeleton width={80} />
              ) : (
                currencyFormatter({
                  currency: cartDetails?.prices?.discount?.amount?.currency,
                  number: cartDetails?.prices?.discount?.amount?.value ?? 0,
                })
              )}
            </span>
          </div>
        )}
        <span className="font-16 black_text">
          ({cartDetails?.prices?.discount?.label.join(", ")})
        </span>
        <div className="v_divider"></div>
        <div
          className={`d-flex align-items-center justify-content-between pt-sm-3 pt-2`}
        >
          <span className="h5 font_smb black_text">Total</span>
          <span className="h5 font_smb black_text d-flex align-items-center gap-1 justify-content-center">
            {checkoutLoading ? (
              <Skeleton width={80} />
            ) : (
              currencyFormatter({
                currency: cartDetails?.prices?.grand_total?.currency,
                number: cartDetails?.prices?.grand_total?.value ?? 0,
              })
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
