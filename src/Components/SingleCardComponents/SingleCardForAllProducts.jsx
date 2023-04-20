import { Badge, Card } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./SingleCard.css";
import { ToastContainer } from "react-toastify";
import { Context } from "../../Utils/Contexts";
import { addOrderToDB } from "../../Utils/functionForOrders";

const SingleCardForAllProducts = ({ product }) => {
  const { _id, name, price, description, image, brand, category } = product;
  const { loadCartItems, setLoadCartItems } = useContext(Context);

  return (
    <div className="max-w-sm singleCard">
      <ToastContainer />
      <Card
        imgSrc={image && image}
        imgAlt={name ? `${name + "'s Image"}` : "Product Image"}
        className=""
      >
        <div className="flex flex-col justify-between min-h-[230px] lg:min-h-[250px] xl:min-h-[240px]  2xl:min-h-full">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-between">
              {name?.length > 15 ? name.slice(0, 15) + ".." : name}
              {brand && (
                <Badge color="success" size="sm">
                  {brand}
                </Badge>
              )}
            </h5>

            <p className="font-normal text-start text-gray-700 dark:text-gray-400 mb-3">
              {description.slice(0, 50) + "..."}
            </p>

            <h4 className="text-xl font-bold text-start">Price: {price}$</h4>
          </div>

          {/* section for btns */}
          <div
            id="bottomBtns"
            className="grid grid-cols-2 gap-x-2 gap-y-4 items-center"
          >
            <button className="seeMore text-sm py-2.5 text-center mr-2 xl:mt-4 w-full">
              <Link
                to={`/products/${category}/${name}`}
                state={{ productName: name, productId: _id }}
              >
                See More
              </Link>
            </button>
            <button
              className="addToCart text-sm p-2.5 text-center xl:ml-2 xl:mt-4 w-full"
              onClick={() =>
                addOrderToDB(product, loadCartItems, setLoadCartItems)
              }
            >
              Add Cart
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleCardForAllProducts;
