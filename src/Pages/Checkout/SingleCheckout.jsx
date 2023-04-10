import React, { useContext } from "react";
import { api } from "../../Utils/Api";
import { Context } from "../../Utils/Contexts";
import { deleteCartitems } from "../../Utils/RemoveItems";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SingleCheckout = () => {
  const { loadCartItems, setLoadCartItems } = useContext(Context);
  const navigate = useNavigate();

  const location = useLocation();

  const product = location.state.product;
  const { _id, name, price, image } = product;
  product.quantity = 1;

  if (price?.includes(",")) {
    const newPrice = Number(price.replace(/,/g, ""));
    product.totalPrice = newPrice;
  }

  const user = JSON.parse(localStorage.getItem("UserDetails"));

  // function for increase quantity and update price as quantity
  const handleIncreaseQuantity = (item) => {
    // checking if the quantity is 20 or not because user cant order more than 20
    if (document.getElementById(`${item._id}_quantity`).value === "20") {
      return toast.info("Can't Order More Than 20 Same Products At A Time");
    }

    // setting the value after increasing
    document.getElementById(`${item._id}_quantity`).value =
      Number(document.getElementById(`${item._id}_quantity`).value) + 1;
    // checking if the quantity is 1 or not because wont work if the value is 0
    if (document.getElementById(`${item._id}_quantity`).value === "1") {
      return (document.getElementById(`${item._id}_Price`).innerText =
        item.price);
    }
    item.quantity = Number(
      document.getElementById(`${item._id}_quantity`).value
    );

    const itemPrice = item.price.toString();

    // using regular expression for solving the problem of comma in price
    if (itemPrice?.includes(",")) {
      const prevPrice = Number(item.price.replace(/,/g, ""));
      document.getElementById(`${item._id}_Price`).innerText =
        Number(document.getElementById(`${item._id}_quantity`).value) *
        Number(prevPrice);

      // setting fixed decimal to show
      document.getElementById(`${item._id}_Price`).innerText = Number(
        document.getElementById(`${item._id}_Price`).innerText
      ).toFixed(2);

      item.totalPrice =
        Number(prevPrice) *
        Number(document.getElementById(`${item._id}_quantity`).value);
      return;
    }

    // setting the price for the price section
    document.getElementById(`${item._id}_Price`).innerText =
      Number(document.getElementById(`${item._id}_quantity`).value) *
      Number(item.price);

    // setting fixed decimal to show
    document.getElementById(`${item._id}_Price`).innerText = Number(
      document.getElementById(`${item._id}_Price`).innerText
    ).toFixed(2);

    item.totalPrice = Number(
      document.getElementById(`${item._id}_Price`).innerText
    );
  };

  // function for decrease quantity and update price as quantity
  const handleDecreaseQuantity = (item) => {
    // if the value is 0 it wont show - values
    if (document.getElementById(`${item._id}_quantity`).value === "0") {
      return (document.getElementById(`${item._id}_Price`).innerText = 0);
    }

    // setting the value after decreasing
    document.getElementById(`${item._id}_quantity`).value =
      Number(document.getElementById(`${item._id}_quantity`).value) - 1;

    const itemPrice = item.price.toString();
    // using regular expression for solving the problem of comma in price
    if (itemPrice?.includes(",")) {
      const prevPrice = Number(item.price.replace(/,/g, ""));
      return (document.getElementById(`${item._id}_Price`).innerText =
        Number(document.getElementById(`${item._id}_quantity`).value) *
        Number(prevPrice));
    }
    // setting the price for the price section
    document.getElementById(`${item._id}_Price`).innerText =
      Number(document.getElementById(`${item._id}_quantity`).value) *
      Number(item.price);

    // setting fixed decimal to show
    document.getElementById(`${item._id}_Price`).innerText = Number(
      document.getElementById(`${item._id}_Price`).innerText
    ).toFixed(2);
    item.quantity = Number(
      document.getElementById(`${item._id}_quantity`).value
    );
    item.totalPrice = Number(
      document.getElementById(`${item._id}_Price`).innerText
    );
  };

  // function for checkout
  const handleCheckout = () => {
    if (
      document.getElementById("cashOnDelivery").checked ||
      document.getElementById("payNow").checked
    ) {
      let paymentMethod;

      if (document.getElementById("cashOnDelivery").checked) {
        paymentMethod = "Cash On Delivery";

        fetch(`${api}/addorder`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            name: user.name,
            cartItemsData: [product],
            paymentMethod,
            payment: "Pending",
            status: "Processing",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.orderResponse.insertedId) {
              deleteCartitems(user.email, loadCartItems, setLoadCartItems);
              navigate("/");
              return toast.success(
                "Your Orders Is Placed. Visit Your Profile To View Orders"
              );
            }
          });
      } else if (document.getElementById("payNow").checked) {
        paymentMethod = "Pay Now";

        fetch(`${api}/addorder`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            user,
            cartItemsData: [product],
            paymentMethod,
            payment: "Pending",
            status: "Processing",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data.orderResponse);
            if (data.orderResponse.insertedId) {
              navigate("/payment", { state: data.orderResponse.insertedId });
              return toast.success("Your Orders Is Placed.");
            }
          });
      }
    } else {
      return toast.info("Please Select Any Payment Method");
    }
  };

  return (
    <section className="container mx-auto min-h-screen">
      <ToastContainer />
      <h2 className="text-center font-semibold my-6">Checkout Product</h2>
      <div className="relative overflow-x-auto my-6">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-orange-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* all data will me mapped here */}

            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={_id}
            >
              <td>
                <img src={image} alt={`${name}'s img`} className="w-28 ml-3" />
              </td>

              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {name}
              </th>
              <td className="px-6 py-4">
                <p id={`${_id}_Price`}> {price}</p>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-center">
                  <button
                    className="text-lg font-semibold bg-orange-500 px-2 mx-1 text-white w-8"
                    onClick={() => handleIncreaseQuantity(product)}
                  >
                    +
                  </button>
                  <input
                    type="text"
                    id={`${product._id}_quantity`}
                    defaultValue="1"
                    className="w-14 cursor-not-allowed"
                    disabled
                  />
                  <button
                    className="text-lg font-semibold bg-orange-500 px-2 mx-1 text-white w-8"
                    onClick={() => handleDecreaseQuantity(product)}
                  >
                    -
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* buying section */}
      <div className="my-6">
        <h4 className="font-medium text-lg my-3">Select Your Paying Method</h4>
        <div>
          <div>
            <input
              type="radio"
              name="paymentType"
              id="cashOnDelivery"
              value="Cash On Delivery"
              className="mr-2"
            />
            <label htmlFor="cashOnDelivery">Cash On Devlivery</label>
          </div>
          <div>
            <input
              type="radio"
              name="paymentType"
              id="payNow"
              value="Cash On Delivery"
              className="mr-2"
            />
            <label htmlFor="payNow">Pay Now</label>
          </div>

          <button
            className="bg-orange-500 font-semibold text-white px-6 py-2 my-4 rounded"
            onClick={handleCheckout}
          >
            Go To Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleCheckout;
