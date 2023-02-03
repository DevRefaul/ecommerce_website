import React from "react";
import lineBreak from "../../Assets/lineBreak.png";

const About = () => {
  return (
    <div className="px-6 py-4 md:px-10 lg:px-20 xl:px-40">
      <h1 className="text-2xl font-bold mb-2 text-center mt-10">
        About MyShop
      </h1>
      <div className="flex justify-center items-center pb-4 mb-10">
        <img src={lineBreak} alt="" className="h-10" />
      </div>
      <p className="my-4 text-gray-700 leading-loose text-lg font-medium text-center md:text-left">
        MyShop is a leading e-commerce platform that provides customers with a
        seamless and convenient shopping experience. We offer a wide range of
        products across various categories, ensuring that our customers have
        access to everything they need in one place.
      </p>

      <div className="flex justify-center items-center py-4">
        <img src={lineBreak} alt="" className="h-20" />
      </div>
      <p className="my-4 text-gray-700 leading-loose text-lg font-medium text-center md:text-left">
        Our team is dedicated to providing the best customer service possible,
        and we are always striving to improve our platform to meet the
        ever-evolving needs of our customers. We believe that shopping should be
        an enjoyable experience, and we work hard to make it so for everyone who
        visits MyShop.
      </p>
      <div className="flex justify-center items-center py-4">
        <img src={lineBreak} alt="" className="h-20" />
      </div>
      <p className="my-4 text-gray-700 leading-loose text-lg font-medium text-center md:text-left">
        We are committed to providing our customers with the best possible value
        for their money, which is why we offer competitive prices, fast and
        reliable shipping, and a no-questions-asked returns policy. Whether
        you're shopping for yourself or for someone else, you can rest assured
        that MyShop is the best choice for all your shopping needs.
      </p>
      <div className="flex justify-center items-center py-4">
        <img src={lineBreak} alt="" className="h-20" />
      </div>
      <p className="my-4 text-gray-700 leading-loose text-lg font-medium text-center md:text-left">
        So what are you waiting for? Start shopping with MyShop today and
        discover the ease and convenience of online shopping!
      </p>
    </div>
  );
};

export default About;
