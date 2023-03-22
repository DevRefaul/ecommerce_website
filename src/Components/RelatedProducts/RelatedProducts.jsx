import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../../Utils/Api";
import SingleCardForAllProducts from "../SingleCardComponents/SingleCardForAllProducts";

const RelatedProducts = ({ category, id }) => {
  const { isLoading, data, isError } = useQuery(
    ["relatedData"],
    functionForFetchingRelatedData
  );

  function functionForFetchingRelatedData() {
    return fetch(`${api}/getrelateddata?category=${category}&id=${id}`)
      .then((res) => res.json())
      .then((data) => data);
  }

  const relatedProducts = data?.products.filter((p) => p._id != data._id);

  return (
    <section className="my-12">
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
    </section>
  );
};

export default RelatedProducts;
