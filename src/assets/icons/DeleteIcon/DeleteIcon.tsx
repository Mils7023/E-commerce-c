import { FC, SVGProps } from "react";

export interface DeleteIconProps extends SVGProps<SVGSVGElement> {}

export const DeleteIcon: FC<DeleteIconProps> = (props) => {
  const { height, width, stroke, strokeWidth, fill } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 21"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 17C15 17.7956 14.6839 18.5587 14.1213 19.1213C13.5587 19.6839 12.7956 20 12 20H5C4.20435 20 3.44129 19.6839 2.87868 19.1213C2.31607 18.5587 2 17.7956 2 17V5H1V2H5.5L6.5 1H10.5L11.5 2H16V5H15V17ZM3 5V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H12C12.5304 19 13.0391 18.7893 13.4142 18.4142C13.7893 18.0391 14 17.5304 14 17V5H3ZM15 4V3H11L10 2H7L6 3H2V4H15ZM5 7H6V17H5V7ZM11 7H12V17H11V7Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
