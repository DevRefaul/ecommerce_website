import { api } from "./Api";
import { toast } from "react-toastify";


export const handleDeleteItemFromCart = (item, loadCartItems, setLoadCartItems) => {

    fetch(`${api}/removeitemfromcart`, {
        method: "DELETE",
        body: JSON.stringify(item)
    })
        .then(res => res.json())
        .then(data => {
            if (data.deleteResponse.acknowledged) {
                setLoadCartItems(!loadCartItems)
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        })
};


export const handleDeleteAllItemsFromCart = (userData, loadCartItems, setLoadCartItems) => {
    fetch(`${api}/deleteall?email=${userData.email}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            if (data.removedResponse.acknowledged) {
                setLoadCartItems(!loadCartItems)
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        })
};

// function for calling server to delete cart items from databasr after payment or order
export const deleteCartitems = (email, loadCartItems, setLoadCartItems) => {
    fetch(`${api}/removeCartItem?email=${email}`, {
        method: "DELETE",
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 200 && data.deleteResponse.deletedCount) {
                setLoadCartItems(!loadCartItems);
            }
        });
};


// function for updating order after payment has done
export const updateOrder = ({ orderId, paymentInfo }) => {


    fetch(`${api}/updateorder`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ orderId, paymentInfo })
    })
        .then(res => res.json())
        .then(data => console.log(data))


}
