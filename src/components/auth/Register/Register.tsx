"use client";

import { Checkbox, Form, Input } from "@/components";
import { registrationSchema, Tab } from "@/utils";
import { FC, useState } from "react";
import styles from "./Register.module.scss";
import { useAuthenticate } from "@/hooks";
import Link from "next/link";

export interface RegisterProps {
  handleTabChange: (value: Tab) => void;
}

export interface RegisterFormValue {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: string;
  confirm_password: string;
  is_agree: boolean;
}

export const Register: FC<RegisterProps> = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { handleVerify, verificationLoading } = useAuthenticate();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  return (
    <>
      <Form<RegisterFormValue>
        className=""
        onSubmit={handleVerify}
        schema={registrationSchema}
      >
        <div className={`${styles.formContainer}`}>
          <Input
            label="First Name *"
            placeholder="Enter Your Name"
            name="firstname"
            formGroupClass="pb-sm-4 pb-3 mb-xxl-1 mb-0"
          />
          <Input
            label="Last Name *"
            placeholder="Enter Your Surname"
            name="lastname"
            formGroupClass="pb-sm-4 pb-3 mb-xxl-1 mb-0"
          />
          <Input
            label="Mobile Number *"
            placeholder="Enter Your Mobile Number"
            name="phonenumber"
            type="phone"
            formGroupClass="pb-sm-4 pb-3 mb-xxl-1 mb-0"
          />
          <Input
            label="Email *"
            placeholder="Enter Your Email"
            name="email"
            type="email"
            formGroupClass="pb-sm-4 pb-3 mb-xxl-1 mb-0"
          />
          <Input
            label="Password *"
            placeholder="Enter Your Password"
            name="password"
            type="password"
            formGroupClass="pb-sm-4 pb-3 mb-xxl-1 mb-0"
          />
          <Input
            label="Confirm Password *"
            placeholder="Confirm Your Password"
            name="confirm_password"
            type="password"
            formGroupClass="pb-sm-4 pb-3 mb-xxl-1 mb-0"
          />
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            label={
              <span>
                I agree to the{" "}
                <Link
                  className="primary_text text-decoration-underline primary-link-hover font_md"
                  href=""
                >
                  Terms
                </Link>{" "}
                of Use &{" "}
                <Link
                  className="primary_text text-decoration-underline primary-link-hover font_md"
                  href=""
                >
                  Privacy Policy
                </Link>
              </span>
            }
            //
            name="is_agree"
            key={1}
            id="key1"
          />

          <div className="pt-xxl-4 pt-3">
            <button
              className={`${styles.submitButton} btn btn-gradient w-100`}
              type="submit"
              disabled={verificationLoading}
            >
              {verificationLoading ? "Loading..." : "Send Verification Code"}
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};
