import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Utils/Contexts";
import { api } from "../../../Utils/Api";
import { handleDeleteItemFromCart } from "../../../Utils/RemoveItems";
import { ToastContainer, toast } from "react-toastify";

const Orders = () => {
  const { loadCartItems, setLoadCartItems } = useContext(Context);
  const [cartItemsData, setCartItemsData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));

    fetch(`${api}/getcartitems?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartItemsData(data.cartItems));
  }, [loadCartItems]);

  return (
    <section className="container mx-auto">
      <ToastContainer />
      <h2 className="text-center font-semibold my-6">Checkout Products</h2>
      <div className="relative overflow-x-auto my-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-orange-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* all data will me mapped here */}
            {cartItemsData?.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={item._id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <button
                      className="text-lg font-semibold bg-orange-500 px-2 mx-1 text-white w-8"
                      onClick={() => {
                        document.getElementById(`${item._id}_quantity`).value =
                          Number(
                            document.getElementById(`${item._id}_quantity`)
                              .value
                          ) + 1;
                      }}
                    >
                      +
                    </button>
                    <input
                      type="text"
                      id={`${item._id}_quantity`}
                      defaultValue="1"
                      className="w-14 cursor-not-allowed"
                      disabled
                    />
                    <button className="text-lg font-semibold bg-orange-500 px-2 mx-1 text-white w-8">
                      -
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {" "}
                  <button
                    onClick={() =>
                      handleDeleteItemFromCart(
                        item,
                        loadCartItems,
                        setLoadCartItems
                      )
                    }
                    className="p-2 rounded bg-red-500 text-white font-semibold"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;
