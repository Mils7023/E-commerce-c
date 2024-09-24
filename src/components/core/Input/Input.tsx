"use client";
import { useAppContext } from "@/context";
import { WithRequired } from "@/types";
import { convertCamelCaseToWords } from "@/utils/helper";
import dynamic from "next/dynamic";
import { FC, useState } from "react";
import { FieldError, get, useFormContext, Controller } from "react-hook-form";
import styles from "./Input.module.scss";
import { EyeSlashIcon, EyeIcon } from "@/assets/icons";
// import "react-phone-number-input/style.css";

// const PhoneInput: any = dynamic(() => import("react-phone-number-input"), {
//   ssr: false,
// });

export interface InputProps
  extends WithRequired<React.HTMLProps<HTMLInputElement>, "name"> {
  formGroupClass?: string;
}

export const Input: FC<InputProps> = ({
  label,
  type = "text",
  className,
  formGroupClass,
  name,
  ...rest
}) => {
  const context = useFormContext();
  const { countryDetails } = useAppContext();
  const [value, setValue] = useState<string | undefined>(undefined);
  const [isPasswordVisible, setPasswordVisible] = useState(false); // New state for password visibility

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible); // Toggle password visibility
  };

  if (context) {
    const {
      register,
      control,
      setValue,
      formState: { errors },
    } = context;

    // const errorMessage = (get(errors, name) as FieldError)?.message;

    const getFirstOtpError = () => {
      for (let i = 0; i < 6; i++) {
        const fieldError = get(errors, `verification_code.${i}`) as FieldError;
        if (fieldError) {
          return fieldError.message || "";
        }
      }
      return "";
    };

    const errorMessage =
      type === "otpInput"
        ? getFirstOtpError()
        : (get(errors, name) as FieldError)?.message;

    const handlePaste = async (
      event: React.ClipboardEvent<HTMLInputElement>
    ) => {
      const pastedData = event.clipboardData.getData("Text").replace(/\D/g, "");
      // Remove non-numeric characters
      const otpFields = Array.from(
        document.querySelectorAll('input[id^="verification_code-"]')
      ) as HTMLInputElement[];

      otpFields.forEach((field, index) => {
        const valueToSet = pastedData[index] || "";
        setValue(`verification_code.${index}`, valueToSet);

        // Dispatch an input event to reflect the value in the form state
        field.dispatchEvent(new Event("input", { bubbles: true }));
      });

      // Move focus to the first unfilled OTP field or keep focus on the last box if all are filled
      const firstUnfilledIndex =
        pastedData.length < otpFields.length
          ? pastedData.length
          : otpFields.length - 1; // Keep focus on the last box if all are filled

      otpFields[firstUnfilledIndex]?.focus();

      event.preventDefault(); // Prevent default paste action
      await context.trigger();
    };

    const handleKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement>,
      index: number,
      value: string
    ) => {
      console.log(typeof value);
      const otpFields = Array.from(
        document.querySelectorAll('input[id^="verification_code-"]')
      ) as HTMLInputElement[];

      if (e.key === "Backspace") {
        if (index === otpFields.length - 1 && value) {
          // If in the last (6th) box and there's a value, erase it but keep focus in the same box
          if (index === otpFields.length - 1 && !value) {
            e.currentTarget.value = "";
            otpFields[index - 1]?.focus();
          }
          e.currentTarget.dispatchEvent(new Event("input", { bubbles: true }));
        } else if (index === otpFields.length - 1 && !value) {
          // If the last (6th) box is empty, move focus to the 5th box without clearing its value
          if (index == 5) {
            otpFields[index - 1]?.focus();
            e.currentTarget.value = "";
          }
          e.preventDefault(); // Prevent the default backspace action from affecting the 5th box
        } else if (!value && index > 0) {
          // If the current box is empty and it's not the first input, move focus to the previous field
          if (index == 5) {
            otpFields[index - 1]?.focus();
          } else {
            e.currentTarget.value = "";
            otpFields[index - 1]?.focus();
            e.preventDefault(); // Prevent the default backspace action from affecting the 5th box
          }
        }
      }
    };

    if (type === "phone") {
      return (
        <div
          className={`${styles.formGroup} ${styles.mobileFormGroup} ${formGroupClass}`}
        >
          {label && <label className={styles.formLabel}>{label}</label>}

          <div className="position-relative">
            <span className={styles.countryFlag}>+44</span>
            <input
              type={type}
              className={`${styles.formControl} ${className}`}
              {...register(name as string)}
              {...rest}
            />
          </div>
          {errorMessage && (
            <span className={`${styles.errorMessage} text-danger`}>
              {convertCamelCaseToWords(errorMessage! as string)}
            </span>
          )}
        </div>
      );
    } else if (type === "otpInput") {
      return (
        <div className={`${styles.formGroup} ${formGroupClass}`}>
          {label && <div className={styles.formLabel}>{label}</div>}
          <div className={`${styles.otpContainer} d-flex`}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Controller
                key={index}
                name={`verification_code.${index}`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    id={`verification_code-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className={`${styles.formControl} ${styles.otpFormControl}`}
                    value={value || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (/^\d$/.test(val) || val === "") {
                        onChange(val);
                        if (val && index < 5) {
                          const nextInput = document.getElementById(
                            `verification_code-${index + 1}`
                          );
                          nextInput?.focus();
                        }
                      }
                    }}
                    onKeyDown={(e) => handleKeyDown(e, index, value || "")}
                    onPaste={handlePaste} // Add paste event handler
                    {...rest}
                  />
                )}
              />
            ))}
          </div>
          {errorMessage && (
            <span className={`${styles.errorMessage} text-danger`}>
              {convertCamelCaseToWords(errorMessage as string)}
            </span>
          )}
        </div>
      );
    } else if (type === "password") {
      return (
        <div className={`${styles.formGroup} ${formGroupClass}`}>
          {label && <label className={styles.formLabel}>{label}</label>}

          <div className={`${styles.passwordContainer} position-relative`}>
            <input
              type={isPasswordVisible ? "text" : "password"}
              className={`${styles.formControl} ${className}`}
              {...register(name as string)}
              {...rest}
            />
            <button
              type="button"
              className={`btn-transparent ${styles.togglePasswordButton}`}
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <EyeSlashIcon /> : <EyeIcon />}
            </button>
          </div>

          {errorMessage && (
            <span className={`${styles.errorMessage} text-danger`}>
              {convertCamelCaseToWords(errorMessage! as string)}
            </span>
          )}
        </div>
      );
    }

    return (
      <div className={`${styles.formGroup} ${formGroupClass}`}>
        {label && <label className={styles.formLabel}>{label}</label>}

        <input
          type={type}
          className={`${styles.formControl} ${className}`}
          {...register(name as string)}
          {...rest}
        />
        {errorMessage && (
          <span className={`${styles.errorMessage} text-danger`}>
            {convertCamelCaseToWords(errorMessage! as string)}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.formGroup} ${formGroupClass}`}>
      {label && <label className={styles.formLabel}>{label}</label>}

      <input
        type={type}
        className={`${styles.formControl} ${className}`}
        {...rest}
      />
    </div>
  );
};
