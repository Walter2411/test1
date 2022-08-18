import React from "react";
import classNames from "classnames";
import { CustomButton, Nav } from "../../components";
import { SignUp, Lock } from "../../components/Icon";
import { ReactComponent as Logo } from "../Icon/logo-generic.svg";
import "./styles.scss";

const Header = ({ children, className, title, body }) => (
  <header>
    <div className={classNames("header", className)}>
      <a href="#" className="logo">
        <Logo width={"56%"} />
      </a>
      <div className="navbar">
        <Nav />
        <div className="actionButtons">
          <CustomButton className="secondary">
            <Lock className="btnIcon" />
            <p className="btnLabel">Sign In</p>
          </CustomButton>
          <CustomButton className="primary">
            <SignUp className="btnIcon" />
            <p className="btnLabel">Sign Up</p>
          </CustomButton>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
