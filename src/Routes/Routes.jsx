import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Orders from "../Pages/Dashboard/Orders/Orders";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProductRoot from "../Pages/Products/ProductRoot/ProductRoot";
import Products from "../Pages/Products/Products";
import ProductsAsCategoryPage from "../Pages/Products/ProductsAsCategoryPage/ProductsAsCategoryPage";
import SingleProductPage from "../Pages/Products/SingleProductPage/SingleProductPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/checkoutall",
        element: <Orders />,
      },
      {
        path: "/checkout/:id",
        element: <Orders />,
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
      {
        path: "/products/:category/:name",
        element: <SingleProductPage />,
      },
    ],
  },
]);

export default routes;
