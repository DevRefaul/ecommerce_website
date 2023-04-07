import React from "react";
import { useLocation } from "react-router-dom";

const CheckoutMessage = () => {
  const location = useLocation();

  const { transactionId, totalPaid } = location.state;

  return (
    <div>
      <h2>Congratulation Your Payment Has Completed</h2>
      <p>
        Your Transaction id id - {transactionId} and total bill is - {totalPaid}{" "}
        $
      </p>
    </div>
  );
};

export default CheckoutMessage;
