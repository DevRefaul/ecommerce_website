import { api } from "./Api";

export const handleDeleteItemFromCart = (item) => {


    fetch(`${api}/removeitemfromcart`, {
        method: "DELETE",
        body: JSON.stringify(item)
    })
        .then(res => res.json())
        .then(data => console.log(data))
};