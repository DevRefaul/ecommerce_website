import Home from "../Pages/Home/Home";
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
        path: "/fashion",
        element: "",
      },
      {
        path: "/electronics",
        element: "",
      },
      {
        path: "/furniture",
        element: "",
      },
      {
        path: "/plant",
        element: "",
      },
    ],
  },
]);

export default routes;
