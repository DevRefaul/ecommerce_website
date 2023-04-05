import React, { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./payment.css";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
const Payment = () => {
  const [clientSecret, setClientSecret] = useState("");
  const location = useLocation();

  useEffect(() => {
    const orderId = location.state;
  }, [location.state]);

  const createPaymentIntent = (item) => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
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
