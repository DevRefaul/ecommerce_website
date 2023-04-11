import React, { useEffect, useState } from "react";
import { api } from "../../../Utils/Api";

const OrderProcess = () => {
  const [orders, setOrders] = useState();

  useEffect(() => {
    fetch(`${api}/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data.orders));
  }, []);

  console.log(orders);

  return (
    <section className="py-8">
      <h3>Process Orders</h3>
    </section>
  );
};

export default OrderProcess;
