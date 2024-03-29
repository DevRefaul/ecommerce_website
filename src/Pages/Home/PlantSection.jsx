import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingScene from "../../Components/LoadingScene/LoadingScene";
import SingleCardForAllProducts from "../../Components/SingleCardComponents/SingleCardForAllProducts";
import { api } from "../../Utils/Api";

const PlantSection = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch(`${api}/productcategory?category=Plant`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.productsOfCategory.slice(0, 8));
        setloading(false);
      })
      .catch((err) => console.error(err.message));
  }, []);

  if (loading) {
    return <LoadingScene />;
  }

  return (
    <section className="my-6">
      <h2 className="text-3xl font-bold my-8">Plants</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
        {data
          ? data.map((product, i) => {
              return <SingleCardForAllProducts key={i} product={product} />;
            })
          : ""}
      </div>

      <Link to="/products/plant">
        <button className="seeMore text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6">
          See More Products
        </button>
      </Link>
    </section>
  );
};

export default PlantSection;
