import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LoadingScene from "../../../Components/LoadingScene/LoadingScene";
import SingleCardForAllProducts from "../../../Components/SingleCardComponents/SingleCardForAllProducts";
import { api } from "../../../Utils/Api";

const ProductsAsCategoryPage = () => {
  const location = useLocation();

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    if (mounted.current === true) {
      window.scrollTo(0, 0);
    }
    return () => (mounted.current = false);
  }, []);

  const { isLoading, data } = useQuery(
    ["productcategory"],
    functionForFetchingRelatedData
  );

  function functionForFetchingRelatedData() {
    return fetch(
      `${api}/productcategory?category=${
        location.pathname.split("/")[2]?.charAt(0)?.toUpperCase() +
        location.pathname.split("/")[2]?.slice(1)
      }`
    )
      .then((res) => res.json())
      .then((data) => data);
  }

  if (isLoading) {
    return <LoadingScene />;
  }

  return (
    <section className="w-[95%] md:w-[80%] mx-auto my-8">
      <ToastContainer />
      <h2 className="text-3xl font-semibold my-6 text-center">
        Total {data && data.productsOfCategory.length} Products Found
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
        {data
          ? data?.productsOfCategory?.map((product, i) => {
              return <SingleCardForAllProducts key={i} product={product} />;
            })
          : ""}
      </div>
    </section>
  );
};

export default ProductsAsCategoryPage;
