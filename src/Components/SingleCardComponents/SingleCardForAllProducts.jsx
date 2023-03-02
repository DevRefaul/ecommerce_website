import { Badge, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import "./SingleCard.css";

const SingleCardForAllProducts = ({ product }) => {
  const { name, price, description, image, brand } = product;

  return (
    <>
      <div className="max-w-sm h-full singleCard">
        <Card imgSrc={image && image} className="h-full">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
            {name}
            <Badge color="success" size="sm">
              {brand}
            </Badge>
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          <h4 className="text-xl font-bold">${price}</h4>

          {/* section for price */}
          <div className="grid xl:grid-cols-2 xl:gap-4">
            <Link to={`/products/${name}`} state={{ productName: name }}>
              <button className="text-white bg-gradient-to-r from-green-300 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 lg:mt-6 w-full">
                See More
              </button>
            </Link>
            <button className="text-white bg-gradient-to-r from-orange-400 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 lg:mt-6 w-full">
              Add To Cart
            </button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SingleCardForAllProducts;
