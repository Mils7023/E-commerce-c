import { FC, SVGProps } from "react";

export interface SearchIconProps extends SVGProps<SVGSVGElement> {}

export const SearchIcon: FC<SearchIconProps> = ({ ...props }) => {
  const { height, width, stroke, strokeWidth, fill = "none" } = props;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 16.5L15 15"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
