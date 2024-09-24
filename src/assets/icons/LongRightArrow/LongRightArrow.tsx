import { FC, SVGProps } from "react";

export interface LongRightArrowProps extends SVGProps<SVGSVGElement> {}

export const LongRightArrow: FC<LongRightArrowProps> = ({ ...props }) => {
  const { height, width, stroke, strokeWidth, fill = "none" } = props;
  return (
    <svg
      width="17"
      height="12"
      viewBox="0 0 17 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4336 6.51471C16.7265 6.22181 16.7265 5.74694 16.4336 5.45404L11.6606 0.681074C11.3677 0.388181 10.8928 0.388181 10.6 0.681074C10.3071 0.973968 10.3071 1.44884 10.6 1.74173L14.8426 5.98438L10.6 10.227C10.3071 10.5199 10.3071 10.9948 10.6 11.2877C10.8928 11.5806 11.3677 11.5806 11.6606 11.2877L16.4336 6.51471ZM0 6.73438H15.9033V5.23438H0V6.73438Z"
        fill="#FF6CAA"
      />
    </svg>
  );
};
