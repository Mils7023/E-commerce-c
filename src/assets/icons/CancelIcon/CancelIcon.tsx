import { FC, SVGProps } from "react";

export interface CancelIconProps extends SVGProps<SVGSVGElement> {}

export const CancelIcon: FC<CancelIconProps> = (props) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.6663 14.6667L1.33301 1.33337M14.6663 1.33337L1.33301 14.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
