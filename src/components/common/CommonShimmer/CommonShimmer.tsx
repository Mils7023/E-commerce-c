import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../../Checkout/Checkoutform/Checkoutform.module.scss";
import { FC } from "react";

interface SkeletonLoaderProps {
  width?: number | string;
  height?: number | string;
  count?: number;
  circle?: boolean;
  className?: string;
  flag?: string;
}

const renderSkeletonText = (width: number | string, count = 1) => (
  <Skeleton width={width} count={count} />
);

export const CommonShimmer: FC<SkeletonLoaderProps> = ({
  width = "100%",
  height = "16px",
  count = 1,
  circle = false,
  className = "",
  flag,
}) => {
  switch (flag) {
    case "identification":
      return (
        <div className="d-flex gap-1 flex-column">
          {renderSkeletonText(200, 2)}
          {renderSkeletonText(300)}
          {renderSkeletonText(350)}
        </div>
      );

    case "address":
      return (
        <div className={`${styles.checkout_address_list} row g-3`}>
          {["Shipping address", "Billing address"].map((title, idx) => (
            <div className="col-sm-6" key={idx}>
              <span className="font_18 black_text font_md w-100 d-inline-block pb-3">
                {title}
              </span>
              <div className="d-flex flex-column gap-2">
                {renderSkeletonText(200, 4)}
              </div>
            </div>
          ))}
          <div className="col-12">
            <p className="font-16 black_text font_rg">
              Please ensure that the shipping address information is consistent
              with your KYC, otherwise the goods will not be delivered.
            </p>
          </div>
        </div>
      );

    case "addressList":
      return (
        <div className={`${styles.checkout_selectAddress_col}`}>
          <div className="d-flex flex-column gap-3">
            {renderSkeletonText(100)}
            <div>{renderSkeletonText(100, 2)}</div>
            {renderSkeletonText(100)}
            <div className="text-end">
              <Skeleton width={100} />
            </div>
          </div>
        </div>
      );

    case "paymentMethod":
      return (
        <div className={`${styles.checkout_method}`}>
          {[...Array(3)].map((_, idx) => (
            <div className="mb-2" key={idx}>
              <Skeleton width={500} height={50} />
            </div>
          ))}
        </div>
      );

    default:
      return (
        <Skeleton
          width={width}
          height={height}
          count={count}
          circle={circle}
          className={className}
        />
      );
  }
};
