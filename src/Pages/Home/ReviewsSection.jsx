import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ReviewsSection = () => {
  const reviews = [
    {
      user_Name: "Rahim",
      image: "https://i.ibb.co/1QyJP9T/istockphoto-1270067126-612x612.jpg",
      rating: 4,
      comment:
        "I had a great experience shopping on this website. The selection was good and the prices were reasonable. Shipping was fast and the product arrived in good condition.",
    },
    {
      user_Name: "Karim",
      image: "https://i.ibb.co/kMbwCRr/istockphoto-1200677760-612x612.jpg",
      rating: 3,
      comment:
        "I was disappointed with my experience on this website. The checkout process was confusing and the shipping costs were higher than I expected. The product itself was fine, but I'm not sure I would shop here again.",
    },
    {
      user_Name: "Fiaza",
      image: "https://i.ibb.co/f107hRj/maria-karpathakis-Mobile.jpg",
      rating: 5,
      comment:
        "This is hands down the best e-commerce website I've ever used. The product selection is amazing, the prices are unbeatable, and the customer service is top-notch. I've recommended this website to all my friends and family!",
    },
    {
      user_Name: "Maria",
      image: "https://i.ibb.co/cX7ZDqy/celine-sol-Meta.jpg",
      rating: 4.5,
      comment:
        "This is hands down the best e-commerce website I've ever used. The product selection is amazing, the prices are unbeatable, and the customer service is top-notch. I've recommended this website to all my friends and family!",
    },
  ];

  return (
    <section className="my-24">
      <h2 className="text-center text-2xl font-semibold">Customer Reviews</h2>

      <div className="my-6">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            560: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {reviews.length
            ? reviews.map((review, i) => {
                return (
                  <SwiperSlide key={i} className="">
                    <div className="bg-green-100 p-6 h-[400px] md:h-[430px] lg:h-[350px] xl:h-[280px] flex flex-col justify-between rounded-md">
                      <p className="text-lg font-medium  text-start">
                        "{review.comment}"
                      </p>
                      <p className="my-4  flex justify-center items-center">
                        By -{" "}
                        <span className="font-bold ml-6">
                          {" "}
                          <img
                            src={review.image}
                            alt=""
                            className="h-14 w-14 rounded-full"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                          />{" "}
                          {review.user_Name}
                        </span>
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })
            : ""}
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsSection;
