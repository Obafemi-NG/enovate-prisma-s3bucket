import * as React from "react";
import { SVGProps } from "react";
const Calendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#5A5A5A"
      d="M20 3h-2.25v-.75a.75.75 0 1 0-1.5 0V3h-7.5v-.75a.75.75 0 0 0-1.5 0V3H5a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 20 3ZM7.25 4.5v.75a.75.75 0 0 0 1.5 0V4.5h7.5v.75a.75.75 0 1 0 1.5 0V4.5H20v3H5v-3h2.25ZM20 19.5H5V9h15v10.5Zm-4.5-5.25a.75.75 0 0 1-.75.75h-1.5v1.5a.75.75 0 1 1-1.5 0V15h-1.5a.75.75 0 1 1 0-1.5h1.5V12a.75.75 0 1 1 1.5 0v1.5h1.5a.75.75 0 0 1 .75.75Z"
    />
  </svg>
);
export default Calendar;
