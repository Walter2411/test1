import React, { useContext } from "react";
import classNames from "classnames";
import "./styles.scss";
import { Borrower, Lender } from "../Icon";
import GlobalContext from "../../context/GlobalContext";

const Card = ({ children, className, title, body, withIcon }) => {
  const { isBorrower } = useContext(GlobalContext);
  return (
    <div className={classNames("card", className)}>
      <div className="cardWrapper">
        {title && (
          <div className="cardHeader">
            <h2>{title}</h2>
            {withIcon &&
              (isBorrower ? (
                <Borrower fill="rgb(120 116 116 / 8%)" width="27" height="28" />
              ) : (
                <Lender fill="rgb(120 116 116 / 8%)" width="27" height="28" />
              ))}{" "}
          </div>
        )}
        {body && <div className="cardBody">{body}</div>}
      </div>

      <div className="cardFooter">{children}</div>
    </div>
  );
};

export default Card;
