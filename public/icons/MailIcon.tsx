import * as React from "react";
import { SVGProps } from "react";
const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.5 4.5h-18a.75.75 0 0 0-.75.75V18a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V5.25a.75.75 0 0 0-.75-.75ZM19.572 6 12.5 12.483 5.428 6h14.144Zm1.178 12H4.25V6.955l7.743 7.098a.75.75 0 0 0 1.014 0l7.743-7.098V18Z"
    />
  </svg>
);
export default MailIcon;
