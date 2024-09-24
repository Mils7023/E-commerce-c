"use client";
import { Dispatch, FC, SetStateAction } from "react";
import styles from "./ProductCounter.module.scss";

export interface ProductCounterProps {
  productQty: number;
  setProductQty: Dispatch<SetStateAction<number>>;
  isFromMiniCart?: boolean;
}

export const ProductCounter: FC<ProductCounterProps> = ({
  productQty,
  setProductQty,
  isFromMiniCart = false,
}) => {
  const handleDecrementProduct = () => {
    setProductQty((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncrementProduct = () => {
    setProductQty((prev) => prev + 1);
  };

  return (
    <>
      {isFromMiniCart ? (
        <div className={styles.productCountBtnForMini}>
          <span
            className={styles.productCount}
            onClick={handleDecrementProduct}
          >
            -
          </span>
          <span className={styles.productCountNumber}>{productQty}</span>
          <span
            className={styles.productCount}
            onClick={handleIncrementProduct}
          >
            +
          </span>
        </div>
      ) : (
        <div className={styles.productCountBtn}>
          <span
            className={styles.productCount}
            onClick={handleDecrementProduct}
          >
            -
          </span>
          <span className={styles.productCountNumber}>{productQty}</span>
          <span
            className={styles.productCount}
            onClick={handleIncrementProduct}
          >
            +
          </span>
        </div>
      )}
    </>
  );
};
