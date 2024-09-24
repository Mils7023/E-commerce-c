"use client";

import { RichContent } from "@/components";
import styles from "./ProductContainer.module.scss";

export const ProductContainer = ({ data, metaData }: any) => {
  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.container}>
        <RichContent className={`${styles.richText} `} htmlContent={data} />
      </div>
    </div>
  );
};
