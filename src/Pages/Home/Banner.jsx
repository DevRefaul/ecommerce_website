import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./Banner.css";
import sofa from "../../Assets/sofa.jpg";
import plant from "../../Assets/plant.jpg";
import electronics from "../../Assets/electronics.jpg";

const Banner = () => {
  const bannerImges = [sofa, plant, electronics];
  return (
    <>
      <section className="my-8 grid grid-cols-1 gap-8 xl:grid-cols-[3fr,1fr]">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper p-8 rounded-xl"
        >
          {bannerImges.map((image, i) => {
            return (
              <SwiperSlide key={i} className="h-10">
                <img
                  src={image}
                  alt=""
                  className="h-[80vh] w-full object-cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* second section */}
        <div className=" border border-red-400 rounded-xl">
          <h2>Hellow World</h2>
        </div>
      </section>
    </>
  );
};

export default Banner;
