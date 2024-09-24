"use client";
import { Dispatch, FC, ReactNode, SetStateAction, useEffect } from "react";
import styles from "./Drawer.module.scss";

export interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: ReactNode;
  bodyClass?: string;
}

export const Drawer: FC<DrawerProps> = ({
  children,
  isOpen,
  title,
  setIsOpen,
  bodyClass,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`${styles.drawerMain} ${
          isOpen ? styles.drawerOpen : styles.drawerClose
        }`}
      >
        <div
          className={`${styles.drawerContent} ${
            isOpen ? styles.drawerOpenContent : ""
          }`}
        >
          <div className={styles.drawerArticle}>
            <header className={styles.drawerHeader}>{title}</header>
            <div className={`${styles.drawerBody} ${bodyClass}`}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.drawerOverlay} ${
          isOpen ? styles.overlayVisible : styles.overlayHidden
        }`}
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
    </>
  );
};
