"use client";
import { FC, useEffect, useRef, useState } from "react";
import { usePlaceOrder } from "@/hooks/usePlaceOrder";
import { usePaypalCheckout } from "@/hooks";

export interface PaypalSuccessResponseProps {
  searchParams: {
    token: string;
    PayerID: string;
  };
}

export const PaypalSuccessResponse: FC<PaypalSuccessResponseProps> = ({
  searchParams,
}) => {
  const payerId = searchParams?.PayerID;
  const token = searchParams?.token;

  const { handlePlaceOrder } = usePlaceOrder();

  const { setTokenAndPayerIdOnCart } = usePaypalCheckout();

  const hasCalled = useRef(false);

  useEffect(() => {
    (async () => {
      if (token && payerId && !hasCalled.current) {
        hasCalled.current = true;
        try {
          const response = await setTokenAndPayerIdOnCart({ token, payerId });
          if (response) {
            await handlePlaceOrder();
          }
        } catch (error: any) {}
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payerId, token]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      {/* <LoadingIndicator size="xl" /> */}
      <div className="mt-4 d-flex justify-content-center">
        <span className="h5 text-center">
          {"Processing your payment, don't refresh the page"}
        </span>
      </div>
    </div>
  );
};
