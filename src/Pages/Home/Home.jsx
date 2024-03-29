import React from "react";
import Banner from "./Banner";
import BrandsPartner from "./BrandsPartner";
import CategorySection from "./CategorySection";
import ElectronicsSection from "./ElectronicsSection";
import FashionSection from "./FashionSection";
import FurnitureSection from "./FurnitureSection";
import NewsLetterSection from "./NewsLetterSection";
import PlantSection from "./PlantSection";
import ReviewsSection from "./ReviewsSection";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <div className="w-[95%] md:w-[80%] mx-auto">
      <Banner />
      <CategorySection />
      <TrendingProducts />
      <FashionSection />
      <ElectronicsSection />
      <FurnitureSection />
      <PlantSection />
      <NewsLetterSection />
      <BrandsPartner />
      <ReviewsSection />
    </div>
  );
};

export default Home;
