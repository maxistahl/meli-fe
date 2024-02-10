import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Wrapper from "../components/wrapper";

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
}

export default Layout;
