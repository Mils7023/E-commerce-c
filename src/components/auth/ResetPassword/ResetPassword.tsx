"use client";
import React from "react";
import styles from "./ResetPassword.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import Link from "next/link";
import { Form } from "@/components/common";
import { resetPasswordFormSchema } from "@/utils";
import { Input } from "@/components/core";
import { useAuthenticate } from "@/hooks";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export interface ResetPasswordFormValue {
  id: string;
  resetPasswordToken: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordProps {
  id: string;
  token: string;
}
export const ResetPassword = ({
  resetPasswordParam,
}: {
  resetPasswordParam: ResetPasswordProps;
}) => {
  const { handlePasswordReset } = useAuthenticate();
  const resetPasswordToken = resetPasswordParam.token;
  const userId = resetPasswordParam.id;
  const router = useRouter();

  const handleSubmit = async (values: ResetPasswordFormValue, methods: any) => {
    if (!resetPasswordToken || !userId) {
      console.error("Reset token or user ID is missing");
      toast.error("Something went wrong. Please try again.");
      return;
    }

    const response = await handlePasswordReset(
      { ...values, resetPasswordToken, id: userId },
      methods
    );
    if (response) {
      router.push("/");
    }
  };
  return (
    <section className={`${styles.global_header_spacing} third_bg`}>
      <div className="common-padding">
        <div className="container">
          <div className={styles.resetPassword_card}>
            <div
              className={`${styles.resetPassword_card_title} pb-md-4 pb-3 mb-4`}
            >
              <h2 className="h4 black_text font_smb text-center pb-2 ">
                Reset Password
              </h2>
            </div>
            <Form<ResetPasswordFormValue>
              className="mt-md-2 pt-xl-1"
              onSubmit={handleSubmit}
              schema={resetPasswordFormSchema}
            >
              <Input
                label="New Password"
                name="newPassword"
                type="password"
                placeholder="Enter New Password"
                formGroupClass="pb-sm-4 pb-lg-3 pb-xl-4 pb-3 mb-xxl-1 mb-0"
              />
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Enter Confirm Password"
              />
              <button
                className={` btn w-auto rounded-pill mt-xl-5 mt-4 d-flex mx-auto`}
              >
                RESET PASSWORD
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
