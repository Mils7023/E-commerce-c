"use client";

import { Form, Input, Select, TextArea } from "@/components";
import { loginSchema, Tab } from "@/utils";
import { FC } from "react";
import styles from "./Login.module.scss";
import { UseFormReturn } from "react-hook-form";
import { useAppContext } from "@/context";
import { useAuthenticate } from "@/hooks";

export interface LoginProps {
  handleTabChange: (value: Tab) => void;
}

export interface LoginFormValue {
  email: string;
  password: string;
}

export const Login: FC<LoginProps> = ({ handleTabChange }) => {
  const { handleLogin, loginLoading } = useAuthenticate();
  const { setIsForgotPassword } = useAppContext();

  return (
    <>
      <Form<LoginFormValue>
        className=""
        onSubmit={handleLogin}
        schema={loginSchema}
      >
        <div className={`${styles.formContainer}`}>
          <Input
            label="Email *"
            name="email"
            type="email"
            placeholder="Enter Your Password"
            formGroupClass="pb-sm-4 pb-3 mb-xxl-1 mb-0"
          />
          <Input
            label="Password *"
            name="password"
            type="password"
            placeholder="Enter Your Password"
          />

          {/* <Select
            name="category"
            label="Category"
            options={[
              { value: "cake", label: "Cake" },
              { value: "cupcake", label: "Cupcake" },
            ]}
          /> */}
          <div className="text-end pt-sm-4 pt-3 mt-xxl-3 mt-md-1">
            <span
              className={`cursor-pointer h6 primary_dark_text primary-link-hover font_smb text-decoration-underline`}
              onClick={() => setIsForgotPassword(true)}
            >
              Forgot Password?
            </span>
          </div>
          <div className="pt-sm-4 pt-3 mt-xxl-2 mt-md-0">
            <button
              className={`${styles.submitButton} btn btn-gradient w-100`}
              type="submit"
              disabled={loginLoading}
            >
              {loginLoading ? "Loading..." : "Sign In"}
            </button>
          </div>
          <div className="text-center pt-sm-4 pt-3 mt-xxl-3 mt-md-1">
            <p className={`h6 black_shade5_text font_rg`}>
              Don’t have a account?{" "}
              <span
                onClick={() => handleTabChange("register")}
                className="cursor-pointer primary-link-hover primary_dark_text text-decoration-underline font_md"
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      </Form>
    </>
  );
};
