"use client";
import { FC, ReactNode, useEffect, useState } from "react";
import { FieldError, useFormContext, get } from "react-hook-form";
import { RadioButtonProps } from ".";
import styles from "../CategoryRadio/CategoryRadio.module.scss";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHelper";

export interface RadioGroupProps {
  items: {
    label: string | ReactNode;
    value: string | number;
  }[];
  name: string;
  className?: string;
  label?: React.ReactNode;
  radioWrapper?: string;
  radioContainer?: string;
  onChange?: (value: any) => void;
  defaultValue?: any;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
  const {
    name,
    label,
    value,
    id,
    radioContainer,
    isShowError = true,
    className,
    onChange,
    checked,
    ...rest
  } = props;

  return (
    <label
      className={`${styles.formControl} ${styles.checkoutFormControl} ${className} `}
    >
      <input
        id={id}
        type="radio"
        // name={`${value}-${name}`}
        value={value}
        className={`${styles.radio} `}
        onChange={onChange}
        checked={checked}
        {...rest}
      />
      <span className={`${styles.title} `}>{label}</span>
      <div className={styles.sideLable}>
        {label == "Credit/Debit Card" && (
          <Image
            src={getImageUrl('payment-options.png')}
            alt="credit option"
            title="Cannellio Cake Toppers - credit option"
            width={100}
            height={100}
          />
        )}
        {label == "PayPal Express Checkout" && (
          <Image
            src={getImageUrl('pay-pal.png')}
            alt="Paypal option"
            title="Cannellio Cake Toppers - Paypal option"
            width={100}
            height={100}
          />
        )}
        {label == "Google Pay" && (
          <Image
            src={getImageUrl('gpay.png')}
            alt="Gpay option"
            title="Cannellio Cake Toppers - Gpay option"
            width={100}
            height={100}
          />
        )}
        {label == "Amazonpay" && (
          <Image
            src={getImageUrl('amazon-pay.png')}
            alt="Amazon option"
            title="Cannellio Cake Toppers - Amazon option"
            width={100}
            height={100}
          />
        )}
      </div>
    </label>
  );
};

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    className,
    items,
    name,
    label,
    onChange,
    radioWrapper,
    radioContainer,
    defaultValue,
    ...rest
  } = props;

  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    setSelected(defaultValue);
  }, [defaultValue]);

  const context = useFormContext();

  if (context) {
    const {
      formState: { errors },
      register,
      clearErrors,
    } = context;

    const errorMessage = (get(errors, name) as FieldError)?.message;

    return (
      <div className={`flex ${radioWrapper}`}>
        {label && label}
        <div className="flex flex-col gap-2">
          <div className={`${className}`}>
            {items.map((item, i) => (
              <RadioButton
                checked={selected && item.value == selected}
                isShowError={false}
                name={name}
                value={item.value}
                label={item.label}
                key={i}
                id={`${item.value}-${name}-id`}
                radioContainer={radioContainer}
                onChange={(value: any) => {
                  setSelected(value.target.checked);
                  register(name).onChange(value);
                  onChange && onChange(value.target.checked);
                  clearErrors(name);
                }}
              />
            ))}
          </div>
          {errorMessage && (
            <span className="text-[#ff0000] py-1 first-letter:uppercase block">
              {errorMessage}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {items.map((item, i) => (
        <RadioButton
          checked={defaultValue && item.value == defaultValue}
          isShowError={false}
          name={name}
          value={item.value}
          label={item.label}
          key={i}
          id={`${item.value}-${name}-id`}
          radioContainer={radioContainer}
          onChange={(value: any) => {
            setSelected(value.target.value);
            onChange && onChange(value.target.value);
          }}
        />
      ))}
    </>

    // <div className={`flex ${radioWrapper}`}>
    //   {label && label}
    //   <div className="flex flex-col gap-2">
    //     <div className={`${className}`}>
    //       {items.map((item, i) => (
    //         <RadioButton
    //           checked={selected && item.value == selected}
    //           isShowError={false}
    //           name={name}
    //           value={item.value}
    //           label={item.label}
    //           key={i}
    //           id={`${item.value}-${name}-id`}
    //           radioContainer={radioContainer}
    //           onChange={(value: any) => {
    //             setSelected(value.target.value);
    //             onChange && onChange(value.target.value);
    //           }}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};
