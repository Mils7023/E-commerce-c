import { FC, SVGProps } from "react";

export interface HeartIconProps extends SVGProps<SVGSVGElement> {}

export const HeartIcon: FC<HeartIconProps> = ({ ...props }) => {
  const { height, width, stroke, strokeWidth, fill = "none" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.24 41.6202C24.56 41.8602 23.44 41.8602 22.76 41.6202C16.96 39.6402 4 31.3802 4 17.3802C4 11.2002 8.98 6.2002 15.12 6.2002C18.76 6.2002 21.98 7.9602 24 10.6802C26.02 7.9602 29.26 6.2002 32.88 6.2002C39.02 6.2002 44 11.2002 44 17.3802C44 31.3802 31.04 39.6402 25.24 41.6202Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
