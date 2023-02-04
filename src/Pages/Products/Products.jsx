import React from "react";
import SingleCardForAllProducts from "../../Components/SingleCardComponents/SingleCardForAllProducts";

const Products = () => {
  return (
    <section className="w-[95%] md:w-[80%] mx-auto my-8">
      <h2 className="text-3xl font-semibold my-6 text-center">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
        <SingleCardForAllProducts />
        <SingleCardForAllProducts />
        <SingleCardForAllProducts />
        <SingleCardForAllProducts />
        <SingleCardForAllProducts />
        <SingleCardForAllProducts />
        <SingleCardForAllProducts />
      </div>
    </section>
  );
};

export default Products;
