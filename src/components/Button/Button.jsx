import React from "react";
import classNames from "classnames";
import "./styles.scss";

const CustomButton = ({ children, className, onClick, disable }) => (
  <button
    className={classNames("btn", className)}
    onClick={onClick}
    disabled={disable}
  >
    {children}
  </button>
);

export default CustomButton;
