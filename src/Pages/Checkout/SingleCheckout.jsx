import React, { useContext, useEffect, useState } from "react";
import { api } from "../../Utils/Api";
import { Context } from "../../Utils/Contexts";
import { deleteCartitems } from "../../Utils/RemoveItems";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SingleCheckout = () => {
  const { loadCartItems, setLoadCartItems } = useContext(Context);
  const [cartItemsData, setCartItemsData] = useState(null);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("UserDetails"));
  useEffect(() => {
    fetch(`${api}/getcartitems?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        data.cartItems.map((item) => {
          item.quantity = 1;

          const itemPrice = item.price.toString();
          if (itemPrice?.includes(",")) {
            const newPrice = Number(item.price.replace(/,/g, ""));
            return (item.totalPrice = newPrice);
          }
          return "";
        });

        setCartItemsData(data.cartItems);
      });
  }, [loadCartItems, user.email]);

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

  if (cartItemsData === undefined || cartItemsData === null) {
    return navigate("/");
  }

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
            user,
            cartItemsData,
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
                "Your Orders Are Placed. Visit Your Profile To View Orders"
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
            cartItemsData,
            paymentMethod,
            payment: "Pending",
            status: "Processing",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.orderResponse.insertedId) {
              navigate("/payment", { state: data.orderResponse.insertedId });
              return toast.success("Your Orders Are Placed.");
            }
          });
      }
    } else {
      return toast.info("Please Select Any Payment Method");
    }
  };

  return (
    <div>
      <h2>This is single order page</h2>
    </div>
  );
};

export default SingleCheckout;
