import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import ProductRoot from "../Pages/Products/ProductRoot/ProductRoot";
import Products from "../Pages/Products/Products";
import ProductsAsCategoryPage from "../Pages/Products/ProductsAsCategoryPage/ProductsAsCategoryPage";
import SingleProductPage from "../Pages/Products/SingleProductPage/SingleProductPage";
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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product/:name",
        element: <SingleProductPage />,
      },
    ],
  },
  {
    path: "/products",
    element: <ProductRoot />,
    errorElement: "",
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:category",
        element: <ProductsAsCategoryPage />,
      },
    ],
  },
]);

export default routes;
