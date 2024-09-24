import { Address } from "@/types";
import { FC } from "react";
import styles from "../Checkoutform/Checkoutform.module.scss";
import { BulbIcon } from "@/assets/icons";

export interface CheckoutDisplayAddressProps {
  shippingAddress?: Address;
  billingAddress?: Address;
}

export const CheckoutDisplayAddress: FC<CheckoutDisplayAddressProps> = ({
  shippingAddress,
  billingAddress,
}) => {
  return (
    <div className={`${styles.checkout_address_list} row g-3`}>
      <div className="col-sm-6">
        <span
          className={`font_18 black_text font_md w-100 d-inline-block pb-3`}
        >
          Shipping address
        </span>
        <div className="d-flex flex-column gap-2">
          <span className="font-16 black_shade5_text font_rg">
            {`${shippingAddress?.firstname} ${shippingAddress?.lastname}`}
          </span>
          <p className="font-16 black_shade5_text font_rg text-capitalize">
            {`${shippingAddress?.street}`},
          </p>
          <p className="font-16 black_shade5_text font_rg text-capitalize">
            {`${shippingAddress?.postcode}, ${shippingAddress?.region.label}, United Kingdom`}
          </p>
          <span className="font-16 black_shade5_text font_rg">
            {`${shippingAddress?.telephone}`}
          </span>
        </div>
      </div>
      <div className="col-sm-6">
        <span
          className={`font_18 black_text font_md w-100 d-inline-block pb-3`}
        >
          Billing address
        </span>
        <div className="d-flex flex-column gap-2">
          <span className="font-16 black_shade5_text font_rg">
            {`${billingAddress?.firstname} ${billingAddress?.lastname}`}
          </span>
          <p className="font-16 black_shade5_text font_rg text-capitalize">
            {`${billingAddress?.street}`},
          </p>
          <p className="font-16 black_shade5_text font_rg text-capitalize">
            {`${billingAddress?.postcode}, ${billingAddress?.region.label}, United Kingdom`}
          </p>
          <span className="font-16 black_shade5_text font_rg">
            {`${billingAddress?.telephone}`}
          </span>
        </div>
      </div>
      <div className="col-12">
        <p className="font-16 black_text font_rg">
          Please ensure that the shipping address information is consistent with
          your KYC, otherwise the goods will not be delivered.
          <BulbIcon />
        </p>
      </div>
    </div>
  );
};
