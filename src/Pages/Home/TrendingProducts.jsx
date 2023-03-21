import React, { useEffect, useState } from "react";
import LoadingScene from "../../Components/LoadingScene/LoadingScene";
import SingleCardForAllProducts from "../../Components/SingleCardComponents/SingleCardForAllProducts";
import { api } from "../../Utils/Api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const TrendingProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch(`${api}/trendingProducts`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.trendingProducts);
        setloading(false);
      })
      .catch((err) => console.error(err.message));
  }, []);

  if (loading) {
    return <LoadingScene />;
  }

  return (
    <section className="my-6">
      <h2 className="text-3xl font-bold text-center my-8">
        Our Trending Products
      </h2>

      <div>
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
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data
            ? data.map((product, i) => {
                return (
                  <SwiperSlide key={i} className="h-[530px]">
                    <SingleCardForAllProducts product={product} />
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </div>
    </section>
  );
};

export default TrendingProducts;
