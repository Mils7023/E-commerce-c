"use client";

import { FC, Fragment, useContext, useEffect, useMemo, useState } from "react";
import styles from "../Checkoutform/Checkoutform.module.scss";
import { CommonShimmer, Form } from "@/components/common";
import { paymentMethodFormSchema, shippingMethodFormSchema } from "@/utils";
import { CategoryRadio, Checkbox, RadioGroup } from "@/components/core";
import { Mutations, Queries } from "@/utils/graphql";
import { useLazyQuery, useMutation } from "@apollo/client";
import { CheckoutContext } from "@/context";
import { PaypalExpress } from "./PaypalExpress";
import { usePlaceOrder } from "@/hooks";

export interface AvailablePaymentMethod {
  code: string;
  title: string;
}

export interface PaymentDetailsProps {
  isMobile?: boolean;
}
export interface ShippingMethodFormValue {}
export interface PaymentMethodFormValue {}

const shippingOption = [
  {
    label: "Standard shipping",
  },
  {
    label: "Priority shipping",
  },
];

const paymentOptions = [
  {
    label: "Credit/Debit Card",
  },
  {
    label: "PayPal Express Checkout",
  },
  {
    label: "Google Pay",
  },
  {
    label: "Amazonpay",
  },
];

export interface PaymentMethodRenderProps {
  paymentMethod: string;
}

const PaymentMethodRender: FC<PaymentMethodRenderProps> = ({
  paymentMethod,
}) => {
  if (!paymentMethod) {
    return <Fragment></Fragment>;
  }

  return (
    <Fragment>
      {paymentMethod === "paypal_express" ? (
        <PaypalExpress />
      ) : (
        paymentMethod === "cashondelivery" && ""
      )}
    </Fragment>
  );
};

export const PaymentDetails: FC<PaymentDetailsProps> = ({
  isMobile = false,
}) => {
  const [showPayment, setShowPayment] = useState(false);
  const { GET_PAYMENT_METHODS, GET_EXTRA_PM_DETAILS } = Queries;
  const { SET_PAYMENT_METHOD } = Mutations;
  const [
    getPaymentMethod,
    { data: paymentMethod, loading: paymentMethodLoading },
  ] = useLazyQuery(GET_PAYMENT_METHODS);
  const [setPaymentMethod, { loading: setPaymentLoading }] =
    useMutation(SET_PAYMENT_METHOD);

  const {
    cartId,
    cartDetails,
    cartLoading,
    checkoutLoading,
    refetchCartDetails,
  } = useContext(CheckoutContext);
  const { handlePaymentRedirection, placeOrderLoading } = usePlaceOrder();

  useEffect(() => {
    (async () => {
      await getPaymentMethod({ variables: { cartId } });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetPaymentMethod = async (value: string) => {
    // setPaymentLoading(true)
    try {
      const response = await setPaymentMethod({
        variables: {
          code: value,
          cartId,
        },
      });
      if (response) {
        await refetchCartDetails();
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const availablePaymentMethod: AvailablePaymentMethod[] = useMemo(
    () => paymentMethod?.cart?.available_payment_methods,
    [paymentMethod?.cart?.available_payment_methods]
  );

  const paymentItems = availablePaymentMethod?.map((x) => {
    return { label: x.title, value: x.code };
  });

  const currentPaymentMethod = useMemo(
    () => paymentMethod?.cart?.selected_payment_method?.code,
    [paymentMethod?.cart?.selected_payment_method?.code]
  );

  const handleChange = () => {};

  useEffect(() => {
    if (
      cartDetails?.email &&
      cartDetails?.shipping_addresses?.length > 0 &&
      cartDetails?.billing_address
    ) {
      setShowPayment(true);
    }
  }, [cartDetails]);

  const isStepCompleted = !!(
    cartDetails?.email &&
    cartDetails?.shipping_addresses?.length > 0 &&
    cartDetails?.billing_address &&
    currentPaymentMethod
  );

  return (
    showPayment && (
      <Fragment>
        {isMobile ? (
          <div
            className={`${styles.checkout_form} ${styles.checkout_card} mt-4 d-lg-none`}
          >
            {/* PAYMENT METHOD CODE */}
            <div className={`${styles.checkout_method}`}>
              <p className="h5 font_md black_text pb-lg-4 pb-3">PAYMENT</p>
              {checkoutLoading ? (
                <CommonShimmer flag="paymentMethod" />
              ) : (
                <RadioGroup
                  defaultValue={currentPaymentMethod}
                  items={paymentItems ?? []}
                  name="payment-method"
                  onChange={(value) => handleSetPaymentMethod(value)}
                />
              )}
            </div>
            <Fragment>
              {!setPaymentLoading &&
                !cartLoading &&
                cartDetails?.selected_payment_method?.code && (
                  <PaymentMethodRender
                    paymentMethod={currentPaymentMethod ?? ""}
                  />
                )}
            </Fragment>
            <div className={`${styles.form_divider}`}></div>
            {/* REMEMBER ME CODE */}
            <div className={`${styles.checkout_method}`}>
              <p className="h5 font_md black_text pb-lg-4 pb-3">REMEMBER ME</p>
              <Form<PaymentMethodFormValue>
                className=""
                onSubmit={handleChange}
                schema={paymentMethodFormSchema}
              >
                <div>
                  <Checkbox
                    key={1}
                    id="address"
                    onChange={() => handleChange()}
                    label="Save my information for a faster checkout with a Shop account"
                    name="address"
                    color="primary"
                    value=""
                    defaultChecked
                  />
                </div>
              </Form>
            </div>
            <button className="btn btn-gradient w-100 mt-4">PLACE ORDER</button>
          </div>
        ) : (
          <div className="d-lg-block d-none">
            <div className={`${styles.form_divider}`}></div>

            {/* PAYMENT METHOD CODE */}
            <div className={`${styles.checkout_method}`}>
              <p className="h5 font_md black_text pb-lg-4 pb-3">PAYMENT</p>

              {checkoutLoading || setPaymentLoading || cartLoading ? (
                <CommonShimmer flag="paymentMethod" />
              ) : (
                <RadioGroup
                  defaultValue={currentPaymentMethod ?? ""}
                  items={paymentItems ?? []}
                  name="payment-method"
                  onChange={(value) => handleSetPaymentMethod(value)}
                />
              )}
              <Fragment>
                {!setPaymentLoading &&
                  !cartLoading &&
                  cartDetails?.selected_payment_method?.code && (
                    <PaymentMethodRender
                      paymentMethod={currentPaymentMethod ?? ""}
                    />
                  )}
              </Fragment>
            </div>
            <div className={`${styles.form_divider}`}></div>
            {/* REMEMBER ME CODE */}
            <div className={`${styles.checkout_method}`}>
              <p className="h5 font_md black_text pb-lg-4 pb-3">REMEMBER ME</p>
              <Form<PaymentMethodFormValue>
                className=""
                onSubmit={handleChange}
                schema={paymentMethodFormSchema}
              >
                <div>
                  <Checkbox
                    key={1}
                    id="address"
                    onChange={() => handleChange()}
                    label="Save my information for a faster checkout with a Shop account"
                    name="address"
                    color="primary"
                    value=""
                    defaultChecked
                  />
                </div>
              </Form>
            </div>
            <button
              onClick={async () =>
                await handlePaymentRedirection(currentPaymentMethod)
              }
              className="btn btn-gradient w-100 mt-4"
              disabled={!isStepCompleted}
            >
              {placeOrderLoading ? "Loading..." : "PLACE ORDER"}
            </button>
          </div>
        )}
      </Fragment>
    )
  );
};
