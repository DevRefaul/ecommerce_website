import React, { useEffect, useState } from "react";
import LoadingScene from "../../Components/LoadingScene/LoadingScene";
import SingleCardForAllProducts from "../../Components/SingleCardComponents/SingleCardForAllProducts";
import { api } from "../../Utils/Api";

const TrendingProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch(`${api}/trendingProducts`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setloading(false);
      })
      .catch((err) => console.error(err.message));
  }, []);

  if (loading) {
    return <LoadingScene />;
  }

  return (
    <section className="my-6">
      <h2 className="text-3xl font-bold text-center my-8">
        Our Trending Products
      </h2>

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

export default TrendingProducts;
