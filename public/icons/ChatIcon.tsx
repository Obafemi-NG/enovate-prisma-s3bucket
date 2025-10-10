import * as React from "react";
import { SVGProps } from "react";
const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={64}
    fill="none"
    {...props}
  >
    <path
      fill="#54EA87"
      d="M10.667.55h46.666a10 10 0 0 1 10 10v26.667a10 10 0 0 1-10 10H34.14L12.66 63.243a3.333 3.333 0 0 1-5.327-2.676V47.214a6.666 6.666 0 0 1-6.666-6.667v-30a10 10 0 0 1 10-10V.55Z"
    />
  </svg>
);
export default ChatIcon;
