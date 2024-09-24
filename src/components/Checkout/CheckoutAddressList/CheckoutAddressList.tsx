"use client";
import { CustomerAddress } from "../../../types/account.type";
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import styles from "../Checkoutform/Checkoutform.module.scss";
import Image from "next/image";
import { Checkbox } from "@/components/core";
import { useCheckoutAddress } from "@/hooks/useCheckoutAddress";
import { toast } from "react-toastify";
import { CommonShimmer } from "@/components/common";
import { getImageUrl } from "@/utils/imageHelper";

export interface CheckoutAddressListProps {
  items: CustomerAddress | CustomerAddress[];
  setSelectedAddress: any;
  setIsBillingAddressSame: Dispatch<SetStateAction<boolean>>;
  setIsAddressListOpen: Dispatch<SetStateAction<boolean>>;
  setShowButtons: Dispatch<SetStateAction<boolean>>;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  isBillingAddressSame: boolean;
  addressLoading: boolean;
  addInAddressBook: boolean;
  setAddInAddressBook: Dispatch<SetStateAction<boolean>>;
}
export interface AddressListItemProps {
  address: CustomerAddress;
  selected: boolean;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
  onClick: () => void;
  setSelectedAddress: any;
  addressLoading?: boolean;
  setAddInAddressBook: Dispatch<SetStateAction<boolean>>;
}

const AddressListItem: FC<AddressListItemProps> = ({
  address,
  selected,
  setIsFormOpen,
  onClick,
  setSelectedAddress,
  addressLoading,
  setAddInAddressBook,
}) => {
  const handleEditClick = () => {
    const defaultAddress = {
      id: address.id,
      shipping_firstname: address?.firstname,
      shipping_lastname: address?.lastname,
      shipping_address_one: address?.street[0],
      shipping_address_two: address?.street[1],
      shipping_country: address?.country_code,
      shipping_region: address?.region?.region,
      shipping_city: address?.city,
      shipping_code: address?.postcode,
      shipping_telephone: address?.telephone,

      billing_firstname: address?.firstname,
      billing_lastname: address?.lastname,
      billing_address_one: address?.street[0],
      billing_address_two: address?.street[1],
      billing_country: address?.country_code,
      billing_region: address?.region?.region,
      billing_city: address?.city,
      billing_code: address?.postcode,
      billing_telephone: address?.telephone,
    };
    setSelectedAddress(defaultAddress);
    setIsFormOpen(true);
    setAddInAddressBook(false);
  };

  return (
    <div className="col-sm-6">
      {addressLoading ? (
        <CommonShimmer flag="addressList" />
      ) : (
        <div className={`${styles.checkout_selectAddress_col}`}>
          <div className="d-flex flex-column gap-3" onClick={onClick}>
            {selected && (
              <Image
                src={getImageUrl("select-address-icon.png")}
                width={20}
                height={20}
                alt="Select Address"
                className={`${styles.checkout_selectAddress_icon} position-absolute `}
                title="Cannellio Cake Toppers - Select Address"
              />
            )}
            <span className="font-16 black_text font_md text-uppercase pe-4">
              {`${address?.firstname} ${address?.lastname}`}
            </span>
            <div>
              <p className="font-16 black_shade5_text font_rg text-capitalize">
                {`${address?.street}`},
              </p>
              <p className="font-16 black_shade5_text font_rg text-capitalize pt-2">
                {`${address?.postcode}, ${address?.region?.region}, United Kingdom`}
              </p>
            </div>
            <span className="font-16 black_shade5_text font_rg">
              {`${address?.telephone}`}
            </span>
            <div className="text-end">
              <button
                className={`font_md btn-transparent primary_text font_18`}
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const CheckoutAddressList: FC<CheckoutAddressListProps> = ({
  items,
  isBillingAddressSame,
  setIsBillingAddressSame,
  setIsAddressListOpen,
  setShowButtons,
  setIsFormOpen,
  setSelectedAddress,
  addressLoading,
  addInAddressBook,
  setAddInAddressBook,
}) => {
  const [selectedShipping, setSelectedShipping] = useState<number>();
  const [selectedBilling, setSelectedBilling] = useState<number>();
  const { handleCheckoutAddress } = useCheckoutAddress();
  const AddressList = useMemo(
    () => (Array.isArray(items) ? items : [items]),
    [items]
  );

  const handleContinue = async () => {
    const shippingAddress =
      selectedShipping !== undefined ? AddressList[selectedShipping] : null;
    const billingAddress = isBillingAddressSame
      ? shippingAddress
      : selectedBilling !== undefined
      ? AddressList[selectedBilling]
      : null;

    if (shippingAddress && billingAddress) {
      const payload = {
        shipping_firstname: shippingAddress?.firstname,
        shipping_lastname: shippingAddress?.lastname,
        shipping_address_one: shippingAddress?.street[0],
        shipping_address_two: shippingAddress?.street[1],
        shipping_country: shippingAddress?.country_code,
        shipping_region: shippingAddress?.region?.region,
        shipping_city: shippingAddress?.city,
        shipping_code: shippingAddress?.postcode,
        shipping_telephone: shippingAddress?.telephone,

        billing_firstname: billingAddress?.firstname,
        billing_lastname: billingAddress?.lastname,
        billing_address_one: billingAddress?.street[0],
        billing_address_two: billingAddress?.street[1],
        billing_country: billingAddress?.country_code,
        billing_region: billingAddress?.region?.region,
        billing_city: billingAddress?.city,
        billing_code: billingAddress?.postcode,
        billing_telephone: billingAddress?.telephone,
      };

      await handleCheckoutAddress(
        payload,
        isBillingAddressSame,
        addInAddressBook
      );
      setIsAddressListOpen(false);
      setShowButtons(false);
    } else {
      toast.error("Please select both shipping and billing addresses.");
    }
  };

  return (
    <div>
      <div className={`${styles.checkout_selectAddress_row} `}>
        <span
          className={`font_18 black_text font_md pb-xl-3 pb-2 d-inline-block`}
        >
          Shipping Address
        </span>
        <div className="row g-xxl-4 g-3">
          {AddressList.length ? (
            AddressList?.map((address, index) => (
              <AddressListItem
                key={`shipping-${index}`}
                address={address}
                selected={selectedShipping === index}
                onClick={() => {
                  setSelectedShipping(index);
                  setAddInAddressBook(false);
                }}
                setIsFormOpen={setIsFormOpen}
                setSelectedAddress={setSelectedAddress}
                addressLoading={addressLoading}
                setAddInAddressBook={setAddInAddressBook}
              />
            ))
          ) : (
            <div>
              <p>Address not save in your address book.</p>
            </div>
          )}
        </div>
        <div className="pt-4">
          <Checkbox
            key={2}
            id="editAddress"
            onChange={() => setIsBillingAddressSame(!isBillingAddressSame)}
            label="Billing address same as shipping address"
            name="editAddress"
            color="primary"
            checked={isBillingAddressSame}
          />
        </div>
      </div>
      {!isBillingAddressSame && (
        <div className={`${styles.checkout_selectAddress_row} pt-3`}>
          <span
            className={`font_18 black_text font_md pb-xl-3 pb-2 d-inline-block`}
          >
            Billing Address
          </span>
          <div className="row g-xxl-4 g-3">
            {AddressList.length ? (
              AddressList?.map((address, index) => (
                <AddressListItem
                  key={`billing-${index}`}
                  address={address}
                  selected={selectedBilling === index}
                  onClick={() => setSelectedBilling(index)}
                  setIsFormOpen={setIsFormOpen}
                  setSelectedAddress={setSelectedAddress}
                  addressLoading={addressLoading}
                  setAddInAddressBook={setAddInAddressBook}
                />
              ))
            ) : (
              <div>
                <p>Address not save in your address book.</p>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="text-end pt-md-4 pt-3">
        <button
          className={`btn btn-gradient rounded-pill btn-primary-md ${styles.editAddress_btn}`}
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};
