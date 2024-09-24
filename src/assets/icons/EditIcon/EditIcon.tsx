import { FC, SVGProps } from "react";

export interface EditIconProps extends SVGProps<SVGSVGElement> {}

export const EditIcon: FC<EditIconProps> = (props) => {
  const { height, width, stroke = "#F8F8F8", strokeWidth, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.475 3.88753L15.592 5.89868M14.836 2.11578L9.109 7.55643C8.81309 7.83716 8.61128 8.19482 8.529 8.58433L8 11.0999L10.648 10.5964C11.058 10.5185 11.434 10.3276 11.73 10.0464L17.457 4.60573C17.6291 4.44224 17.7656 4.24815 17.8588 4.03453C17.9519 3.82092 17.9998 3.59197 17.9998 3.36076C17.9998 3.12954 17.9519 2.9006 17.8588 2.68698C17.7656 2.47337 17.6291 2.27928 17.457 2.11578C17.2849 1.95229 17.0806 1.8226 16.8557 1.73412C16.6309 1.64564 16.3899 1.6001 16.1465 1.6001C15.9031 1.6001 15.6621 1.64564 15.4373 1.73412C15.2124 1.8226 15.0081 1.95229 14.836 2.11578Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 13V15.85C16 16.3539 15.7893 16.8372 15.4142 17.1935C15.0391 17.5498 14.5304 17.75 14 17.75H3C2.46957 17.75 1.96086 17.5498 1.58579 17.1935C1.21071 16.8372 1 16.3539 1 15.85V5.4C1 4.89609 1.21071 4.41282 1.58579 4.0565C1.96086 3.70018 2.46957 3.5 3 3.5H6"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
