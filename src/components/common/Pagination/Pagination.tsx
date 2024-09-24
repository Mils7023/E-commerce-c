"use client";

import clsx from "clsx";
import { FC } from "react";
import styles from "./Pagination.module.scss";
import { SmallRightArrow } from "@/assets/icons";

export interface PaginationProps {
  currentPage: number;
  totalPage: number;
  perPage: number;
  handlePagination: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  perPage,
  totalPage,
  handlePagination,
}) => {
  if (totalPage <= 1) {
    return null;
  }

  // Generate the pagination range with ellipsis
  const generatePagination = () => {
    const pages = [];

    if (totalPage <= 7) {
      // Show all pages if total pages are less than or equal to 7
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      // For pages 1-4, show full range
      if (currentPage <= 4) {
        for (let i = 1; i <= Math.min(5, totalPage); i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPage);
      }
      // For page 5, show ... before and after
      else if (currentPage === 5) {
        pages.push(1);
        pages.push("...");
        for (let i = 4; i <= 6; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPage);
      }
      // For middle pages
      else if (currentPage > 5 && currentPage < totalPage - 3) {
        pages.push(1);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPage);
      }
      // For the last few pages
      else {
        pages.push(1);
        pages.push("...");
        for (let i = totalPage - 4; i <= totalPage; i++) {
          pages.push(i);
        }
      }
    }

    return pages;
  };

  const paginationRange = generatePagination();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={clsx(styles["comman-pagination"], {
        [styles.hidden]: totalPage <= 1,
      })}
    >
      {/* Previous button */}
      <button
        disabled={currentPage <= 1}
        className={clsx(styles["previous-btn"])}
        style={{ transform: "rotate(180deg)" }}
        onClick={() => {
          handlePagination(currentPage - 1);
          scrollToTop();
        }}
      >
        <SmallRightArrow />
      </button>

      {/* Page number buttons */}
      {paginationRange.map((page, index) => (
        <button
          key={index}
          disabled={page === "..."}
          onClick={() => {
            if (typeof page === "number") {
              handlePagination(page);
              scrollToTop();
            }
          }}
          className={clsx(
            styles["list"],
            currentPage === page && styles["btn-active"]
          )}
        >
          {page}
        </button>
      ))}

      {/* Next button */}
      <button
        disabled={currentPage >= totalPage}
        className={styles["next-btn"]}
        onClick={() => {
          handlePagination(currentPage + 1);
          scrollToTop();
        }}
      >
        <SmallRightArrow />
      </button>
    </div>
  );
};
