import * as React from "react";

const LineSvg: React.FC<React.SVGProps<SVGElement | any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="800"
    height="800"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M3 17a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
    ></path>
  </svg>
);

export default LineSvg;
