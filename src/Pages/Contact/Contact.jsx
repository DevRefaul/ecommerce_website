import React from "react";
import Lottie from "lottie-react";
import contactAnimation from "./contact-us.json";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Successfully Contacted, We Will Reach out to you");
  };

  return (
    <section className="lg:flex justify-center items-center h-[100vh] overflow-scroll">
      <ToastContainer />
      <div>
        <h2 className="text-2xl font-semibold text-center">Contact us</h2>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex justify-center items-center">
            <Lottie animationData={contactAnimation} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded dark:bg-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-green-300 hover:bg-transparent border-2 border-transparent hover:border-green-400
           text-sm font-bold tracking-wide uppercase rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
