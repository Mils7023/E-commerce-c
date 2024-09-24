import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./ProductCardSkeleton.module.scss";

export const ProductCardSkeleton = ({
  isSuperhero = false,
}: {
  isSuperhero?: boolean;
}) => {
  if (isSuperhero) {
    return (
      <div
        className={`col-lg-4 col-sm-6 col-12 ${styles.superheroes_products_col_wrapper}`}
      >
        <div
          className={`${styles.superheroes_products_col} p_cards_lg_col position-relative`}
        >
          <div className={`${styles.superheroes_image} w-100`}>
            <Skeleton
              height={618}
              width={486}
              className={`${styles.skeleton_image}`}
            />
          </div>
          <div
            className={`${styles.superheroes_products_touch} position-absolute d-flex align-items-center justify-content-center`}
          >
            <Skeleton
              circle={true}
              height={36}
              width={30}
              className={`${styles.skeleton_touch_icon}`}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p_cards ${styles.products_col} `}>
      <div className={`overflow-hidden position-relative`}>
        <Skeleton
          height={375}
          width={357}
          className={`${styles.skeleton_image} p_card_image w-100`}
        />
      </div>
      <div className="p_card_content">
        <div className="p_card_content_head d-flex justify-content-between">
          <Skeleton
            width={200}
            height={30}
            className={`${styles.skeleton_title}`}
          />
          <Skeleton
            circle={true}
            height={24}
            width={24}
            className={`${styles.skeleton_like} `}
          />
        </div>
        <div className="p_card_content_body d-flex align-items-center justify-content-between">
          <div className="p_card_review gap-xxl-2 gap-1 d-flex align-items-center">
            <Skeleton
              width={50}
              height={20}
              className={`${styles.skeleton_review}`}
            />
            {/* <Skeleton
              height={20}
              width={20}
              circle={true}
              className={`${styles.skeleton_review_icon}`}
            /> */}
          </div>
          <div className="p_card_btn">
            <Skeleton
              width={160}
              height={40}
              className={`${styles.skeleton_button}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
