import React, { useEffect, useState } from "react";
import { api } from "../../../Utils/Api";
import TransParentLoadingScene from "../../../Components/LoadingScene/TransParentLoadingScene";
import { ToastContainer, toast } from "react-toastify";

const OrderProcess = () => {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(false);
  const [reFetch, setReFetch] = useState(false);

  // fetching all orders data
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
  }, [reFetch]);

  // function for updating order status
  const handleUpdateOrderStatus = (orderId) => {
    const orderStatus = document.getElementById(`${orderId}_status`).value;

    if (
      orderStatus === "" ||
      orderStatus === null ||
      orderStatus === undefined
    ) {
      return toast.error("Please Select A Updating State");
    }

    setLoading(true);
    fetch(`${api}/updateorderstate`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ orderId, orderStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (
          data.status === 200 &&
          data.updatedResponse.acknowledged &&
          data.updatedResponse.modifiedCount
        ) {
          toast.success(data.message);
          setReFetch(!reFetch);
        } else {
          toast.error(data.message);
        }
        setLoading(false);
      });
  };

  if (loading) {
    return <TransParentLoadingScene />;
  }

  return (
    <section className="py-8 container mx-auto">
      <ToastContainer />
      <h3 className="text-center text-2xl font-semibold my-4">
        Process and Update Orders
      </h3>

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
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* all data will me mapped here */}

            {orders?.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4">{order._id}</td>
                <td className="px-6 py-4">{order.name}</td>
                <td className="px-6 py-4">{order.email}</td>
                <td className="px-6 py-4">{order.totalPrice}</td>
                <td className="px-6 py-4">{order.payment}</td>
                <td className="px-6 py-4">
                  {order.transactionId ? order.transactionId : "Not Paid Yet"}
                </td>
                <td className="px-6 py-4">{order.status}</td>
                <td className="px-6 py-4">
                  <select name="orderStatus" id={`${order._id}_status`}>
                    <option value="">Update Order Status</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out For Delivery">Out For Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleUpdateOrderStatus(order._id)}
                    className="bg-green-500 text-white font-semibold px-4 py-2 rounded"
                  >
                    Update
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

export default OrderProcess;
