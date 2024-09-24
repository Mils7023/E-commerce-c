"use client";
import { CheckoutContext } from "@/context";
import { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { Mutations } from "@/utils/graphql";
import { combinedFormValue } from "@/components";

export interface UseCheckoutAddressProps {}

export interface UseCheckoutAddressReturns {
  handleCheckoutAddress: (
    values: combinedFormValue,
    isBillingAddressSame: boolean,
    addInAddressBook?: boolean
  ) => any;
  addShippingAddressLoading: boolean;
  addBillingAddressLoading: boolean;
  updateAddressLoading: boolean;
  allAddressLoading: boolean;
}

export const useCheckoutAddress = (): UseCheckoutAddressReturns => {
  const { ADD_SHIPPING_ADDRESS, ADD_BILLING_ADDRESS, UPDATE_CUSTOMER_ADDRESS } =
    Mutations;

  const { cartId, refetchCartDetails } = useContext(CheckoutContext);
  const [addShippingAddress, { loading: addShippingAddressLoading }] =
    useMutation(ADD_SHIPPING_ADDRESS);
  const [addBillingAddress, { loading: addBillingAddressLoading }] =
    useMutation(ADD_BILLING_ADDRESS);
  const [updateCustomerAddress, { loading: updateAddressLoading }] =
    useMutation(UPDATE_CUSTOMER_ADDRESS);

  const handleCheckoutAddress = async (
    values: combinedFormValue,
    isBillingAddressSame: boolean,
    addInAddressBook?: boolean
  ) => {
    const shippingValue = {
      firstname: values?.shipping_firstname,
      lastname: values?.shipping_lastname,
      region: values?.shipping_region,
      street: [values?.shipping_address_one, values?.shipping_address_two],
      city: values?.shipping_city,
      postcode: values?.shipping_code,
      country_code: "GB",
      telephone: values?.shipping_telephone,
    };

    const updateValue = {
      firstname: values?.shipping_firstname,
      lastname: values?.shipping_lastname,
      region: { region: values?.shipping_region },
      street: [values?.shipping_address_one, values?.shipping_address_two],
      city: values?.shipping_city,
      postcode: values?.shipping_code,
      country_code: "GB",
      telephone: values?.shipping_telephone,
    };

    const billingValue = {
      firstname: values?.billing_firstname,
      lastname: values?.billing_lastname,
      region: values?.billing_region,
      street: [values?.billing_address_one, values?.billing_address_two],
      city: values?.billing_city,
      postcode: values?.billing_code,
      country_code: "GB",
      telephone: values?.billing_telephone,
    };

    const address = isBillingAddressSame
      ? {
          ...shippingValue,
          street: shippingValue.street,
          save_in_address_book: false,
        }
      : {
          ...billingValue,
          street: billingValue.street,
          save_in_address_book: addInAddressBook,
        };

    const shippingPayload = {
      input: {
        cart_id: cartId,
        shipping_addresses: [
          {
            address: {
              ...shippingValue,
              street: shippingValue.street,
              save_in_address_book: addInAddressBook,
            },
          },
        ],
      },
    };

    const billingPayload = {
      input: {
        cart_id: cartId,
        billing_address: { address },
      },
    };

    try {
      await addShippingAddress({ variables: shippingPayload });
      await addBillingAddress({ variables: billingPayload });
      if (values.id) {
        await updateCustomerAddress({
          variables: {
            id: values.id,
            input: updateValue,
          },
        });
      }
      await refetchCartDetails();
    } catch (error: any) {
      console.log("error", error);
    }
  };

  const allAddressLoading =
    addShippingAddressLoading ||
    addBillingAddressLoading ||
    updateAddressLoading;

  return {
    handleCheckoutAddress,
    addShippingAddressLoading,
    addBillingAddressLoading,
    updateAddressLoading,
    allAddressLoading,
  };
};
