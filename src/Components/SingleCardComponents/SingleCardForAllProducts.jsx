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
        </Card>
      </div>
    </>
  );
};

export default SingleCardForAllProducts;
