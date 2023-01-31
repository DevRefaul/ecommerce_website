import React from "react";
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import ElectronicsSection from "./ElectronicsSection";
import FashionSection from "./FashionSection";

const Home = () => {
  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <Banner />
      <CategorySection />
      <FashionSection />
      <ElectronicsSection />
    </div>
  );
};

export default Home;
