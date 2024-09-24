"use client";
import { CommonShimmer, Form, Input } from "@/components";
import { identificationSchema, identificationSchemaP } from "@/utils";
import { useMutation } from "@apollo/client";
import { FC, Fragment, useContext, useEffect, useState } from "react";
import { CheckoutContext, useAppContext } from "@/context";
import { useAuthenticate } from "@/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Mutations } from "@/utils/graphql";
import styles from "../Checkoutform/Checkoutform.module.scss";

export interface IdentificationProps {}

interface IdentificationForm {
  email: string;
  password: string;
}

export const Identification: FC<IdentificationProps> = () => {
  const userSelector = useSelector((state: RootState) => state?.user);
  const { SET_EMAIL_FOR_GUEST } = Mutations;
  const { cartDetails, cartId, checkoutLoading, refetchCartDetails } =
    useContext(CheckoutContext);
  const { handleLogin, loginLoading } = useAuthenticate();
  const { authToken } = useAppContext();

  const [setEmailForGuest, { loading: serEmailForGuestLoading }] =
    useMutation(SET_EMAIL_FOR_GUEST);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [showPasswordField, setShowPasswordField] = useState(false);

  const handleSetGuestEmail = async (email: string) => {
    const payload = {
      input: {
        cart_id: cartId,
        email,
      },
    };
    try {
      const response = await setEmailForGuest({ variables: payload });
      if (response) {
        await refetchCartDetails();
      }
    } catch (error: any) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (cartDetails?.email) {
      setIsFormOpen(false);
    }
  }, [cartDetails?.email]);

  const handleContinue = () => {
    if (emailValue) {
      setShowPasswordField(true);
    }
  };

  const handleGuestCheckout = async () => {
    await handleSetGuestEmail(emailValue);
  };

  return (
    <Fragment>
      <div className={`${styles.checkout_identification}`}>
        <p className="h5 font_md black_text pb-lg-4 pb-3">IDENTIFICATION</p>
        {checkoutLoading ? (
          <CommonShimmer flag="identification" />
        ) : (
          <>
            {isFormOpen ? (
              <>
                <span className={`font_18 font_md black_text`}>
                  In order to better assist you, please enter your email address
                </span>
                <Form<IdentificationForm>
                  className="pt-xl-4 pt-3"
                  onSubmit={showPasswordField ? handleLogin : handleContinue}
                  schema={
                    showPasswordField
                      ? identificationSchemaP
                      : identificationSchema
                  }
                >
                  <div>
                    <Input
                      placeholder="Enter your E-mail here"
                      name="email"
                      formGroupClass="pb-xl-4 pb-3"
                      onChange={(e: any) => setEmailValue(e.target.value)}
                      disabled={showPasswordField}
                    />
                    {showPasswordField && (
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        formGroupClass="pb-xl-4 pb-3"
                      />
                    )}
                  </div>

                  {showPasswordField ? (
                    <Fragment>
                      <div className="d-flex justify-content-end align-items-center gap-3">
                        <button
                          className={`font_18 font_smb primary_text text-decoration-underline primary-link-hover btn-transparent`}
                        >
                          {loginLoading ? "Loding..." : "Sign In"}
                        </button>

                        <button
                          className={`${styles.identification_btn} btn btn-gradient btn-primary-md rounded-pill`}
                          onClick={handleGuestCheckout}
                        >
                          Guest check out
                        </button>
                      </div>
                    </Fragment>
                  ) : (
                    <div className="d-flex justify-content-end align-items-center gap-3">
                      <button
                        type="submit"
                        className={`${styles.identification_btn} btn btn-gradient btn-primary-md rounded-pill`}
                      >
                        Continue
                      </button>
                    </div>
                  )}
                </Form>
              </>
            ) : (
              <div className="d-flex gap-1 flex-column">
                <span className={`font_18 font_md black_shade5_text`}>
                  {`Hi, ${userSelector?.currentUser?.firstname} ${userSelector?.currentUser?.lastname}`}
                </span>
                <span className={`font_18 font_md black_shade5_text`}>
                  Your email is
                </span>
                <span className="font_18 font_md black_text">
                  {cartDetails?.email}
                </span>
                {!authToken && (
                  <span className={`font_18 font_md black_shade5_text`}>
                    You can create an account after checkout.
                  </span>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </Fragment>
  );
};
