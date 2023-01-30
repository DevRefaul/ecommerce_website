import Home from "../Pages/Home/Home";
import Electronics from "../Pages/Products/Electronics/Electronics";
import Fashion from "../Pages/Products/Fashion/Fashion";
import Furniture from "../Pages/Products/Furniture/Furniture";
import Plant from "../Pages/Products/Plant/Plant";
import ProductRoot from "../Pages/Products/ProductRoot/ProductRoot";
import Root from "../Root/Root";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/products",
    element: <ProductRoot />,
    errorElement: "",
    children: [
      {
        path: "/products/fashion",
        element: <Fashion />,
      },
      {
        path: "/products/electronics",
        element: <Electronics />,
      },
      {
        path: "/products/furniture",
        element: <Furniture />,
      },
      {
        path: "/products/plant",
        element: <Plant />,
      },
    ],
  },
]);

export default routes;
