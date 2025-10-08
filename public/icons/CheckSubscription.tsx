import * as React from "react";
import { SVGProps } from "react";
const CheckSubscription = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#FEFFFB"
      d="M21.5 12a.75.75 0 0 1-.75.75H12.5a.75.75 0 0 1 0-1.5h8.25a.75.75 0 0 1 .75.75Zm-9-5.25h8.25a.75.75 0 0 0 0-1.5H12.5a.75.75 0 0 0 0 1.5Zm8.25 10.5H12.5a.75.75 0 0 0 0 1.5h8.25a.75.75 0 1 0 0-1.5ZM8.22 3.97 5.75 6.44l-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06Zm0 6-2.47 2.47-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06Zm0 6-2.47 2.47-.97-.97a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06Z"
    />
  </svg>
);
export default CheckSubscription;
