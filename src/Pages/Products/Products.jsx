import React from "react";
import SingleCardForAllProducts from "../../Components/SingleCardComponents/SingleCardForAllProducts";

const Products = () => {
  return (
    <section className="w-[95%] md:w-[80%] mx-auto my-8">
      <h2 className="text-3xl font-semibold my-6 text-center">All Products</h2>
      <SingleCardForAllProducts />
    </section>
  );
};

export default Products;
