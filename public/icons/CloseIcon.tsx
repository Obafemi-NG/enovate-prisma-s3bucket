import * as React from "react";
import { SVGProps } from "react";
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <rect width={32} height={32} fill="#313131" rx={16} />
    <path
      fill="#FEFFFB"
      d="M9.125 8 8 9.125 14.875 16 8 22.875 9.125 24 16 17.125 22.875 24 24 22.875 17.125 16 24 9.125 22.875 8 16 14.875 9.125 8Z"
    />
  </svg>
);
export default CloseIcon;
