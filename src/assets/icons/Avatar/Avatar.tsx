"use client";
import { FC, SVGProps } from "react";

export interface AvatarProps extends SVGProps<SVGSVGElement> {}

export const Avatar: FC<AvatarProps> = ({ ...props }) => {
  const { strokeWidth, width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4C18.4772 4 14 8.47715 14 14C14 19.5228 18.4772 24 24 24Z"
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.1801 44C41.1801 36.26 33.4801 30 24.0001 30C14.5201 30 6.82007 36.26 6.82007 44"
        stroke="black"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
