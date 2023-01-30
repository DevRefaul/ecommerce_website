import React from "react";

const CategorySection = () => {
  return (
    <section className="my-8">
      <h2 className="py-3 text-center text-3xl font-medium">
        Shop By Category
      </h2>

      <div className="my-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="">
          <h2>Fashion</h2>
        </div>
        <div className="bg-green-400">
          <h2>Furniture</h2>
        </div>
        <div className="bg-green-400">
          <h2>Electronics</h2>
        </div>
        <div className="bg-green-400">
          <h2>Plant</h2>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
