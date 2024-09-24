"use client";
import { FC, useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useRouter } from "next/navigation";
import { useLazyQuery } from "@apollo/client";
import { Queries } from "@/utils/graphql";
import { usePlaceOrder } from "@/hooks";

export interface PaypalExpressProps {}

const style = { layout: "vertical" };

const ButtonWrapper = ({ showSpinner, getToken }: any) => {
  const router = useRouter();
  const [{ isPending }] = usePayPalScriptReducer();

  const createOrder = async (
    data: Record<string, any>,
    actions: Record<string, any>
  ) => {
    if (process.env.NODE_ENV === "development") {
      console.log("on create the order---");
    }
    const token = await getToken();
    return token;
  };

  const onApprove = async (
    data: Record<string, any>,
    actions: Record<string, any>
  ) => {
    if (process.env.NODE_ENV === "development") {
      console.log("on approve the order---");
    }

    router.push(
      `/paypal/express/success?token=${data?.orderID}&PayerID=${data?.payerID}`
    );
  };

  return (
    <>
      {showSpinner && isPending && <p>Loading...</p>}
      <PayPalButtons
        style={{ layout: "vertical" }}
        disabled={false}
        forceReRender={[style]}
        fundingSource={undefined}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </>
  );
};

export const PaypalExpress: FC<PaypalExpressProps> = () => {
  const [paypalOption, setPaypalOption] = useState<any>(null);
  const { GET_EXTRA_PM_DETAILS } = Queries;
  const { createPaypalTokenOnCart } = usePlaceOrder();

  const [
    getExtraPaymentMethod,
    { data: extraPaymentMethod, loading: extraPaymentMethodLoading },
  ] = useLazyQuery(GET_EXTRA_PM_DETAILS);

  const getToken = async () => {
    try {
      const response = await createPaypalTokenOnCart();

      if (response) {
        return response?.token;
      }
    } catch (error: any) {}
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await getExtraPaymentMethod({
          variables: { paymentMethod: "paypal_express" },
        });

        if (response?.data?.getExtraPMDetails?.instruction) {
          const parsedInstruction = JSON.parse(
            response.data.getExtraPMDetails.instruction
          );

          setPaypalOption(parsedInstruction);
        }
      } catch (error) {
        console.error("Error fetching payment method details:", error);
      }
    })();
  }, [getExtraPaymentMethod]);

  return (
    paypalOption && (
      <div style={{ maxWidth: "750px", minHeight: "200px" }}>
        <PayPalScriptProvider
          deferLoading={false}
          // options={{ ...paypalOption, currency: "GBP" }}
          options={{
            clientId:
              "AUZfbDQ_4m8ibp82qV9pi9wxGkGrdGILVYWbWaTWreW9mmTm6LjQorLZxpP7kjymXc7flRnepHBFSQWp",
            components: "messages,buttons",
            enableFunding: "paylater",
            commit: false,
            intent: "authorize",
            currency: "GBP",
          }}
        >
          <ButtonWrapper showSpinner={false} getToken={getToken} />
        </PayPalScriptProvider>
      </div>
    )
  );
};
