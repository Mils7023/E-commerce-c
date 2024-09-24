"use client";
import { useAppContext } from "@/context";
import { FC } from "react";
import { useRouter } from "next/navigation";
import styles from "./UserAccountDrawer.module.scss";
import { accountMenuList } from "@/utils";
import { useAuthenticate } from "@/hooks";

export interface UserAccountDrawerProps {}

export const UserAccountDrawer: FC<UserAccountDrawerProps> = () => {
  const router = useRouter();
  const { setIsAccountDrawerOpen } = useAppContext();
  const { handleLogout } = useAuthenticate();

  return (
    <div className={styles.accountModal}>
      <div
        className={`${styles.accountModalHeader} d-flex gap-3 align-items-center`}
      >
        {/* <h2>My Account</h2>
        <button
          className={styles.closeButton}
          onClick={() => setIsAccountDrawerOpen(false)}
        >
          <CancelIcon />
        </button> */}
        {/* <Image
          src={UserImage}
          width={80}
          height={80}
          alt="User Image"
          title="Cannellio Cake Toppers - User Image"
        />
        <span className="h5 black_text font_md">Hey, Jacob</span> */}
      </div>
      <div className={`${styles.accountModalBody} d-flex flex-column gap-3`}>
        {accountMenuList.map((item, index) => (
          <button
            key={index}
            className="btn btn-grey w-100"
            onClick={() => {
              router.push(`/${item?.path}`);
              setIsAccountDrawerOpen(false);
            }}
          >
            {item?.menu}
          </button>
        ))}
        <button
          className="btn btn-gradient w-100"
          onClick={() => {
            handleLogout();
            setIsAccountDrawerOpen(false);
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
