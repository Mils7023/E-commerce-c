"use client";
import { WithRequired } from "@/types";
import { FieldError, useFormContext } from "react-hook-form";
import styles from "./Select.module.scss";

interface ISelectProps
  extends WithRequired<
    Omit<React.HTMLProps<HTMLSelectElement>, "label">,
    "name"
  > {
  label?: React.ReactNode;
  options: { value: string | number; label: string }[];
  formGroupClass?: string;
  labelClass?: string;
  optionClass?: string;
  formLabel?: string;
}

export const Select: React.FC<ISelectProps> = (props) => {
  const {
    name,
    label,
    formGroupClass,
    className,
    options,
    labelClass,
    optionClass,
    formLabel,
    onChange,
    ...rest
  } = props;
  const context = useFormContext();

  if (context) {
    const {
      register,
      formState: { errors },
    } = context;

    return (
      <div className={`${styles.formGroup} ${formGroupClass}`}>
        <div className={`${labelClass}`}>
          {label && (
            <label className={`${styles.formLabel} ${formLabel} text-nowrap`}>
              {label} :
            </label>
          )}
        </div>
        <div className={`${optionClass}`}>
          <select
            className={`${styles.formSelect} ${className}`}
            {...register(name)}
            {...rest}
            onChange={(event: any) => {
              let value = event.target.value;
              register(name);
              onChange && onChange(value);
            }}
          >
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {errors[name] && (
            <span className="text-danger pt-2 d-inline-block font-14">
              {(errors[name] as FieldError)?.message}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.formGroup} ${formGroupClass}`}>
      <div className={`${labelClass}`}>
        {label && (
          <label className={`${styles.formLabel} text-nowrap`}>{label}</label>
        )}
      </div>
      <div className={`${optionClass}`}>
        <select
          name={name}
          className={`${styles.formSelect} ${className}`}
          {...rest}
          onChange={onChange}
        >
          <option value="" selected>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

//  ***** Usage *****
// <Select
//   name="category"
//   label="Category"
//   options={[
//     { value: "cake", label: "Cake" },
//     { value: "cupcake", label: "Cupcake" },
//   ]}
// />;
