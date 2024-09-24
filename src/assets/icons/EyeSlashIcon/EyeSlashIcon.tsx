import { FC, SVGProps } from "react";

export interface EyeSlashIconProps extends SVGProps<SVGSVGElement> {}

export const EyeSlashIcon: FC<EyeSlashIconProps> = ({ ...props }) => {
  const {
    height = 23,
    width = 23,
    stroke = "#CFCFCF",
    strokeWidth = 1.71,
    fill = "none",
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.98204 5.97478C7.56262 4.94768 9.3941 4.18457 11.3489 4.18457C15.791 4.18457 19.5962 8.12517 21.268 10.1492C21.532 10.4783 21.6781 10.9059 21.6781 11.3493C21.6781 11.7927 21.532 12.2203 21.268 12.5494C20.3464 13.6651 18.7766 15.3631 16.8093 16.6625M13.7371 18.1472C12.9691 18.3795 12.1699 18.514 11.3489 18.514C6.9068 18.514 3.10158 14.5734 1.42983 12.5494C1.16579 12.2203 1.01963 11.7927 1.01963 11.3493C1.01963 10.9059 1.16579 10.4783 1.42983 10.1492C1.95949 9.50793 2.70331 8.67427 3.61369 7.83451"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6006 13.6009C14.8441 12.3574 14.8441 10.3412 13.6006 9.09768C12.357 7.85416 10.3408 7.85416 9.09731 9.09768"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.6979 21.6979L1 1"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
