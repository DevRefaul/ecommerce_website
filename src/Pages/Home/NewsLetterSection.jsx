import React from "react";

const NewsLetterSection = () => {
  return (
    <section className="bg-gradient-to-l from-green-300  to-blue-400 p-10 grid xl:grid-cols-[3fr,2fr] xl:w-[80%] mx-auto my-20 rounded">
      <div>
        <h2 className="text-white font-bold text-2xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-800 font-medium">
          Stay updated with the latest news and offers from our company.
        </p>
      </div>
      <form className="my-4">
        <input
          type="email"
          name="email"
          className="bg-transparent p-2 text-gray-800 border border-white rounded w-64 mx-auto"
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="bg-white border-2 border-transparent text-gray-600 font-bold py-2 px-4 rounded hover:bg-transparent hover:border-white ml-1"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsLetterSection;
