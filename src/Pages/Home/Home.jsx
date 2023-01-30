import React from "react";
import Banner from "./Banner";
import CategorySection from "./CategorySection";

const Home = () => {
  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <Banner />
      <CategorySection />
    </div>
  );
};

export default Home;
