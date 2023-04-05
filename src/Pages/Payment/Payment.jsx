import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./payment.css";
import { useLocation } from "react-router-dom";
import { api } from "../../Utils/Api";
import { toast } from "react-toastify";

const stripePromise = loadStripe(
  "pk_test_51M7I4PBM1N4t2PWxXQCUeLoqgKzwPUL8nqPhQHgROr5Hvvett4yENCXr0KehyxUZvNWhLRExbFHXX7aIfLyeBjcF00W5cGdylm"
);
const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
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
      .then((data) => setClientSecret(data.clientSecret));
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <section>
      <h2 className="text-center my-3 text-3xl font-bold">
        Make your payment secure with stripe
      </h2>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </section>
  );
};

export default Payment;
