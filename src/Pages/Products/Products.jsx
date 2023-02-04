import React, { useEffect, useState } from "react";
import SingleCardForAllProducts from "../../Components/SingleCardComponents/SingleCardForAllProducts";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("electronics.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.products);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <section className="w-[95%] md:w-[80%] mx-auto my-8">
      <h2 className="text-3xl font-semibold my-6 text-center">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
        {data
          ? data.map((product, i) => {
              return <SingleCardForAllProducts key={i} product={product} />;
            })
          : ""}
      </div>
    </section>
  );
};

export default Products;
