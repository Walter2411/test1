import React from "react";

const Checkmark = ({ className, fill }) => (
  <svg
    className={className}
    width="13"
    height="10"
    viewBox="0 0 13 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5303 0.969667C12.8232 1.26256 12.8232 1.73744 12.5303 2.03033L5.5303 9.0303C5.2374 9.3232 4.7626 9.3232 4.46967 9.0303L0.469667 5.0303C0.176777 4.7374 0.176777 4.2626 0.469667 3.9697C0.762558 3.6768 1.23744 3.6768 1.53033 3.9697L5 7.4393L11.4697 0.969667C11.7626 0.676777 12.2374 0.676777 12.5303 0.969667Z"
      fill={fill}
    />
  </svg>
);

export default Checkmark;
