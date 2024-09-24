"use client";
import { FC, SVGProps } from "react";

export interface ReviewStarProps extends SVGProps<SVGSVGElement> {}

export const ReviewStar: FC<ReviewStarProps> = ({ ...props }) => {
  const { fill, width = 34, height = 32, strokeWidth, stroke } = props;
  return (
    <>
      {fill ? (
        <svg
          width={width}
          height={height}
          viewBox="0 0 19 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
            fill={fill}
          />
        </svg>
      ) : (
        <svg
          width={width}
          height={height}
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.92694 1.22343L10.6045 6.38641L10.6894 6.64764H10.9641H16.3927L12.0008 9.83854L11.7786 9.99999L11.8635 10.2612L13.5411 15.4242L9.14916 12.2333L8.92694 12.0719L8.70473 12.2333L4.31283 15.4242L5.99038 10.2612L6.07526 9.99999L5.85304 9.83854L1.46115 6.64764H6.88983H7.16451L7.24939 6.38641L8.92694 1.22343Z"
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </svg>
      )}
    </>
  );
};
