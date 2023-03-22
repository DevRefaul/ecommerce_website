import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandsPartner = () => {
  const brandLogos = [
    "https://img.icons8.com/fluency/48/null/google-logo.png",
    "https://img.icons8.com/sf-black/48/null/mac-os.png",
    "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/null/external-lg-electronics-a-south-korean-multinational-electronics-company-industry-shadow-tal-revivo.png",
    "https://img.icons8.com/color/48/null/samsung.png",
    "https://img.icons8.com/color/48/null/dell--v1.png",
    "https://img.icons8.com/ios/48/null/gucci.png",
    "https://img.icons8.com/bubbles/48/null/adidas.png",
    "https://img.icons8.com/bubbles/48/null/nike.png",
    "https://img.icons8.com/external-tal-revivo-regular-tal-revivo/48/null/external-zara-a-spanish-fast-fashion-and-the-worlds-largest-apparel-retailer-fashion-regular-tal-revivo.png",
    "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-louis-vuitton-a-french-fashion-house-and-luxury-retail-company-fashion-color-tal-revivo.png",
    "https://img.icons8.com/doodle/48/null/hm.png",
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold text-center">Our Brand Partners</h2>

      <div className="my-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // when window width is >= 375px
            375: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            // when window width is >= 560px
            560: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            // when window width is >= 1300px
            1300: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {brandLogos
            ? brandLogos.map((img, i) => {
                return (
                  <SwiperSlide key={i} className="h-[530px]">
                    <img src={img} alt="" className="lg:h-[60px]" />
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandsPartner;
