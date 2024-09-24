"use client";
import styles from "./CodeVerification.module.scss";
import { Form } from "@/components/common";
import { BrowserPersistence, localStorageKeys, otpSchema, Tab } from "@/utils";
import { Input } from "@/components/core";
import { UseFormReturn } from "react-hook-form";
import { useAuthenticate } from "@/hooks";
import { useState, useEffect } from "react";
import { Authentication } from "../Authentication";
import { useAppContext } from "@/context";

export interface OtpFormValue {
  verification_code: string[];
}

export interface ResendOTPFormValue {
  email: string;
  isresend: boolean;
}

export const CodeVerification = () => {
  const [showAuthentication, setShowAuthentication] = useState(false);
  const { handleRegister, handleResendOTP, registerLoading } = useAuthenticate();
  const [activeMenu, setActiveMenu] = useState<Tab>("register");
  const { setIsOtpSent, setIsForgotPassword } = useAppContext();
  const [resend, setResend] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const storage = new BrowserPersistence();
  const email = storage.getItem(localStorageKeys.USER_EMAIL);
  // console.log("App context: ",);
  const handleResendCode = async (event:React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    if (resendTimer === 0) {
      setResendTimer(60);
      const response = await handleResendOTP({
        email: email,
        isresend: true,
      });
      if(response){
        console.log("Submitted OTP:",response);
      }
    }
    // handleVerify
  };

  const handleTabChange = (tab: Tab) => {
    if (tab) {
      setActiveMenu(tab);
    }
  };
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);
  
  if (showAuthentication) {
    return (
      <Authentication
        activeMenu={activeMenu}
        handleTabChange={handleTabChange}
      />
    );
  }

  return (
    <Form<OtpFormValue>
      schema={otpSchema}
      onSubmit={handleRegister}
      defaultValues={{ verification_code: ["", "", "", "", "", ""] }}
      className="otp-form"
    >
      <div className={`${styles.formContainer}`}>
        <Input
          label="Enter The Verification Code"
          name="verification_code"
          type="otpInput"
          // maxLength={1}
          onInput={(e)=>console.log(parseInt(e.currentTarget.value))}
          formGroupClass="pb-3"
          />
          
        <p className="font-18 black_shade3_text font_rg">
          We emailed you a six-digit code to {email}. Enter the code above to
          confirm your email address.
        </p>
        <div className="pt-sm-4 pt-3 mt-xxl-2 mt-md-0">
        <button
          className={`btn-transparent`}
          onClick={handleResendCode}
          disabled={resendTimer > 0}
        >
          {resendTimer > 0 ? 
          <span
          className={`h6 primary_dark_text font_smb`}
        >
         Wait for {resendTimer}s
        </span>
           : 
          <span
            className={`cursor-pointer h6 primary_dark_text primary-link-hover font_smb text-decoration-underline`}
          >
            Resend Code
          </span>
          }
        </button>
        </div>
        <div className="pt-sm-4 pt-3 mt-xxl-2 mt-md-0">
          <button
            className={`${styles.submitButton} btn btn-gradient w-100`}
            type="submit"
            disabled={registerLoading}
          >
            {registerLoading ? "Loading..." : "Create an account"}
          </button>
          <button
            className={`${styles.submitButton} btn btn-grey-outline w-100 mt-md-4 mt-3`}
            onClick={(event) => {
              event.preventDefault();
              storage.removeItem(localStorageKeys.USER_EMAIL);
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
