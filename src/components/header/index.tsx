import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../wrapper";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Wrapper>
        <div className="inner">
          <Link to="/">
            <div className="logo" />
          </Link>
        </div>
      </Wrapper>
    </header>
  );
}

export default Header;
