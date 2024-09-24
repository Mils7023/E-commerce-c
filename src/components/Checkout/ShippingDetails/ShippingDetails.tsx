"use client";

import { CommonShimmer, Form } from "@/components/common";
import { Checkbox, Input } from "@/components/core";
import styles from "../Checkoutform/Checkoutform.module.scss";
import { Fragment, useContext, useEffect, useState } from "react";
import { BulbIcon, EditIcon, ListIcon, PlusIcon } from "@/assets/icons";
import { withBillingSchema, withoutBillingSchema } from "@/utils";
import { useCheckoutAddress } from "@/hooks/useCheckoutAddress";
import { Queries } from "@/utils/graphql";
import { CheckoutContext, useAppContext } from "@/context";
import { useLazyQuery } from "@apollo/client";
import { FetchCustomerAddress } from "../../../types/account.type";
import { CheckoutDisplayAddress } from "../CheckoutDisplayAddress";
import { CheckoutAddressList } from "../CheckoutAddressList";

export interface combinedFormValue {
  id?: string;
  shipping_firstname: string;
  shipping_lastname: string;
  shipping_address_one: string;
  shipping_address_two: string;
  shipping_country: string;
  shipping_region: string;
  shipping_city: string;
  shipping_code: string;
  shipping_telephone: string;

  billing_firstname: string;
  billing_lastname: string;
  billing_address_one: string;
  billing_address_two: string;
  billing_country: string;
  billing_region: string;
  billing_city: string;
  billing_code: string;
  billing_telephone: string;
}

export const ShippingDetails = () => {
  const [isBillingAddressSame, setIsBillingAddressSame] = useState(true);
  const [selectedAddress, setSelectedAddress] =
    useState<combinedFormValue | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isAddressListOpen, setIsAddressListOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [addInAddressBook, setAddInAddressBook] = useState(true);
  const { authToken } = useAppContext();

  const { handleCheckoutAddress, allAddressLoading } = useCheckoutAddress();

  const { GET_CUSTOMER_ADDRESS } = Queries;
  const { cartDetails, checkoutLoading } = useContext(CheckoutContext);

  const [getCustomerAddress, { data: addressData, loading: addressLoading }] =
    useLazyQuery<FetchCustomerAddress>(GET_CUSTOMER_ADDRESS, {
      fetchPolicy: "no-cache",
    });

  const handleAddressSubmit = async (values: combinedFormValue) => {
    await handleCheckoutAddress(values, isBillingAddressSame, addInAddressBook);
    setIsAddressListOpen(false);
    setShowButtons(false);
    setIsFormOpen(false);
  };

  const shippingAddress = cartDetails?.shipping_addresses;
  const savedAddresses = addressData?.customer?.addresses;

  useEffect(() => {
    (async () => {
      if (isAddressListOpen) {
        await getCustomerAddress();
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddressListOpen]);

  useEffect(() => {
    if (shippingAddress?.length || savedAddresses?.length) {
      setIsFormOpen(false);
    }
  }, [savedAddresses?.length, shippingAddress?.length]);

  const defaultAddress = {
    shipping_firstname: cartDetails?.shipping_addresses[0]?.firstname,
    shipping_lastname: cartDetails?.shipping_addresses[0]?.lastname,
    shipping_address_one: cartDetails?.shipping_addresses[0]?.street[0],
    shipping_address_two: cartDetails?.shipping_addresses[0]?.street[1],
    shipping_country: cartDetails?.shipping_addresses[0]?.country.code,
    shipping_region: cartDetails?.shipping_addresses[0]?.region?.code,
    shipping_city: cartDetails?.shipping_addresses[0]?.city,
    shipping_code: cartDetails?.shipping_addresses[0]?.postcode,
    shipping_telephone: cartDetails?.shipping_addresses[0]?.telephone,

    billing_firstname: cartDetails?.billing_address?.firstname,
    billing_lastname: cartDetails?.billing_address?.lastname,
    billing_address_one: cartDetails?.billing_address?.street[0],
    billing_address_two: cartDetails?.billing_address?.street[1],
    billing_country: cartDetails?.billing_address?.country?.code,
    billing_region: cartDetails?.billing_address?.region?.code,
    billing_city: cartDetails?.billing_address?.city,
    billing_code: cartDetails?.billing_address?.postcode,
    billing_telephone: cartDetails?.billing_address?.telephone,
  };

  const handleEdit = () => {
    setShowButtons(true);
    if (authToken) {
      setIsAddressListOpen(true);
    } else {
      setIsFormOpen(true);
      setSelectedAddress(defaultAddress);
    }
  };

  return (
    <Fragment>
      {checkoutLoading ? (
        <CommonShimmer flag="address" />
      ) : (
        <div className={`${styles.checkout_shipping}`}>
          <div
            className={`${styles.checkout_shipping_title} d-flex align-items-center justify-content-between pb-lg-4 pb-3`}
          >
            <p className="h5 font_md black_text ">SHIPPING</p>
            <div className="d-flex align-items-center gap-xl-3 gap-2">
              {showButtons && authToken && (
                <>
                  <button
                    className="font_md btn-transparent primary_dark_text d-flex align-items-center gap-2"
                    onClick={() => {
                      setIsAddressListOpen(true);
                      setIsFormOpen(false);
                    }}
                  >
                    <ListIcon />

                    <span className="d-lg-block d-none">ADDRESS LIST</span>
                    <span className="d-lg-none d-block">LIST</span>
                  </button>
                  <button
                    className="font_md btn-transparent primary_dark_text d-flex align-items-center gap-2"
                    onClick={() => {
                      setIsFormOpen(true);
                      setIsAddressListOpen(false);
                    }}
                  >
                    <PlusIcon />
                    <span className="d-lg-block d-none">ADD ADDRESS</span>
                    <span className="d-lg-none d-block">ADD</span>
                  </button>
                </>
              )}
              {cartDetails?.shipping_addresses.length > 0 && !showButtons && (
                <button
                  className="font_md btn-transparent primary_dark_text d-flex align-items-center gap-2"
                  onClick={handleEdit}
                >
                  <EditIcon
                    width={19}
                    height={19}
                    stroke="#e275a8"
                    strokeWidth={2}
                  />
                  EDIT
                </button>
              )}
            </div>
          </div>

          {isFormOpen ? (
            <Form<combinedFormValue>
              className=""
              onSubmit={handleAddressSubmit}
              schema={
                isBillingAddressSame ? withoutBillingSchema : withBillingSchema
              }
              defaultValues={selectedAddress || undefined}
            >
              <div>
                <div className="row">
                  <div className="col-xl-6 col-12">
                    <Input
                      placeholder="First Name*"
                      name="shipping_firstname"
                      formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                    />
                  </div>
                  <div className="col-xl-6 col-12">
                    <Input
                      placeholder="Last Name*"
                      name="shipping_lastname"
                      formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                    />
                  </div>
                  <div className="col-xl-6 col-12">
                    <Input
                      placeholder="Address 1*"
                      name="shipping_address_one"
                      formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                    />
                  </div>
                  <div className="col-xl-6 col-12">
                    <Input
                      placeholder="Address 2*"
                      name="shipping_address_two"
                      formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                    />
                  </div>
                  <div className="col-xl-6 col-12">
                    <Input
                      placeholder="Country"
                      name="shipping_country"
                      formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                      value="United Kingdom"
                    />
                  </div>
                  <div className="col-xl-6 col-12">
                    <Input
                      placeholder="Region"
                      name="shipping_region"
                      formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                    />
                  </div>
                  <div className="col-xl-6 col-12">
                    <Input
                      placeholder="City"
                      name="shipping_city"
                      formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                    />
                  </div>
                  <div className="col-xl-6 col-12">
                    <Input
                      placeholder="Postal code"
                      name="shipping_code"
                      formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                    />
                  </div>
                  <div className="col-12">
                    <Input
                      placeholder="Enter Your Mobile Number"
                      name="shipping_telephone"
                      type="phone"
                      formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                    />
                  </div>
                </div>
                <p className="font-16 black_text font_rg pb-3">
                  Please ensure that the shipping address information is
                  consistent with your KYC, otherwise the goods will not be
                  delivered.
                  <BulbIcon />
                </p>
                <Checkbox
                  key={1}
                  id="address"
                  onChange={() =>
                    setIsBillingAddressSame(!isBillingAddressSame)
                  }
                  label="Billing address same as shipping address"
                  name="isBillingAddressSame"
                  color="primary"
                  checked={isBillingAddressSame}
                />
              </div>
              {!isBillingAddressSame && (
                <div className="pt-lg-4 pt-3">
                  <div
                    className={`${styles.checkout_shipping_title} pb-lg-4 pb-3`}
                  >
                    <p className="h5 font_md black_text">BILLING</p>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-12">
                      <Input
                        placeholder="First Name*"
                        name="billing_firstname"
                        formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                      />
                    </div>
                    <div className="col-xl-6 col-12">
                      <Input
                        placeholder="Last Name*"
                        name="billing_lastname"
                        formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                      />
                    </div>
                    <div className="col-xl-6 col-12">
                      <Input
                        placeholder="Address 1*"
                        name="billing_address_one"
                        formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                      />
                    </div>
                    <div className="col-xl-6 col-12">
                      <Input
                        placeholder="Address 2*"
                        name="billing_address_two"
                        formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                      />
                    </div>
                    <div className="col-xl-6 col-12">
                      <Input
                        placeholder="Country*"
                        name="billing_country"
                        formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                        value="United Kingdom"
                      />
                    </div>

                    <div className="col-xl-6 col-12">
                      <Input
                        placeholder="Region*"
                        name="billing_region"
                        formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                      />
                    </div>
                    <div className="col-xl-6 col-12">
                      <Input
                        placeholder="City"
                        name="billing_city"
                        formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                      />
                    </div>
                    <div className="col-xl-6 col-12">
                      <Input
                        placeholder="Postal code"
                        name="billing_code"
                        formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                      />
                    </div>
                    <div className="col-12">
                      <Input
                        placeholder="Enter Your Mobile Number"
                        name="billing_telephone"
                        type="phone"
                        formGroupClass="pb-xxl-4 pb-md-3 pb-2"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className="d-flex justify-content-end align-items-center gap-3">
                <button
                  type="submit"
                  className={`${styles.identification_btn} btn btn-gradient btn-primary-md rounded-pill`}
                >
                  {allAddressLoading ? "Loding..." : "Continue"}
                </button>
              </div>
            </Form>
          ) : isAddressListOpen ? (
            <CheckoutAddressList
              items={savedAddresses!}
              isBillingAddressSame={isBillingAddressSame}
              setIsBillingAddressSame={setIsBillingAddressSame}
              setShowButtons={setShowButtons}
              setIsAddressListOpen={setIsAddressListOpen}
              setIsFormOpen={setIsFormOpen}
              setSelectedAddress={setSelectedAddress}
              addressLoading={addressLoading}
              addInAddressBook={addInAddressBook}
              setAddInAddressBook={setAddInAddressBook}
            />
          ) : (
            <CheckoutDisplayAddress
              shippingAddress={cartDetails?.shipping_addresses[0]}
              billingAddress={cartDetails?.billing_address}
            />
          )}
        </div>
      )}
    </Fragment>
  );
};
