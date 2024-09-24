import { FC } from "react";
import styles from "./CategoryRadio.module.scss";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageHelper";

export interface CategoryRadioProps extends React.HTMLProps<HTMLInputElement> {
  checkout?: boolean;
}

export const CategoryRadio: FC<CategoryRadioProps> = ({
  title,
  className,
  color,
  checkout,
  ...rest
}) => {
  if (checkout) {
    return (
      <label
        className={`${styles.formControl} ${styles.checkoutFormControl} ${className} `}
      >
        <input type="radio" className={`${styles.radio} `} {...rest} />
        <span className={`${styles.title} `}>{title}</span>
        <div className={styles.sideLable}>
          {title == "Standard shipping" && (
            <span className="font-16 primary_dark_text font_smb">FREE</span>
          )}
          {title == "Priority shipping" && (
            <span className="font-16 black_text font_md d-flex align-items-center gap-1">
              <svg
                width="12"
                height="14"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.268066 15L1.36799 14.633C1.91896 14.4487 2.39814 14.0953 2.73765 13.6227C3.07717 13.1501 3.2598 12.5824 3.25969 12V4.942C3.25969 3.89652 3.67384 2.89385 4.41105 2.15459C5.14825 1.41532 6.14811 1 7.19067 1H8.05326C9.67571 1 11.1336 1.99 11.7359 3.5M2.76108 13.5H3.84205C4.77079 13.4999 5.6868 13.7166 6.51756 14.133L6.56742 14.158C7.39815 14.5745 8.31416 14.7913 9.24292 14.7913C10.1717 14.7913 11.0877 14.5745 11.9184 14.158L13.2318 13.5M0.76667 8H8.74432"
                  stroke="#000"
                  strokeWidth={1.8}
                />
              </svg>
              20
            </span>
          )}
          {title == "Credit/Debit Card" && (
            <Image
              src={getImageUrl('payment-options.png')}
              alt="credit option"
              title="Cannellio Cake Toppers - credit option"
              width={100}
              height={100}
            />
          )}
          {title == "PayPal Express Checkout" && (
            <Image
              src={getImageUrl('pay-pal.png')}
              alt="Paypal option"
              title="Cannellio Cake Toppers - Paypal option"
              width={100}
              height={100}
            />
          )}
          {title == "Google Pay" && (
            <Image
              src={getImageUrl('gpay.png')}
              alt="Gpay option"
              title="Cannellio Cake Toppers - Gpay option"
              width={100}
              height={100}
            />
          )}
          {title == "Amazonpay" && (
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
  } else {
    return (
      <label
        className={`${styles.formControl} ${className} ${
          color == "primary" && `${styles.primaryTheme_formcontrol}`
        }`}
      >
        <input
          type="radio"
          className={`${styles.radio} `}
          {...rest}
          style={{ backgroundColor: color }}
        />
        <span className={styles.title}>{title}</span>
      </label>
    );
  }
};
