import * as React from "react";
import { SVGProps } from "react";
const Suitcase = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#5A5A5A"
      d="M20.75 5.861H17v-.75a2.25 2.25 0 0 0-2.25-2.25h-4.5A2.25 2.25 0 0 0 8 5.111v.75H4.25a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5v-12a1.5 1.5 0 0 0-1.5-1.5ZM9.5 5.111a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v.75h-6v-.75Zm11.25 2.25v3.901a17.257 17.257 0 0 1-16.5.001V7.361h16.5Zm0 12H4.25v-6.409a18.768 18.768 0 0 0 16.5 0v6.41Zm-10.5-8.25a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z"
    />
  </svg>
);
export default Suitcase;
