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
          <tbody>{/* all data will me mapped here */}\</tbody>
        </table>
      </div>
    </section>
  );
};

export default OrderProcess;
