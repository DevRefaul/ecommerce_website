import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./payment.module.css";
import { useLocation } from "react-router-dom";
import { api } from "../../Utils/Api";
import { ToastContainer, toast } from "react-toastify";

const stripePromise = loadStripe(
  "pk_test_51M7I4PBM1N4t2PWxXQCUeLoqgKzwPUL8nqPhQHgROr5Hvvett4yENCXr0KehyxUZvNWhLRExbFHXX7aIfLyeBjcF00W5cGdylm"
);
const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const location = useLocation();

  useEffect(() => {
    const orderId = location.state;

    fetch(`${api}/getorder?id=${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200 && data.orderResponse._id) {
          return createPaymentIntent(data.orderResponse);
        } else {
          return toast.error(data.message);
        }
      });
  }, [location.state]);

  const createPaymentIntent = (item) => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${api}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTotalPayment(data.paymentIntent.amount);
        return setClientSecret(data.clientSecret);
      });
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <section className="flex justify-center min-h-screen my-6">
      <ToastContainer />
      <div>
        <h2 className="text-center text-3xl font-bold my-4">
          Make your payment secure with stripe
        </h2>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm totalPayment={totalPayment} styles={styles} />
          </Elements>
        )}
      </div>
    </section>
  );
};

export default Payment;
