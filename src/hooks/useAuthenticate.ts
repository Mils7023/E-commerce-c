"use client";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import {
  LoginFormValue,
  OtpFormValue,
  RegisterFormValue,
  ForgotPasswordFormValue, ResendOTPFormValue,
  ResetPasswordFormValue,
} from "@/components";
import { UseFormReturn } from "react-hook-form";
import { useCallback, useState } from "react";
import { Mutations } from "@/utils/graphql";
import { useAppContext, useCartContext } from "@/context";
// import { formatPhoneNumberIntl } from "react-phone-number-input";
import { clearToken, setCurrentUser, setToken } from "@/redux/userSlice";
import { useDispatch } from "react-redux";
import { BrowserPersistence, localStorageKeys } from "@/utils";

export interface UseAuthenticateProps {}

export interface UseAuthenticateReturns {
  verificationLoading: boolean;
  registerLoading: boolean;
  loginLoading: boolean;
  passwordResetLinkLoader: boolean;
  handlePasswordResetLink: (
    value: ForgotPasswordFormValue,
    methods: UseFormReturn<ForgotPasswordFormValue>
  ) => any;
  handlePasswordReset: (
    value: ResetPasswordFormValue,
    methods: UseFormReturn<ResetPasswordFormValue>
  ) => any;
  handleRegister: (
    value: OtpFormValue,
    methods: UseFormReturn<OtpFormValue>
  ) => any;
  handleVerify: (
    value: RegisterFormValue,
    methods: UseFormReturn<RegisterFormValue>
  ) => any;
  handleResendOTP: (
    value: ResendOTPFormValue
  ) => any;
  handleLogin: (
    value: LoginFormValue,
    methods: UseFormReturn<LoginFormValue>
  ) => any;
  handleLogout: () => any;
}

export const useAuthenticate = (): UseAuthenticateReturns => {
  const {
    CREATE_CUSTOMER,
    VALIDATE_CUSTOMER,
    SEND_VERIFICATION_CODE,
    LOGIN_CUSTOMER,
    LOGOUT_CUSTOMER,
    MERGE_CART,
    REQUEST_PASSWORD_RESET_EMAIL,
    RESET_PASSWORD_FOR_CUSTOMER,
  } = Mutations;

  const [validateCustomer] = useMutation(VALIDATE_CUSTOMER);
  const [sendVerificationCode] = useMutation(SEND_VERIFICATION_CODE);
  const [createCustomer] = useMutation(CREATE_CUSTOMER);
  const [loginCustomer] = useMutation(LOGIN_CUSTOMER);
  const [userLogout] = useMutation(LOGOUT_CUSTOMER);
  const [mergeCarts] = useMutation(MERGE_CART);
  const [customerForgotPasswordResetLink] = useMutation(
    REQUEST_PASSWORD_RESET_EMAIL
  );
  const [customerResetPassword] = useMutation(RESET_PASSWORD_FOR_CUSTOMER);

  const { setIsOtpSent, setIsAccountDrawerOpen, setAuthToken } =
    useAppContext();
  const { cartDetails, refetchCartDetails, createCartAfterSignIn } =
    useCartContext();
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const storage = new BrowserPersistence();
  const sourceCartId = cartDetails?.id;

  const [verificationLoading, setVerificationLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [passwordResetLinkLoader, setPasswordResetLinkLoader] = useState(false);
  const handlePasswordResetLink = useCallback(
    async (
      value: ForgotPasswordFormValue,
      methods: UseFormReturn<ForgotPasswordFormValue>
    ) => {
      try {
        setPasswordResetLinkLoader(true);
        const { email } = value;
        const { data: resetLinkData } = await customerForgotPasswordResetLink({
          variables: {
            email: email.trim(),
          },
        });
        console.log(resetLinkData);
        if (resetLinkData) {
          toast.success(
            "Password reset link successfully sent to your email address"
          );
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setPasswordResetLinkLoader(false);
      }
    },
    [customerForgotPasswordResetLink]
  );

  const handlePasswordReset = async (
    value: ResetPasswordFormValue,
    methods: UseFormReturn<ResetPasswordFormValue>
  ) => {
    try {
      setPasswordResetLinkLoader(true);
      const { id, resetPasswordToken, newPassword } = value;
      const { data } = await customerResetPassword({
        variables: {
          id,
          resetPasswordToken,
          newPassword,
        },
      });

      if (data) {
        toast.success("Password reset successfully.");
        return data; // Return the response data
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setPasswordResetLinkLoader(false);
    }
  };

  const handleVerify = useCallback(
    async (
      value: RegisterFormValue,
      methods: UseFormReturn<RegisterFormValue>
    ) => {
      try {
        setVerificationLoading(true);
        const { email, phonenumber, firstname, lastname, password } = value;

        const { data: validateData } = await validateCustomer({
          variables: {
            input: {
              email: email.trim(),
              phonenumber: `+44 ${phonenumber}`,
            },
          },
        });

        if (validateData) {
          const input = {
            firstname,
            lastname,
            password,
            phonenumber: `+44 ${phonenumber}`,
            email: email.trim(),
            isresend: false,
          };

          const { data: sendData } = await sendVerificationCode({
            variables: { input },
          });

          if (sendData) {
            methods.reset();
            setIsOtpSent(true);
            storage.setItem(
              "userEmail",
              sendData.sendEmailVerificationCode.email
            );
            toast.success(sendData.sendEmailVerificationCode.message);
          }
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setVerificationLoading(false);
      }
    },
    [validateCustomer, sendVerificationCode, setIsOtpSent, storage]
  );

  const handleResendOTP = useCallback(
    async (
      value: ResendOTPFormValue
    ) => {
      try {
        setVerificationLoading(true);
        const { email,isresend } = value;

        // if (validateData) {
          const input = {
            email: email.trim(),
            isresend: isresend,
          };

          const { data: sendData } = await sendVerificationCode({
            variables: { input },
          });

          if (sendData) {
            setIsOtpSent(true);
            storage.setItem(
              "userEmail",
              sendData.sendEmailVerificationCode.email
            );
            toast.success(sendData.sendEmailVerificationCode.message);
            return sendData;
          }
        // }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setVerificationLoading(false);
      }
    },
    [sendVerificationCode, setIsOtpSent, storage]
  );

  const handleRegister = useCallback(
    async (value: OtpFormValue, methods: UseFormReturn<OtpFormValue>) => {
      try {
        setRegisterLoading(true);
        const userEmail = storage.getItem("userEmail");
        const { data: registerData } = await createCustomer({
          variables: {
            input: {
              email: userEmail,
              otp: value.verification_code.join(""),
            },
          },
        });

        if (registerData) {
          storage.removeItem("userEmail");
          const newAuthToken = registerData?.createCustomerV3?.token;
          // process after successful reg. is pending to create new cart and merge with previous cart id.
          dispatch(setToken({ token: newAuthToken }));
          const cart = await createCartAfterSignIn(newAuthToken);
          const newCart = cart?.data?.cartId;

          await mergeCarts({
            variables: {
              destinationCartId: newCart,
              sourceCartId,
            },
            context: { headers: { Authorization: `Bearer ${newAuthToken}` } },
          });
          setIsAccountDrawerOpen(false);
          storage.setItem(localStorageKeys.CART_ID, newCart);
          setIsAccountDrawerOpen(false);
          setRegisterLoading(false);
          window.location.reload();
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setRegisterLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [createCustomer, dispatch, setIsAccountDrawerOpen]
  );

  const handleLogin = useCallback(
    async (value: LoginFormValue, methods: UseFormReturn<LoginFormValue>) => {
      try {
        setLoginLoading(true);

        const { data: loginData } = await loginCustomer({ variables: value });

        if (loginData) {
          const newAuthToken = loginData.generateCustomerToken?.token;
          dispatch(setToken({ token: newAuthToken }));
          const cart = await createCartAfterSignIn(newAuthToken);
          const newCart = cart?.data?.cartId;

          await mergeCarts({
            variables: {
              destinationCartId: newCart,
              sourceCartId,
            },
            context: { headers: { Authorization: `Bearer ${newAuthToken}` } },
          });
          setIsAccountDrawerOpen(false);
          storage.setItem(localStorageKeys.CART_ID, newCart);
          window.location.reload();
        }
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoginLoading(false);
      }
    },
    [
      loginCustomer,
      dispatch,
      createCartAfterSignIn,
      mergeCarts,
      sourceCartId,
      setIsAccountDrawerOpen,
      storage,
    ]
  );

  const handleLogout = async () => {
    try {
      const response = await userLogout();
      if (response) {
        dispatch(clearToken({ type: "clearToken" }));
        setAuthToken("");
        dispatch(
          setCurrentUser({ email: "", firstname: "", lastname: "", avatar: "" })
        );
        console.log("response", response);

        setIsAccountDrawerOpen(false);
        // toast.success("Logout successful.");
        window.location.reload();
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return {
    passwordResetLinkLoader,
    verificationLoading,
    registerLoading,
    loginLoading,
    handleRegister,
    handleVerify,
    handleResendOTP,
    handleLogin,
    handleLogout,
    handlePasswordResetLink,
    handlePasswordReset,
  };
};
