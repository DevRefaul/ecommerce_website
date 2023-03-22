import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingScene from "../../../Components/LoadingScene/LoadingScene";
import SingleCardForAllProducts from "../../../Components/SingleCardComponents/SingleCardForAllProducts";
import { api } from "../../../Utils/Api";

const SingleProductPage = () => {
  const location = useLocation();
  const productId = location.state.productId;
  const functionForFetchingData = async () => {
    return fetch(`${api}/getSingleProductInfo?id=${productId}`)
      .then((res) => res.json())
      .then((data) => data);
  };

  const { isLoading, data, isError } = useQuery(
    [productId],
    functionForFetchingData
  );

  const productInfo = data?.product;

  const {
    isLoading: relatedDataLodaing,
    data: relatedData,
    isError: relatedDataError,
  } = useQuery(["relatedData"], functionForFetchingRelatedData);

  if (isLoading || relatedDataLodaing) {
    return <LoadingScene />;
  }

  if (isError) {
    return toast.error(isError.message);
  }

  function functionForFetchingRelatedData() {
    if (productInfo) {
      return fetch(
        `${api}/getrelateddata?category=${productInfo?.category}&id=${productInfo?._id}`
      )
        .then((res) => res.json())
        .then((data) => data);
    }
  }

  const relatedProducts = relatedData?.products.filter(
    (p) => p._id != productInfo._id
  );
  console.log(relatedProducts);

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

          <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">
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

      <div>
        <h2 className="my-8 text-center text-xl font-semibold">
          Related Products
        </h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 769px
            769: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            1300: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {relatedProducts &&
            relatedProducts.map((product, i) => {
              return (
                <SwiperSlide key={i} className="h-[530px]">
                  <SingleCardForAllProducts product={product} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default SingleProductPage;
