"use client";
import {
  Authentication,
  CodeVerification,
  Drawer,
  UserAccountDrawer,
} from "@/components";
import { useAppContext, useCartContext } from "@/context";
import { FC, Fragment, SVGProps, useState } from "react";
import styles from "./UserDrawer.module.scss";
import { Avatar, CancelIcon } from "@/assets/icons";
import clsx from "clsx";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Tab, tabList } from "@/utils";
import { getImageUrl } from "@/utils/imageHelper";

// export interface UserDrawerProps extends SVGProps<SVGSVGElement> {}
export interface UserDrawerProps {
  strokeWidth: any;
  width: any;
  height: any;
}

export const UserDrawer: FC<UserDrawerProps> = ({
  strokeWidth,
  width,
  height,
}) => {
  const [activeMenu, setActiveMenu] = useState<Tab>("login");
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const {
    isAccountDrawerOpen,
    authToken,
    setIsAccountDrawerOpen,
    isOtpSent,
    isForgotPassword,
    setIsOtpSent,
    setIsForgotPassword,
  } = useAppContext();

  const { cartDetails } = useCartContext();

  const handleTabChange = (tab: Tab) => {
    if (tab) {
      setActiveMenu(tab);
    }
  };

  return (
    <Fragment>
      <button
        className={`${styles.toggleButton} btn-transparent`}
        onClick={() => setIsAccountDrawerOpen((prev) => !prev)}
      >
        <div tabIndex={0} role="button" className={styles.avatarContainer}>
          <Avatar strokeWidth={strokeWidth} width={width} height={height} />
        </div>
      </button>

      <Drawer
        isOpen={isAccountDrawerOpen}
        setIsOpen={() => setIsAccountDrawerOpen((prev) => !prev)}
        // bodyClass={`${cartDetails?.items?.length === 0 && "p-0"} p-5`}
        title={
          <div className={styles.authHeader}>
            {isOtpSent ? (
              <div className={styles.authHeaderTitle}>VERIFICATION</div>
            ) : isForgotPassword ? (
              <div className={styles.authHeaderTitle}>FORGOT PASSWORD</div>
            ) : authToken ? (
              <div
                className={`d-flex gap-2 align-items-center ${styles.authHeaderTitle}`}
              >
                <Image
                  src={
                    currentUser?.avatar
                      ? `${process.env.MEDIA_URL}/${currentUser?.avatar}`
                      : getImageUrl("user-image.png")
                  }
                  alt="User Image"
                  width={100}
                  height={100}
                  className="rounded-circle"
                />
                <span className="h5 black_text font_md">
                  Hey, {currentUser?.firstname}
                </span>
              </div>
            ) : (
              <div className={styles.tabList}>
                {tabList.map((menu, index) => (
                  <button
                    className={clsx(
                      styles.tabButton,
                      menu.value === activeMenu
                        ? styles.active
                        : styles.inactive
                    )}
                    key={index}
                    onClick={() => handleTabChange(menu.value)}
                  >
                    {menu.label}
                  </button>
                ))}
              </div>
            )}
            <div>
              <button
                className={styles.closeButton}
                onClick={() => {
                  setIsAccountDrawerOpen(false);
                  setIsOtpSent(false);
                  setIsForgotPassword(false);
                }}
              >
                <CancelIcon className="black_text" />
              </button>
            </div>
          </div>
        }
      >
        <div className={authToken ? styles.authenticated : styles.hidden}>
          <UserAccountDrawer />
        </div>
        <div className={authToken ? styles.hidden : styles.unauthenticated}>
          <Authentication
            activeMenu={activeMenu}
            handleTabChange={handleTabChange}
          />
        </div>
      </Drawer>
    </Fragment>
  );
};
