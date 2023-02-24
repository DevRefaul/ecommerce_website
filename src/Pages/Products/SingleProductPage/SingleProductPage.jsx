import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import { api } from "../../../Utils/Api";

const SingleProductPage = () => {
  const location = useLocation();
  const productName = location.state.productName;
  const functionForFetchingData = () => {
    return fetch(`${api}/getSingleProductInfo?name=${productName}`)
      .then((res) => res.json())
      .then((data) => data);
  };
  const { isLoading, data, isError } = useQuery(
    [productName],
    functionForFetchingData
  );

  console.log(isLoading);
  return (
    <>
      <h2>This is products page for {location.state.productName}</h2>
    </>
  );
};

export default SingleProductPage;
