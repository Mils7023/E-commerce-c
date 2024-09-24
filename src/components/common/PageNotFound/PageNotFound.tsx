"use client";
import { FC } from "react";
import { useRouter } from "next/navigation";
import styles from "./PageNotFound.module.scss";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHelper";

export interface PageNotFoundProps {}

export const PageNotFound: FC<PageNotFoundProps> = () => {
  const router = useRouter();

  return (
    <section className={styles.global_header_spacing} id="page-no-found">
      <div className="container">
        <div className="common-padding-t mt-5 mb-5 d-inline-block w-100 text-center">
          <Image
            src={getImageUrl('404.png')}
            alt="Page Not found"
            width={350}
            height={0}
            title="Cannellio Cake Toppers - Page Not found"
            className={`${styles.pageNotFound_imge} h-100`}
          />
          <div className="pb-xl-4 pt-3 pb-3">
            <span className="h5 black_text font_md">404 - Page Not Found</span>
          </div>
          <button
            onClick={() => router.push("/")}
            className="btn btn-primary rounded-pill"
          >
            Go To Home
          </button>
        </div>
      </div>
    </section>
  );
};
