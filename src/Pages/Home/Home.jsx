import React from "react";
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import ElectronicsSection from "./ElectronicsSection";
import FashionSection from "./FashionSection";
import FurnitureSection from "./FurnitureSection";
import NewsLetterSection from "./NewsLetterSection";
import PlantSection from "./PlantSection";

const Home = () => {
  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <Banner />
      <CategorySection />
      <FashionSection />
      <ElectronicsSection />
      <FurnitureSection />
      <PlantSection />
      <NewsLetterSection />
    </div>
  );
};

export default Home;
