import * as React from "react";
import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FEFFFB"
      d="m15.89 6.96-1.054 1.08 3.21 3.21H3v1.5h15.047l-3.211 3.21 1.055 1.08L20.93 12l-5.04-5.04Z"
    />
  </svg>
);
export default ArrowRight;
