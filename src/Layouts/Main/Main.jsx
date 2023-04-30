import React from "react";
import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
