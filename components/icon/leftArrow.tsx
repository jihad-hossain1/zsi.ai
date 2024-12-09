import * as React from "react";

const LeftArrow: React.FC<React.SVGProps<SVGElement | any>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="800"
    height="800"
    viewBox="0 -6.5 36 36"
    {...props}
  >
    <g id="icons" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
      <g
        id="ui-gambling-website-lined-icnos-casinoshunter"
        fill="gray"
        fillRule="nonzero"
        transform="translate(-342 -159)"
      >
        <g id="square-filled" transform="translate(50 120)">
          <path
            id="left-arrow"
            d="m317.108 39.29 10.542 10.452.059.054c.18.179.277.408.291.642v.124a.98.98 0 0 1-.291.642l-.052.044-10.549 10.462a1.005 1.005 0 0 1-1.413 0 .985.985 0 0 1 0-1.402l9.008-8.934h-31.704c-.552 0-.999-.443-.999-.99a.995.995 0 0 1 1-.992h31.468l-8.773-8.7a.985.985 0 0 1 0-1.402 1.005 1.005 0 0 1 1.413 0m10.007 11.093-10.714 10.626L327.002 50.5v-.004l-.059-.053-.06-.06z"
            transform="matrix(-1 0 0 1 620 0)"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);

export default LeftArrow;
