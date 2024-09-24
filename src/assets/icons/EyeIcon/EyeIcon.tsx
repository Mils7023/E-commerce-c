import { FC, SVGProps } from "react";

export interface EyeIconProps extends SVGProps<SVGSVGElement> {}

export const EyeIcon: FC<EyeIconProps> = ({ ...props }) => {
  const {
    height = 18,
    width = 24,
    stroke = "#CFCFCF",
    strokeWidth = 1.71,
    fill = "none",
  } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 18"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.9191 7.79961C22.183 8.12873 22.3292 8.55634 22.3292 8.9997C22.3292 9.44306 22.183 9.87067 21.9191 10.1998C20.2473 12.2238 16.442 16.1644 12 16.1644C7.55789 16.1644 3.75267 12.2238 2.08091 10.1998C1.81687 9.87067 1.67072 9.44306 1.67072 8.9997C1.67072 8.55634 1.81687 8.12873 2.08091 7.79961C3.75267 5.77556 7.55789 1.83496 12 1.83496C16.442 1.83496 20.2473 5.77556 21.9191 7.79961Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12.184C13.7587 12.184 15.1843 10.7583 15.1843 8.99972C15.1843 7.24108 13.7587 5.81543 12 5.81543C10.2414 5.81543 8.81573 7.24108 8.81573 8.99972C8.81573 10.7583 10.2414 12.184 12 12.184Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
