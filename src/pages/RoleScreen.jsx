import { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { CustomButton, Card } from "../components";
import { Borrower, Checkmark, Close, Guide, Lender } from "../components/Icon";
import axios from "axios";

import { isNil } from "lodash";

import "./styles.scss";

const RoleScreen = ({ children, className }) => {
  const { roles, isBorrower, setIsBorrower } = useContext(GlobalContext);
  const [isCardOpen, setIsCardOpen] = useState(true);
  const [termsIsOpen, setTermsIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isCardBottom, setCardBottom] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource"
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleScroll = (e) => {
    const bottom =
      Math.ceil(e.target.scrollHeight) - Math.ceil(e.target.scrollTop) ===
      Math.ceil(e.target.clientHeight);
    setCardBottom(bottom);
  };

  console.log(loading, data);
  const cardBody = () => {
    return isNil(isBorrower) ? (
      <p>Please, choose your role in service.</p>
    ) : isBorrower ? (
      <p>
        You have choosen the role -{" "}
        <span className="userRole">{roles.borrower}</span>
      </p>
    ) : (
      <p>
        You have choosen the role -{" "}
        <span className="userRole">{roles.lender}</span>
      </p>
    );
  };

  return (
    <section>
      {isCardOpen && !termsIsOpen && (
        <Card
          withIcon={isNil(isBorrower) ? false : true}
          title={
            isNil(isBorrower)
              ? "Choose your role"
              : isBorrower
              ? roles.borrower
              : roles.lender
          }
          body={cardBody()}
        >
          {isNil(isBorrower) ? (
            <>
              {" "}
              <CustomButton
                className="primary"
                onClick={() => setIsBorrower(true)}
              >
                <Borrower className="btnIcon" />
                <p>{roles.borrower}</p>
              </CustomButton>
              <CustomButton
                className="primary"
                onClick={() => setIsBorrower(false)}
              >
                <Lender className="btnIcon" />
                <p>{roles.lender}</p>
              </CustomButton>
            </>
          ) : (
            <>
              <CustomButton
                className="primary"
                onClick={() => {
                  setCardBottom(false);
                  setTermsIsOpen(true);
                }}
              >
                {isBorrower ? (
                  <Borrower className="btnIcon" />
                ) : (
                  <Lender className="btnIcon" />
                )}
                <p>Go To Cabinet</p>
              </CustomButton>
              <CustomButton
                className="cancelBtn"
                onClick={() => setIsCardOpen(false)}
              >
                <Close className="btnIcon" />
                <p>Cancel</p>
              </CustomButton>
            </>
          )}
        </Card>
      )}
      {!isNil(isBorrower) && !termsIsOpen && (
        <Card
          className="primaryCard"
          body="Study the guide flow for the convenience of using the service."
        >
          <CustomButton
            className="primaryCardBtn"
            onClick={() => {
              setCardBottom(false);
              setTermsIsOpen(true);
            }}
          >
            <Guide className="btnIcon" />
            <p>Guide Flow</p>
          </CustomButton>
        </Card>
      )}
      {termsIsOpen && (
        <Card
          className="termsCard"
          title="Terms & Conditions"
          body="You should obliged to apply  the Terms & Conditions to use the service."
        >
          <div
            className="termsBlock"
            onScroll={handleScroll}
            dangerouslySetInnerHTML={{ __html: data[0].text }}
          ></div>
          <CustomButton
            className={!isCardBottom ? "disabled" : "primary"}
            disable={!isCardBottom}
            onClick={() => setTermsIsOpen(false)}
          >
            <Checkmark
              className={!isCardBottom ? "disabledIcon" : "btnIcon"}
              fill={!isCardBottom ? "#fff" : "#343A40"}
            />
            <p>I Agree</p>
          </CustomButton>
        </Card>
      )}
    </section>
  );
};

export default RoleScreen;
