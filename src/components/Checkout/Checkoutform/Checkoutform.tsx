"use client";
import React, { useEffect, useState } from "react";
import styles from "./Checkoutform.module.scss";
import Link from "next/link";
import { Queries } from "@/utils/graphql";
import { useLazyQuery } from "@apollo/client";
import { CheckoutContext, useCartContext } from "@/context";
import { Identification } from "../Identification";
import { ShippingDetails } from "../ShippingDetails";
import { OrderSummery } from "../OrderSummery";
import { PaymentDetails } from "../PaymentDetails";
import { useRouter } from "next/navigation";

export const Checkoutform = () => {
  const router = useRouter();

  const { CHECK_EMAIL_AVAILABLE } = Queries;
  const [checkIsEmailAvailable] = useLazyQuery(CHECK_EMAIL_AVAILABLE);
  const { cartDetails, cartId, cartLoading, refetchCartDetails } =
    useCartContext();

  const [isEmailAvailable, setIsEmailAvailable] = useState<boolean>(true);
  const [checkoutLoading, setCheckoutLoading] = useState<boolean>(true);

  const handleVerifyEmailAvailable = async (email: string) => {
    if (email) {
      const response = await checkIsEmailAvailable({
        variables: {
          email,
        },
      });

      if (response) {
        setIsEmailAvailable(
          response?.data?.isEmailAvailable?.is_email_available
        );
      }

      return response;
    }
  };

  useEffect(() => {
    (async () => {
      await handleVerifyEmailAvailable(cartDetails?.email);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartDetails?.email]);

  useEffect(() => {
    if (cartDetails) {
      setCheckoutLoading(false);
    }
  }, [cartDetails]);

  useEffect(() => {
    (async () => {
      await refetchCartDetails();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="checkout_form_section"
      className={`${styles.global_header_spacing}`}
    >
      <div className="pt-5 pb-5">
        <div className="container">
          <div className={`${styles.checkoutform_wrapper}`}>
            <button
              onClick={() => router.back()}
              className="h5 font_md d-flex gap-2 pb-4 mb-lg-1 d-flex align-items-center btn-transparent black-link-hover"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.355 27.1045L5.24998 17.9995L14.355 8.89449"
                  stroke="#292D32"
                  strokeWidth="2.7"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.7505 18L5.50549 18"
                  stroke="#292D32"
                  strokeWidth="2.7"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>
            <CheckoutContext.Provider
              value={{
                cartDetails,
                cartId,
                isEmailAvailable,
                cartLoading,
                refetchCartDetails,
                handleVerifyEmailAvailable,
                checkoutLoading,
              }}
            >
              <div className={`${styles.checkout_row} row`}>
                <div className="col-lg-7 col-12">
                  <div
                    className={`${styles.checkout_form} ${styles.checkout_card}`}
                  >
                    <Identification />

                    <div className={`${styles.form_divider}`}></div>
                    <ShippingDetails />

                    {/* Payment Details For Web */}
                    <PaymentDetails />
                  </div>
                </div>

                <div className="col-lg-5 col-12">
                  <OrderSummery />

                  {/* Payment Details For Mobile */}
                  <PaymentDetails isMobile={true} />
                </div>
              </div>
            </CheckoutContext.Provider>
          </div>
        </div>
      </div>
    </section>
  );
};
