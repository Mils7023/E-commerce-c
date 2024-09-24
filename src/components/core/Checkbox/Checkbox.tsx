"use client";
import { WithRequired } from "@/types";
import { FC } from "react";
import { FieldError, useFormContext } from "react-hook-form";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps
  extends WithRequired<
    Omit<React.HTMLProps<HTMLInputElement>, "label">,
    "name"
  > {
  label?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  color?: string;
  checked?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  className,
  name,
  label,
  disabled,
  id,
  color,
  onChange,
  checked,
  ...rest
}) => {
  const context = useFormContext();

  if (context) {
    const {
      register,
      formState: { errors },
    } = context;

    return (
      <div
        className={`${styles.formControl} ${
          color === "primary" && `${styles.primaryTheme_formcontrol}`
        }`}
      >
        <div className={styles.labelWrapper}>
          <input
            className={`${styles.checkbox} ${className}`}
            type="checkbox"
            // name={name}
            {...register(name)}
            onChange={(e) => {
              register(name).onChange(e);
              onChange && onChange(e);
            }}
            id={id}
            disabled={disabled}
            defaultChecked={checked}
          />
          {label && (
            <label htmlFor={id} className={styles.labelText}>
              {label}
            </label>
          )}

          {errors[name] && (
            <span className={styles.errorMessage}>
              {(errors[name] as FieldError)?.message}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${styles.formControl} ${
        color === "primary" && `${styles.primaryTheme_formcontrol}`
      }`}
    >
      <div className={styles.labelWrapper}>
        <input
          type="checkbox"
          defaultChecked={checked}
          className={`${styles.checkbox} ${className}`}
          name={name}
          onChange={onChange}
          {...rest}
          id={id}
        />
        {label && (
          <label htmlFor={id} className={styles.labelText}>
            {label}
          </label>
        )}
      </div>
    </div>
  );
};
