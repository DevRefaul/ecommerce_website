import React from "react";
import { Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";

import congratsAnim from "./checkoutAnim.json";

const CheckoutMessage = () => {
  const location = useLocation();

  const { transactionId, totalPaid } = location.state;

  return (
    <section className="container mx-auto py-10 flex items-center justify-center min-h-screen">
      <div>
        <div className="w-24 h-24 mx-auto">
          <Lottie animationData={congratsAnim} />
        </div>

        <h2 className="text-center text-2xl font-semibold mt-10">
          Congratulation Your Payment Has Completed
        </h2>
        <p className="text-center my-10">
          Your Transaction id is -{" "}
          <span className="text-lg font-semibold text-green-500">
            {transactionId}
          </span>{" "}
          and total bill is -{" "}
          <span className="text-lg font-semibold text-orange-500">
            {totalPaid}
          </span>{" "}
          $
        </p>
        <p className="text-center text-2xl font-semibold my-10">
          Save your transaction id for future
        </p>

        <div className="flex justify-center">
          <Link to="/">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Go To Homepage
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckoutMessage;
