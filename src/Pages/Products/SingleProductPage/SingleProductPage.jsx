import React from "react";
import { useLocation } from "react-router-dom";

const SingleProductPage = () => {
  const location = useLocation();
  console.log(location.state.productName);

  return (
    <>
      <h2>This is products page for {location.state.productName}</h2>
    </>
  );
};

export default SingleProductPage;
