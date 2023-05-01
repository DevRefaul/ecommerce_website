import About from "../Pages/About/About";
import SingleCheckout from "../Pages/Checkout/SingleCheckout";
import Contact from "../Pages/Contact/Contact";
import OrderProcess from "../Pages/Dashboard/Admin/OrderProcess";
import Orders from "../Pages/Dashboard/Orders/Orders";
import Profile from "../Pages/Dashboard/Profile/Profile";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import CheckoutMessage from "../Pages/Payment/CheckoutMessage";
import Payment from "../Pages/Payment/Payment";
import ProductRoot from "../Pages/Products/ProductRoot/ProductRoot";
import Products from "../Pages/Products/Products";
import ProductsAsCategoryPage from "../Pages/Products/ProductsAsCategoryPage/ProductsAsCategoryPage";
import SingleProductPage from "../Pages/Products/SingleProductPage/SingleProductPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import SignUpPage from "../Pages/SignUp/SignUpPage";
import AdminRoute from "../Root/Admin/AdminRoute";
import PrivateRoute from "../Root/Private/PrivateRoute";
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
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "/order/:id",
        element: (
          <PrivateRoute>
            <SingleCheckout />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkoutmessage",
        element: (
          <PrivateRoute>
            <CheckoutMessage />
          </PrivateRoute>
        ),
      },
      {
        path: "/processorders",
        element: (
          <AdminRoute>
            <OrderProcess />
          </AdminRoute>
        ),
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
      {
        path: "/products/:name",
        element: <SearchPage />,
      },
    ],
  },
]);

export default routes;
