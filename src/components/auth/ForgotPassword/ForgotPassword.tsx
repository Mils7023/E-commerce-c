"use client";

import { Form } from "@/components/common";
import { Input } from "@/components/core";
import { UseFormReturn } from "react-hook-form";
import styles from "./ForgotPassword.module.scss";
import { forgotPasswordSchema, Tab } from "@/utils";
import { useAuthenticate } from "@/hooks";
import { useState } from "react";
import { Authentication } from "../Authentication";
import { useAppContext } from "@/context";

export interface ForgotPasswordFormValue {
  email: string;
}

export const ForgotPassword = () => {
  const { handlePasswordResetLink, passwordResetLinkLoader } =
    useAuthenticate();
  const [showAuthentication, setShowAuthentication] = useState(false);
  const [activeMenu, setActiveMenu] = useState<Tab>("login");
  const { setIsOtpSent, setIsForgotPassword } = useAppContext();

  const handleTabChange = (tab: Tab) => {
    if (tab) {
      setActiveMenu(tab);
    }
  };

  if (showAuthentication) {
    return (
      <Authentication
        activeMenu={activeMenu}
        handleTabChange={handleTabChange}
      />
    );
  }

  return (
    <Form<ForgotPasswordFormValue>
      schema={forgotPasswordSchema}
      onSubmit={handlePasswordResetLink}
      className="otp-form"
    >
      <div className={`${styles.formContainer}`}>
        <Input
          label="Email *"
          placeholder="Enter Your Register Email Address"
          name="email"
          type="email"
          formGroupClass="pb-3"
        />
        <p className="font-18 black_shade3_text fnt_rg">
          Enter your register email address an we will send you a link to reset
          your password.
        </p>
        <div className="pt-sm-4 pt-3 mt-xxl-2 mt-md-0">
          <button
            className={`${styles.submitButton} btn btn-gradient w-100`}
            type="submit"
            disabled={passwordResetLinkLoader}
          >
            {passwordResetLinkLoader ? "Loading..." : "SUBMIT"}
          </button>
          {/* {passwordResetLinkLoader ? "Loading..." : "Send Password Reset Link"} */}
          <button
            className={`${styles.submitButton} btn btn-grey-outline w-100 mt-md-4 mt-3`}
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              setShowAuthentication(true);
              setIsOtpSent(false);
              setIsForgotPassword(false);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </Form>
  );
};
