import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
