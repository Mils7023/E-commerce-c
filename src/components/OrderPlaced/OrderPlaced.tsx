"use client";
import Image from "next/image";
import React, { FC, useEffect } from "react";
import styles from "./OrderPlaced.module.scss";
import { useCartContext } from "@/context";
import { cookiePersist } from "@/utils/helper";
import { cookieStorageKey } from "@/utils";
import { useRouter } from "next/navigation";
import { useLazyQuery } from "@apollo/client";
import { Queries } from "@/utils/graphql";
import { getImageUrl } from "@/utils/imageHelper";

export interface OrderPlacedProps {
  searchParams: {
    token: string;
  };
}

export const OrderPlaced: FC<OrderPlacedProps> = ({ searchParams }) => {
  const { createCart } = useCartContext();
  const router = useRouter();
  const { GET_THANK_YOU_PAGE_DETAILS } = Queries;

  const [
    getThankyouDetails,
    { data: thankyouDetails, loading: thankyouLoading },
  ] = useLazyQuery(GET_THANK_YOU_PAGE_DETAILS);

  useEffect(() => {
    if (searchParams) {
      (async () => {
        await getThankyouDetails({
          variables: {
            input: {
              orderid: searchParams.token,
            },
          },
        });
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    (async () => {
      await createCart();
      cookiePersist.setItem(cookieStorageKey.IS_PLACE_ORDER, false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="order-confirm-section"
      className={`${styles.global_header_spacing}`}
    >
      <div
        className={`${styles.order_confirm_main} common-padding-t common-padding-b `}
      >
        <div className="container">
          <div
            className={`${styles.order_confirm_container} d-flex align-items-center flex-column`}
          >
            <Image
              src={getImageUrl('order-placed-page/order-confirm-image.png')}
              alt="order confirm"
              title="Cannellio Cake Toppers - order confirm"
              width={328}
              height={358}
              className={`${styles.order_confirm_image_src}`}
            />
            <div className="text-center pt-4 pt-md-5 mt-lg-1">
              <p className="h3 font_bl primary_text">THANK YOU</p>
              <p className="h3 font_bl primary_text py-2 py-md-3 py-lg-4">
                YOUR ORDER IS CONFIRMED
              </p>
              <p className="h4 font_md black_text">
                {/* We will be sending you an email confirmation to
                jacobmartin@hotmail.com shortly */}
                {` We will be sending you an email confirmation to ${thankyouDetails?.getThankyouPageDetails?.userEmail} shortly`}
              </p>
            </div>
            <div className="pt-4 pt-md-5 mt-lg-4 d-flex justify-content-center">
              <button
                className={`btn-gradient btn rounded-pill h5 font_smb`}
                onClick={() => router.push("./")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
