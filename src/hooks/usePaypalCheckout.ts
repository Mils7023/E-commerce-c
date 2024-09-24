"use client";

import { FetchResult, useMutation } from "@apollo/client";
import { BrowserPersistence, localStorageKeys } from "@/utils";
import { Mutations } from "@/utils/graphql";

export interface UsePaypalCheckoutProps {}

export interface SetTokenAndPayerIdParam {
  payerId: string;
  token: string;
}

export interface UsePaypalCheckoutReturns {
  setTokenAndPayerIdOnCart: (
    param: SetTokenAndPayerIdParam,
  ) => Promise<FetchResult<any>>;
}

export const usePaypalCheckout = (): UsePaypalCheckoutReturns => {
  const { SET_TOKEN_PAYERID_ON_CART } = Mutations;

  const storage = new BrowserPersistence();
  const cartId = storage.getItem(localStorageKeys.CART_ID);
  const [setTokenAndPayerId] = useMutation(SET_TOKEN_PAYERID_ON_CART);

  const setTokenAndPayerIdOnCart = async ({
    payerId,
    token,
  }: SetTokenAndPayerIdParam) => {
    return await setTokenAndPayerId({
      variables: {
        cartId,
        payerId,
        token,
      },
    });
  };

  return { setTokenAndPayerIdOnCart };
};
