// src/components/common/PageLoading/PageLoading.tsx
"use client";
import { FC } from "react";

import styles from "./PageLoading.module.scss";
import dynamic from "next/dynamic";
import { SpinnerProps } from "../Spinner";

const Spinner = dynamic<SpinnerProps>(
  () => import("../Spinner").then((mod) => mod.Spinner),
  {
    ssr: false,
  }
);

export interface PageLoadingProps {}

export const PageLoading: FC<PageLoadingProps> = () => {
  return (
    <div className={styles.pageLoading}>
      <div className={styles.loadingContainer}>
        <Spinner size="lg" />
        <span className={styles.loadingText}>
          {
            "Baking up some sweetness just for you! Thanks for your patience. 🎂✨"
          }
        </span>
      </div>
    </div>
  );
};
