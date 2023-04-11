import React, { useEffect, useState } from "react";
import { api } from "../../../Utils/Api";
import TransParentLoadingScene from "../../../Components/LoadingScene/TransParentLoadingScene";

const OrderProcess = () => {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${api}/orders`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        data?.orders?.map((items) => {
          let totalPrice = 0;
          items?.cartItemsData?.map((item) => {
            if (item.price?.includes(",")) {
              const prevPrice = Number(item.price.replace(/,/g, ""));
              return (totalPrice = totalPrice + prevPrice * item.quantity);
            } else {
              return (totalPrice =
                totalPrice + Number(item.price * item.quantity));
            }
          });
          return (items.totalPrice = totalPrice);
        });
        return setOrders(data.orders);
      });
  }, []);

  if (loading) {
    return <TransParentLoadingScene />;
  }

  console.log(orders);

  return (
    <section className="py-8">
      <h3>Process Orders</h3>

      <div className="relative overflow-x-auto my-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-orange-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3">
                User Mail
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-3">
                Transction ID
              </th>
              <th scope="col" className="px-6 py-3">
                Order Status
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* all data will me mapped here */}

            {/* {orders.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4">{order._id}</td>
                <td className="px-6 py-4">{order.name}</td>
                <td className="px-6 py-4">{order.email}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderProcess;
