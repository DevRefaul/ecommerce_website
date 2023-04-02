import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Utils/Contexts";
import { api } from "../../Utils/Api";

const AllCheckout = () => {
  const { loadCartItems } = useContext(Context);
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    fetch(`${api}/getcartitems`)
      .then((res) => res.json())
      .then((data) => setCartItems(data.cartItems));
  }, [loadCartItems]);

  return (
    <div>
      <h2>This is all checkout page</h2>
    </div>
  );
};

export default AllCheckout;
