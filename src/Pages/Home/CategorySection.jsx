import React from "react";
import "./CategorySection.css";

const CategorySection = () => {
  return (
    <section className="my-8">
      <h2 className="py-3 text-center text-3xl font-medium">
        Shop By Category
      </h2>

      <div className="my-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-32 relative rounded-lg">
          <h2 className="textCenter text-white text-3xl font-medium font-['Roboto_Slab']">
            Fashion
          </h2>
        </div>
        <div className="bg-gradient-to-r from-rose-400 to-orange-300 h-32 relative rounded-lg">
          <h2 className="textCenter text-white text-3xl font-medium font-['Roboto_Slab']">
            Furniture
          </h2>
        </div>
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 h-32 relative rounded-lg">
          <h2 className="textCenter text-white text-3xl font-medium font-['Roboto_Slab']">
            Electronics
          </h2>
        </div>
        <div className="bg-gradient-to-r from-green-300 via-green-400 to-green-500 h-32 relative rounded-lg">
          <h2 className="textCenter text-white text-3xl font-medium font-['Roboto_Slab']">
            Plant
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
