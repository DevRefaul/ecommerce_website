import { Badge, Card } from "flowbite-react";
import React from "react";

const SingleCardForAllProducts = () => {
  return (
    <>
      <div className="max-w-sm">
        <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-between">
            Noteworthy technology acquisitions 2021
            <Badge color="success" size="sm">
              Brand
            </Badge>
          </h5>

          <p className="font-normal text-gray-700 dark:text-gray-400">
            Description here
          </p>

          <h4 className="text-xl font-bold">$</h4>

          {/* section for price */}
          <div className="grid grid-cols-2 gap-4">
            <button className="text-white bg-gradient-to-r from-green-300 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6 w-full">
              See More
            </button>
            <button className="text-white bg-gradient-to-r from-orange-400 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6 w-full">
              Add To Cart
            </button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SingleCardForAllProducts;
