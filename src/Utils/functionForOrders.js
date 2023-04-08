import { toast } from "react-toastify";
import { api } from "./Api";
import { Navigate } from "react-router-dom";

export const addOrderToDB = async (product, loadCartItems, setLoadCartItems) => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));

    if (!user && localStorage.getItem("UserLoggedIn") !== "true") {
        toast.info("Please Login Or SignUp To Add Items To Cart");
        return Navigate("/login");
    }

    fetch(`${api}/cartitemtodb`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            product,
            user,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.cart.insertedId && data.status === 200) {
                toast.success(data.message);
                return setLoadCartItems(!loadCartItems);
            } else {
                toast.error(data.message);
            }
        });
};