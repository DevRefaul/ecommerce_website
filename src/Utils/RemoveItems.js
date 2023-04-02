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


export const handleDeleteAllItemsFromCart = (email, loadCartItems, setLoadCartItems) => {

    fetch(`${api}/removeitemfromcart`, {
        method: "DELETE",
        body: JSON.stringify(email)
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