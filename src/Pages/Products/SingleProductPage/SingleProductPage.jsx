import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoadingScene from "../../../Components/LoadingScene/LoadingScene";
import RelatedProducts from "../../../Components/RelatedProducts/RelatedProducts";
import { api } from "../../../Utils/Api";
import { addOrderToDB } from "../../../Utils/functionForOrders";
import { Context } from "../../../Utils/Contexts";

const SingleProductPage = () => {
  const location = useLocation();
  const productId = location.state.productId;
  const [product, setProduct] = useState();
  const { loadCartItems, setLoadCartItems } = useContext(Context);

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (mounted.current === true) {
      window.scrollTo(0, 0);
    }

    fetch(`${api}/getSingleProductInfo?id=${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.product));

    return () => (mounted.current = false);
  }, [productId]);

  const functionForFetchingData = async () => {
    return fetch(`${api}/getSingleProductInfo?id=${productId}`)
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  };

  const { isLoading, data, isError } = useQuery(
    [productId],
    functionForFetchingData
  );

  const productInfo = data?.product;

  if (isLoading) {
    return <LoadingScene />;
  }

  if (isError) {
    return toast.error(isError.message);
  }

  return (
    <section className="w-[95%] lg:w-[80%] mx-auto min-h-screen">
      <ToastContainer />
      <div className="my-6 grid gap-4 lg:grid-cols-2 ">
        <div>
          <img
            src={productInfo.image}
            alt={productInfo.name + "s image"}
            className="lg:w-[700px]"
          />{" "}
        </div>
        <div>
          <h2 className="text-center my-4 text-2xl font-semibold  capitalize">
            {productInfo.name}
          </h2>
          <h4 className="text-lg font-semibold my-3 capitalize">
            {productInfo.brand ? <> Brand : {productInfo.brand}</> : ""}
          </h4>
          <h4 className="text-lg font-semibold my-3 capitalize">
            {productInfo.type ? <>Type : {productInfo.type}</> : ""}
          </h4>
          <p className="my-3 text-lg">About : {productInfo.description}</p>
          <p className="my-3 text-lg">
            Ratings :{" "}
            <span className="text-[#ffd700] font-semibold">
              {productInfo.rating}
            </span>
          </p>
          <h2 className="text-xl font-bold text-red-600 mb-8">
            Price : {productInfo.price} $
          </h2>

          <button
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2"
            onClick={() =>
              addOrderToDB(product, loadCartItems, setLoadCartItems)
            }
          >
            Add To Cart
          </button>
          <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">
            Buy Now
          </button>

          {/* reviews section */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold underline">Reviews :</h4>
            <div>
              {productInfo?.reviews.length ? (
                <></>
              ) : (
                <>
                  <p className="my-3 text-lg">No Reviews Found</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <>
        <RelatedProducts
          category={productInfo?.category}
          id={productInfo?._id}
        />
      </>
    </section>
  );
};

export default SingleProductPage;
