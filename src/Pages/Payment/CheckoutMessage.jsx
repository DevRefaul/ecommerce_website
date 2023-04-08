import React from "react";
import { useLocation } from "react-router-dom";

const CheckoutMessage = () => {
  const location = useLocation();

  const { transactionId, totalPaid } = location.state;

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-center text-2xl font-semibold">
        Congratulation Your Payment Has Completed
      </h2>
      <p>
        Your Transaction id id - {transactionId} and total bill is - {totalPaid}{" "}
        $
      </p>
    </section>
  );
};

export default CheckoutMessage;
