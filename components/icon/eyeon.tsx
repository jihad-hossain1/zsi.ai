import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EyeOn = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="800"
    height="800"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="m0 8 3.08-3.695a6.405 6.405 0 0 1 9.84 0L16 8l-3.08 3.695a6.405 6.405 0 0 1-9.84 0zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default EyeOn;
