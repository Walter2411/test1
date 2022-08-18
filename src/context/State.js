import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const State = (props) => {
  const [isBorrower, setIsBorrower] = useState();

  return (
    <GlobalContext.Provider
      value={{
        isBorrower,
        setIsBorrower,
        roles: {
          borrower: "The Borrower",
          lender: "The Lender",
        },
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default State;
