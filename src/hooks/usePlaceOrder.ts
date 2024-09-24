"use client";
import {
  BrowserPersistence,
  cookieStorageKey,
  localStorageKeys,
} from "@/utils";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { cookiePersist } from "@/utils/helper";
import { Mutations } from "@/utils/graphql";

export interface UsePlaceOrderProps {}

export interface UsePlaceOrderReturns {
  handlePlaceOrder: () => Promise<void>;
  createPaypalTokenOnCart: () => Promise<any>;
  handlePaymentRedirection: (paymentMethod: string) => Promise<void>;
  placeOrderLoading: boolean
}

export const usePlaceOrder = (): UsePlaceOrderReturns => {
  const { CREATE_PAYPAL_EXPRESS_TOKEN, PLACE_ORDER } = Mutations;
  const storage = new BrowserPersistence();
  const cartId = storage.getItem(localStorageKeys.CART_ID);

  const router = useRouter();

  const [createPaypalToken] = useMutation(CREATE_PAYPAL_EXPRESS_TOKEN);
  const [placeOrder, {loading: placeOrderLoading}] = useMutation(PLACE_ORDER);

  const handlePlaceOrder = async () => {
    try {
      cookiePersist.setItem(cookieStorageKey.IS_PLACE_ORDER, true);
      const placeOrderResponse = await placeOrder({ variables: { cartId } });
      if (
        placeOrderResponse &&
        placeOrderResponse?.data?.placeOrderV2?.orderV2
      ) {
        const data = placeOrderResponse?.data?.placeOrderV2?.orderV2;
        router.push(`/order-success?token=${data?.token}`);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const createPaypalTokenOnCart = async () => {
    try {
      const response = await createPaypalToken({
        variables: {
          cartId,
          code: "paypal_express",
          returnUrl: process.env.PAYPAL_RETURN_URL,
          cancelUrl: process.env.PAYPAL_CANCEL_URL,
        },
      });
      if (response) {
        return response?.data?.createPaypalExpressToken;
      }
    } catch (error: any) {}
  };

  const handlePaymentRedirection = async (paymentMethod: string) => {
    if (paymentMethod === "paypal_express") {
      const paypalTokenResponse = await createPaypalTokenOnCart();
      if (paypalTokenResponse) {
        router.replace(paypalTokenResponse?.paypal_urls?.start);
      }
    } else if (paymentMethod === "cashondelivery") {
      await handlePlaceOrder();
    } else {
      toast.error("Please selected payment method.");
    }
  };

  return {
    handlePlaceOrder,
    createPaypalTokenOnCart,
    handlePaymentRedirection,
    placeOrderLoading
  };
};
