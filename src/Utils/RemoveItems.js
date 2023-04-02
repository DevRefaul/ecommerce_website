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