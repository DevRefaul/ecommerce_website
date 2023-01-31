import React from "react";
import { Link } from "react-router-dom";

const ElectronicsSection = () => {
  return (
    <section className="my-6">
      <h2 className="text-2xl font-semibold">Electronics</h2>

      <Link to="/products/electronics">
        <button className="text-white bg-gradient-to-r from-green-300 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6">
          See More Products
        </button>
      </Link>
    </section>
  );
};

export default ElectronicsSection;
