"use client";
import { WithRequired } from "@/types";
import { FieldError, useFormContext } from "react-hook-form";
import styles from "./TextArea.module.scss";

interface ITextAreaProps
  extends WithRequired<
    Omit<React.HTMLProps<HTMLTextAreaElement>, "label">,
    "name"
  > {
  label?: React.ReactNode;
  isPassword?: boolean;
  labelClass?: string;
  inputClass?: string;
  formGroupClass?: string;
}

export const TextArea: React.FC<ITextAreaProps> = (props) => {
  const {
    name,
    label,
    isPassword,
    inputClass,
    labelClass,
    type,
    formGroupClass,
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
        {label && (
          <label className={`${styles.formLabel} ${labelClass}`}>{label}</label>
        )}
        <textarea
          className={`${styles.formControl} ${inputClass}`}
          {...register(name)}
          {...rest}
        ></textarea>

        {errors[name] && (
          <span className="text-danger py-1 text-capitalize">
            {(errors[name] as FieldError)?.message}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`${styles.formGroup} ${formGroupClass}`}>
      {label && (
        <label className={`${styles.formLabel} ${labelClass}`}>{label}</label>
      )}
      <textarea
        name={name}
        className={`${styles.formControl} ${inputClass}`}
        {...rest}
      />
    </div>
  );
};

// ***** Usage *****//
// <TextArea
//   label="User Note"
//   name="note"
//   placeholder="User Note"
//   className=""
// />;
