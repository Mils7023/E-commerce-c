import { FC, SVGProps } from "react";

export interface RatingStarProps extends SVGProps<SVGSVGElement> {}

export const RatingStar: FC<RatingStarProps> = ({ ...props }) => {
  const { height, width, stroke, strokeWidth, fill = "none" } = props;
  return (
    <svg
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.48554 0L11.5226 6.26958H18.1149L12.7817 10.1444L14.8188 16.414L9.48554 12.5392L4.15231 16.414L6.18942 10.1444L0.856194 6.26958H7.44843L9.48554 0Z"
        fill="#FFA83A"
      />
    </svg>
  );
};
