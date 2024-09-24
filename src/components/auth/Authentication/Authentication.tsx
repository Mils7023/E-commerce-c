"use client";
import { useAppContext } from "@/context";
import { FC } from "react";
import styles from "./Authentication.module.scss";
import { CancelIcon } from "@/assets/icons";
import { Login } from "../Login";
import { Register } from "../Register";
import { CodeVerification } from "../CodeVerification";
import { ForgotPassword } from "../ForgotPassword";

export interface AuthenticationProps {
  activeMenu: string;
  handleTabChange: any;
}

export const Authentication: FC<AuthenticationProps> = (props) => {
  const { activeMenu } = props;
  const { isOtpSent, isForgotPassword } = useAppContext();

  return (
    <div className={styles.authMain}>
      <div className={styles.authBody}>
        {isOtpSent ? (
          <CodeVerification />
        ) : isForgotPassword ? (
          <ForgotPassword />
        ) : (
          <>
            {activeMenu === "login" && (
              <Login handleTabChange={props.handleTabChange} />
            )}
            {activeMenu === "register" && (
              <Register handleTabChange={props.handleTabChange} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
