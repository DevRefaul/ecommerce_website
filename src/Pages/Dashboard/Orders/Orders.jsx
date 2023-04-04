import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Utils/Contexts";
import { api } from "../../../Utils/Api";

const Orders = () => {
  const { loadCartItems } = useContext(Context);
  const [cartItemsData, setCartItemsData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));

    fetch(`${api}/getcartitems?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartItemsData(data.cartItems));
  }, [loadCartItems]);

  return (
    <section className="container mx-auto">
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
              <th scope="col" className="px-6 py-3"></th>
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
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orders;
