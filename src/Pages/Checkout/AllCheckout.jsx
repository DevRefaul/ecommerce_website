import React, { useContext, useEffect } from "react";
import { Context } from "../../Utils/Contexts";
import { api } from "../../Utils/Api";

const AllCheckout = () => {
  const { loadCartItems } = useContext(Context);

  useEffect(() => {
    fetch(`${api}/getcartitems`)
      .then((res) => res.json())
      .then((data) => data);
  }, [loadCartItems]);

  return (
    <div>
      <h2>This is all checkout page</h2>
    </div>
  );
};

export default AllCheckout;
