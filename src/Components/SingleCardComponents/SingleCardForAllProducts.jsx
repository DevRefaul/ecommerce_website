import { Badge, Card } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SingleCard.css";
import { api } from "../../Utils/Api";
import { ToastContainer, toast } from "react-toastify";
import { Context } from "../../Utils/Contexts";

const SingleCardForAllProducts = ({ product }) => {
  const { _id, name, price, description, image, brand, category } = product;
  const navigate = useNavigate();
  const { loadCartItems } = useContext(Context);

  const addOrderToDB = async () => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));

    if (!user && localStorage.getItem("UserLoggedIn") !== "true") {
      toast.info("Please Login Or SignUp To Add Items To Cart");
      return navigate("/login");
    }

    fetch(`${api}/cartitemtodb`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        product,
        user,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.cart.insertedId && data.status === 200) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <div className="max-w-sm h-[530px] lg:h-[500px] 2xl:h-[450px] singleCard">
        <ToastContainer />
        <Card
          imgSrc={image && image}
          imgAlt={name ? `${name + "'s Image"}` : "Product Image"}
          className="h-[530px] lg:h-[500px] 2xl:h-[450px] "
        >
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex justify-between">
              {name?.length > 15 ? name.slice(0, 15) + "..." : name}
              {brand && (
                <Badge color="success" size="sm">
                  {brand}
                </Badge>
              )}
            </h5>

            <p className="font-normal text-start text-gray-700 dark:text-gray-400">
              {description.slice(0, 50) + "..."}
            </p>

            <h4 className="text-xl font-bold text-start mt-4">
              Price: {price}$
            </h4>
          </div>

          {/* section for price */}
          <div id="bottomBtns" className="grid lg:grid-cols-2 gap-2">
            <Link
              to={`/products/${category}/${name}`}
              state={{ productName: name, productId: _id }}
            >
              <button className=" text-white bg-gradient-to-r from-green-300 to-blue-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 mb-2 lg:mt-6 w-full">
                See More
              </button>
            </Link>
            <button
              className="text-white bg-gradient-to-r from-orange-400 to-yellow-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 lg:mt-6 w-full"
              onClick={addOrderToDB}
            >
              Add To Cart
            </button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SingleCardForAllProducts;
