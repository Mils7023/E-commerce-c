"use client";
import { FC, SVGProps } from "react";

export interface CartIconProps extends SVGProps<SVGSVGElement> {}

export const CartIcon: FC<CartIconProps> = ({ ...props }) => {
  const { height, width, stroke, strokeWidth } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 15.34V13.4C15 8.90002 18.62 4.48002 23.12 4.06002C28.48 3.54002 33 7.76002 33 13.02V15.78"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 44H30C38.04 44 39.48 40.78 39.9 36.86L41.4 24.86C41.94 19.98 40.54 16 32 16H16C7.46002 16 6.06002 19.98 6.60002 24.86L8.10002 36.86C8.52002 40.78 9.96002 44 18 44Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.991 24H31.0089"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.989 24H17.007"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
