import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../Components/Shared/Footer/Footer";
import Header from "../../../Components/Shared/Navbar/Header";

const ProductRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProductRoot;
