import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import LoadingScene from "../../../Components/LoadingScene/LoadingScene";
import { api } from "../../../Utils/Api";

const SingleProductPage = () => {
  const location = useLocation();
  const productName = location.state.productName;
  const functionForFetchingData = () => {
    return fetch(`${api}/getSingleProductInfo?name=${productName}`)
      .then((res) => res.json())
      .then((data) => data);
  };
  const functionForFetchingRelatedData = () => {
    return fetch(`${api}/getRelatedProductData?name=${productName}`)
      .then((res) => res.json())
      .then((data) => data);
  };
  const { isLoading, data, isError } = useQuery(
    [productName],
    functionForFetchingData
  );

  const {
    isLoading: relatedDataLodaing,
    data: relatedData,
    isError: relatedDataError,
  } = useQuery(["relatedData"], functionForFetchingRelatedData);

  if (isLoading) {
    return <LoadingScene />;
  }

  const productInfo = data.product;

  return (
    <section className="w-[95%] lg:w-[80%] mx-auto min-h-screen">
      <div className="my-6 grid gap-4 lg:grid-cols-2 ">
        <div>
          <img
            src={productInfo.image}
            alt={productInfo.name + "s image"}
            className="lg:w-[700px]"
          />{" "}
        </div>
        <div>
          <h2 className="text-center my-4 text-2xl font-semibold">
            {productInfo.name}
          </h2>
          <h4 className="text-lg font-semibold my-3">
            {productInfo.brand ? <> Brand : {productInfo.brand}</> : ""}
          </h4>
          <h4 className="text-lg font-semibold my-3">
            {productInfo.type ? <>Type : {productInfo.type}</> : ""}
          </h4>
          <p className="my-3 text-lg">About : {productInfo.description}</p>
          <h2 className="text-xl font-bold text-red-600 mb-8">
            Price : {productInfo.price} $
          </h2>

          <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">
            Add To Cart
          </button>
          <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
