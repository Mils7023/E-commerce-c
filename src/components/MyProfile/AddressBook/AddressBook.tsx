"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./AddressBook.module.scss";
import Tab from "react-bootstrap/Tab";
import { Input } from "@/components/core";
import { Form } from "@/components/common";
import { customerAddressFormSchema } from "@/utils";
import { Checkbox } from "@/components/core";
import dynamic from "next/dynamic";
import { SpinnerProps } from "@/components/common/Spinner";
import { useAddressDetails } from "@/hooks";
import { Customer, CustomerAddress } from "@/types";
import { getImageUrl } from "@/utils/imageHelper";

const Spinner = dynamic<SpinnerProps>(
  () => import("@/components/common/Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);

type AddressFormValues = {
  firstname: string;
  lastname: string;
  street: string;
  city: string;
  region: string;
  postcode: string;
  telephone: string;
  country_code: string;
  default_billing?: boolean;
  default_shipping?: boolean;
};


export const AddressBook = ({
  customerData,
  refetchCustomer,
}: {
  customerData: Customer;
  refetchCustomer: () => void;
}) => {
  const { handleAddAddress, handleDeleteAddress, handleUpdateAddress } =
  useAddressDetails();
  
  const [addressFormValues, setAddressFormValues] = useState<AddressFormValues>(
    {
      firstname: "",
      lastname: "",
      street: "",
      city: "",
      region: "",
      postcode: "",
      telephone: "",
      country_code: "GB", // Default to United Kingdom
    }
  );

  const handleAddNewAddress = async () => {
    try {
      const newAddressInput = {
        ...addressFormValues,
        firstname: addressFormValues.firstname.trim(),
        lastname: addressFormValues.lastname.trim(),
        city: addressFormValues.city.trim(),
        postcode: addressFormValues.postcode.trim(),
        telephone: addressFormValues.telephone.trim(),
        street: addressFormValues.street.trim().split(","),
        region: {
          region: addressFormValues.region.trim(),
        },
      };

      // console.log(addressFormValues);
      await handleAddAddress(newAddressInput);
      setAddressFormValues({
        firstname: "",
        lastname: "",
        street: "",
        city: "",
        region: "",
        postcode: "",
        telephone: "",
        country_code: "GB",
      });
      setShowAddress(false);
    } catch (error) {
      console.error("Error adding new address:", error);
    }
  };

  const handleUpdateExistingAddress = async () => {
    if (currentAddress) {
      try {
        const updatedAddressInput = {
          id: currentAddress.id,
          input: {
            ...addressFormValues,
            street: addressFormValues.street.split(","),
            region: {
              region: addressFormValues.region,
            },
          },
        };

        await handleUpdateAddress(updatedAddressInput);
        setShowAddress(false);
      } catch (error) {
        console.error("Error updating address:", error);
      }
    }
  };

  const handleAddressDelete = async (addressId: string) => {
    try {
      await handleDeleteAddress(addressId);
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAddressFormValues((prevState) => ({
      ...prevState,
      default_billing: checked,
    }));
  };

  const [currentAddress, setCurrentAddress] = useState<CustomerAddress | null>(
    null
  );

  const addressUpdate = (address?: CustomerAddress) => {
    setCurrentAddress(address || null);

    if (address) {
      setAddressFormValues({
        firstname: address.firstname || "",
        lastname: address.lastname || "",
        street: address.street?.join(", ") || "",
        city: address.city || "",
        region: address.region?.region || "",
        postcode: address.postcode || "",
        telephone: address.telephone || "",
        country_code: "GB",
        default_billing: address.default_billing || false,
        default_shipping: address.default_shipping || false,
      });
    } else {
      setAddressFormValues({
        firstname: "",
        lastname: "",
        street: "",
        city: "",
        region: "",
        postcode: "",
        telephone: "",
        country_code: "GB",
        default_billing: false,
        default_shipping: false,
      });
    }
    setShowAddress(!showAddress);
  };

  const handleAddressUpdate = async () => {
    try {
      if (currentAddress) {
        // If editing an existing address
        await handleUpdateExistingAddress();
      } else {
        // If adding a new address
        await handleAddNewAddress();
      }
    } catch (error) {
      console.error("Error updating or adding address:", error);
    }
  };

  const handleAddressFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    if(name === "telephone") {
      value = value.replace(/\D/g,"");
      console.log(value.length);
      console.log("name ",name === "telephone" ? value   : '');
    }
    setAddressFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [showAddress, setShowAddress] = useState(false);

  return (
    <Tab.Pane eventKey="addressBook">
      <div
        className={`${styles.profile_title} common-profile-shadow d-flex align-items-center justify-content-between`}
      >
        <p className="h5 font_smb">Address Book</p>
        <button
          onClick={() => addressUpdate()}
          className="font-16 font_smb primary_text d-flex align-items-center btn-transparent"
        >
          <span className={`${styles.plus_vector} me-2`}>
            <Image
              src={getImageUrl('my-profile-page/plus-vector.png')}
              alt="plus-vector"
              title="Cannellio Cake Toppers - plus vector"
              width={13}
              height={13}
              className={`${styles.plus_vector_src} w-100 h-100`}
            />
          </span>
          ADD ADDRESS
        </button>
      </div>
      <div className={`${styles.profile_body} common-profile-shadow mt-3`}>
        <div className={`${styles.profile_address_book}`}>
          {/* DEFAULT ADDRESS CARDS */}
          {!showAddress && (
            <div className={`${styles.addressbook_card} row g-3`}>
              {customerData?.addresses &&
                customerData?.addresses?.map(
                  (address: CustomerAddress, index: number) => (
                    <div className="col-xl-4 col-md-6 col-12" key={index}>
                      <div className={`${styles.address_card}`}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <p className="font-16 font_smb">
                            {address.firstname} {address.lastname}
                          </p>
                          {address.default_billing && (
                            <p
                              className={`${styles.default_btn} font-10 font_smb text-nowrap`}
                            >
                              Default
                            </p>
                          )}
                        </div>
                        <p className="font-14 font_md black_shade3_text">
                          {address.telephone}
                        </p>
                        <p className="font-14 font_md black_shade3_text pt-1">
                          {address.street?.join(", ")}, {address.city},{" "}
                          {address.region?.region}, {"United Kingdom"}{" "}
                          {address.postcode}
                        </p>
                        <hr className="black_shade3_text" />
                        <div className="d-flex align-items-center justify-content-end  gap-2">
                          <button
                            className="font-14 font_smb primary_text btn-transparent d-flex align-items-center justify-content-end gap-2"
                            onClick={() => handleAddressDelete(address.id)}
                          >
                            <span className={`${styles.edit_vector}`}>
                              <svg
                                width="20"
                                height="22"
                                viewBox="0 0 7 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.48712 7.91152C6.48712 8.25881 6.3419 8.59187 6.0834 8.83745C5.82491 9.08302 5.47431 9.22098 5.10874 9.22098H1.89253C1.52696 9.22098 1.17636 9.08302 0.917865 8.83745C0.659369 8.59187 0.514147 8.25881 0.514147 7.91152V2.67368H0.0546875V1.36422H2.12226L2.58171 0.927734H4.41955L4.87901 1.36422H6.94658V2.67368H6.48712V7.91152ZM0.973606 2.67368V7.91152C0.973606 8.14304 1.07042 8.36509 1.24275 8.5288C1.41508 8.69252 1.64881 8.78449 1.89253 8.78449H5.10874C5.35245 8.78449 5.58618 8.69252 5.75852 8.5288C5.93085 8.36509 6.02766 8.14304 6.02766 7.91152V2.67368H0.973606ZM6.48712 2.23719V1.80071H4.64928L4.18982 1.36422H2.81144L2.35198 1.80071H0.514147V2.23719H6.48712ZM1.89253 3.54665H2.35198V7.91152H1.89253V3.54665ZM4.64928 3.54665H5.10874V7.91152H4.64928V3.54665Z"
                                  fill="#F8F8F8"
                                />
                              </svg>
                            </span>
                          </button>
                          <button
                            className="font-14 font_smb primary_text btn-transparent d-flex align-items-center justify-content-end gap-2"
                            onClick={() => {
                              addressUpdate(address);
                            }}
                          >
                            EDIT
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                )}
            </div>
          )}

          {/* ADD / EDIT ADDRESS FROM HERE */}
          {showAddress && (
            <div className={`${styles.edit_address_book}`}>
              <Form<AddressFormValues>
                className=""
                onSubmit={handleAddressUpdate}
                schema={customerAddressFormSchema}
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <Input
                      placeholder="Enter Your Name"
                      name="firstname"
                      formGroupClass="pb-3"
                      value={addressFormValues?.firstname || ""}
                      // onChange={handleAddressFormChange}
                      onInput={handleAddressFormChange}
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <Input
                      placeholder="Enter Your Surname"
                      name="lastname"
                      formGroupClass="pb-3"
                      value={addressFormValues?.lastname || ""}
                      // onChange={handleAddressFormChange}
                      onInput={handleAddressFormChange}
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <Input
                      placeholder="Enter Your Address"
                      name="street"
                      formGroupClass="pb-3"
                      value={addressFormValues?.street || ""}
                      // onChange={handleAddressFormChange}
                      onInput={handleAddressFormChange}
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <Input
                      placeholder="Enter Your City"
                      name="city"
                      formGroupClass="pb-3"
                      value={addressFormValues?.city || ""}
                      // onChange={handleAddressFormChange}
                      onInput={handleAddressFormChange}
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    {/* <Select
                                      name="state"
                                      formGroupClass="pb-3"
                                      options={[
                                        {
                                          value: "Newyork",
                                          label: "Newyork",
                                        },
                                        { value: "America", label: "America" },
                                        { value: "Italy", label: "Italy" },
                                        {
                                          value: "New Zealand",
                                          label: "New Zealand",
                                        },
                                      ]}
                                    /> */}
                    <Input
                      placeholder="Enter Your State"
                      name="region"
                      formGroupClass="pb-3"
                      value={addressFormValues?.region || ""}
                      // onChange={handleAddressFormChange}
                      onInput={handleAddressFormChange}
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <Input
                      placeholder="Enter Your Country"
                      name="country"
                      formGroupClass="pb-3"
                      value={"United Kingdom"}
                      disabled
                    />
                    {/* <Select
                                      name="country"
                                      formGroupClass="pb-3"
                                      options={[
                                        {
                                          value: "India",
                                          label: "India",
                                        },
                                        { value: "America", label: "America" },
                                        { value: "Italy", label: "Italy" },
                                      ]}
                                    /> */}
                  </div>
                  <div className="col-lg-6 col-12">
                    <Input
                      placeholder="Enter Your PinCode"
                      name="postcode"
                      type="text"
                      formGroupClass="pb-3"
                      value={addressFormValues?.postcode || ""}
                      // onChange={handleAddressFormChange}
                      onInput={handleAddressFormChange}
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <Input
                      placeholder="Enter Your Mobile Number"
                      name="telephone"
                      type="phone"
                      formGroupClass="pb-3"
                      value={addressFormValues?.telephone || ""}
                      // onChange={handleAddressFormChange}
                      onInput={handleAddressFormChange}
                    />
                  </div>
                </div>
                <p className="font-18 font_rg pb-3">
                  Please ensure that the shipping address information is
                  consistent with your KYC, otherwise the goods will not be
                  delivered.
                </p>
                <div>
                  <Checkbox
                    key={1}
                    id="key1"
                    onChange={handleBillingChange}
                    label="Billing address same as shipping address"
                    name="check"
                    color="primary"
                    checked={addressFormValues?.default_billing || false}
                    //
                  />
                </div>
                <button
                  className={`${styles.profile_common_btn} btn btn-gradient rounded-pill mt-4`}
                >
                  SAVE CHANGES
                </button>
              </Form>
            </div>
          )}

          {customerData?.addresses?.length === 0 && !showAddress && (
            <div className={`${styles.emptyAddressWrapper} text-center py-4`}>
              <Image
                src={getImageUrl('my-profile-page/empty-address.png')}
                alt=""
                title=""
                width={230}
                height={220}
                className={`${styles.emptyAddressImage}`}
              />
              <div className="pt-4 pb-xl-4 pb-3">
                <span className="h5 black_text font_md">
                  You have not any address, please add your address
                </span>
              </div>
              <button
                className="btn btn-primary rounded-pill"
                onClick={() => addressUpdate()}
              >
                ADD ADDRESS
              </button>
            </div>
          )}
        </div>
      </div>
    </Tab.Pane>
  );
};
