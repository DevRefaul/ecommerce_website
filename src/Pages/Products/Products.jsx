import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import LoadingScene from "../../Components/LoadingScene/LoadingScene";
import SingleCardForAllProducts from "../../Components/SingleCardComponents/SingleCardForAllProducts";
import { api } from "../../Utils/Api";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    fetch(`${api}/allProducts`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        toast.success("Successfully Fetched Data");
        setData(data.products);
        setloading(false);
      })
      .catch((err) => console.error(err.message));
  }, []);

  if (loading) {
    return <LoadingScene />;
  }

  return (
    <section className="w-[95%] md:w-[80%] mx-auto my-8">
      <ToastContainer />
      <h2 className="text-3xl font-semibold my-6 text-center">
        Total {data && data.length} Products Found
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

export default Products;
