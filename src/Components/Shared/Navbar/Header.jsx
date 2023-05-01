import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/shopaholic.png";
import { api } from "../../../Utils/Api";
import { Context } from "../../../Utils/Contexts";
import {
  handleDeleteAllItemsFromCart,
  handleDeleteItemFromCart,
} from "../../../Utils/RemoveItems";

const Header = ({ user }) => {
  const [dropdown, setDropdown] = useState(true);
  const [data, setData] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const [showCart, setShowCart] = useState(false);

  const { loadCartItems, setLoadCartItems } = useContext(Context);

  const userDetails = localStorage.getItem("UserDetails");
  const userData = JSON.parse(userDetails);

  useEffect(() => {
    if (!userData) {
      return setData("");
    }

    fetch(`${api}/getcartitems?email=${userData.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        return data;
      });
  }, [loadCartItems, userData]);

  // function for handling dropdown menu
  const handleDropDownMenu = () => {
    if (dropdown) {
      document.getElementById("dropdownNavbar").classList.remove("hidden");
    } else {
      document.getElementById("dropdownNavbar").classList.add("hidden");
    }
    setDropdown(!dropdown);
  };

  // function for hiding submenu
  const handleLetSubmenuHide = () => {
    document.getElementById("dropdownNavbar").classList.add("hidden");
    setDropdown(!dropdown);

    window.location.reload();
  };

  // function for singout
  const handleSignOut = () => {
    localStorage.removeItem("UserDetails");
    localStorage.setItem("UserLoggedIn", "false");
    window.location.reload();
  };

  const handleMenu = () => {
    if (showMenu) {
      document.getElementById("user-dropdown")?.classList.add("hidden");
    } else {
      document.getElementById("user-dropdown")?.classList.remove("hidden");
    }
    setShowMenu(!showMenu);
  };

  const handleHamburgerMenu = () => {
    if (showMobileMenu) {
      document.getElementById("navbar-search").classList.remove("hidden");
      document.getElementById("menubtn").removeAttribute("aria-expanded");
      document.getElementById("menubtn").setAttribute("aria-expanded", "true");
    } else {
      document.getElementById("navbar-search").classList.add("hidden");
      document.getElementById("menubtn").removeAttribute("aria-expanded");
      document.getElementById("menubtn").setAttribute("aria-expanded", "false");
    }
    setShowMobileMenu(!showMobileMenu);
  };

  const handleShowSidebar = () => {
    if (showCart) {
      document.getElementById("cartDrawer")?.classList.remove("transform-none");
      document.getElementById("cartDrawer")?.removeAttribute("aria-model");
      document.getElementById("cartDrawer")?.removeAttribute("role");
      document.getElementById("cartDrawer")?.classList.add("-translate-x-full");
      document
        .getElementById("cartDrawer")
        ?.setAttribute("aria-hidden", "true");
    } else {
      document
        .getElementById("cartDrawer")
        ?.classList.remove("-translate-x-full");
      document.getElementById("cartDrawer")?.classList.add("transform-none");
      document.getElementById("cartDrawer")?.removeAttribute("aria-hidden");
      document.getElementById("cartDrawer")?.setAttribute("aria-model", "true");
      document.getElementById("cartDrawer")?.setAttribute("role", "dialog");
    }
    setShowCart(!showCart);
  };

  return (
    <div className="mb-[80px]">
      <nav
        id="navbar"
        className="bg-[#16e1f5] border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 z-10 fixed top-0 w-full block mb-28"
      >
        <div className="container flex flex-wrap items-center justify-between mx-auto  relative">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="" className="h-6 mr-3 sm:h-7" />
            <span className="self-center font-['Roboto_Slab'] text-xl font-semibold whitespace-nowrap dark:text-white">
              MYSHOP
            </span>
          </Link>

          {/* search bar section starts here */}
          <div className="flex items-center lg:order-2">
            <button
              type="button"
              id="menubtn"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>

            <div className="relative hidden lg:block">
              <div className="absolute top-0 bottom-0 right-0 flex items-center px-3 cursor-pointer rounded-r-lg bg-sky-200">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            {/* login and profile */}

            {localStorage.getItem("UserLoggedIn") === "true" ? (
              <>
                <div className="hidden md:flex items-center  lg:order-2 mx-4">
                  <button
                    type="button"
                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                    onClick={handleMenu}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://www.pngitem.com/pimgs/m/80-800194_transparent-users-icon-png-flat-user-icon-png.png"
                      alt="user img"
                    />
                  </button>
                  {/* <!-- Dropdown menu --> */}
                  <div
                    className="z-50 absolute top-[40px] right-[15px] hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                  >
                    <div className="px-4 py-3">
                      <span className="block text-sm text-gray-900 dark:text-white">
                        {userData && userData.name}
                      </span>
                      <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                        {userData && userData.email}
                      </span>
                    </div>
                    <ul
                      className="py-2"
                      aria-labelledby="user-menu-2"
                      id="dropdown-menu-2"
                    >
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Profile
                        </Link>
                      </li>
                      {user?.role === "admin" && (
                        <li>
                          <Link
                            to="/processorders"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Orders
                          </Link>
                        </li>
                      )}
                      <li
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer"
                        onClick={handleSignOut}
                      >
                        Sign out
                      </li>
                    </ul>
                  </div>
                  <button
                    data-collapse-toggle="mobile-menu-2"
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>

                {/* cart icon */}
                <div
                  type="button"
                  className="cursor-pointer relative"
                  data-drawer-target="cartDrawer"
                  data-drawer-show="cartDrawer"
                  aria-controls="cartDrawer"
                  onClick={handleShowSidebar}
                >
                  <img
                    src="https://img.icons8.com/pastel-glyph/64/null/shopping-cart--v1.png"
                    alt="cart icon"
                    className="bg-orange-100 rounded-full w-9 h-9 p-2 mx-2"
                  />
                  <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-[1px] dark:border-gray-900">
                    {data?.cartItems?.length ? data?.cartItems?.length : 0}
                  </div>
                </div>
                {/* cart icon */}
              </>
            ) : (
              <>
                <div className="hidden lg:block">
                  <Link to="/login">
                    <button className="py-2.5 px-5 ml-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                      Login
                    </button>
                  </Link>
                </div>
              </>
            )}

            {/* login and profile */}

            <button
              data-collapse-toggle="navbar-search"
              id="menubtn"
              onClick={handleHamburgerMenu}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* search bar section ends here */}

          {/* nav links are here */}
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 lg:hidden">
              <div className="absolute top-0 bottom-0 right-0 flex items-center px-3 cursor-pointer rounded-r-lg bg-sky-200">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  onClick={handleDropDownMenu}
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent relative"
                >
                  Products{" "}
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  className="z-50 absolute left-[7rem] top-[160px] lg:top-[2.5rem] hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 lg:left-[18rem] xl:left-[28rem] 2xl:left-[35rem]"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                    onClick={handleLetSubmenuHide}
                  >
                    <li>
                      <Link
                        to="/products"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        All Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/fashion"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Fashion
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/electronics"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Electronics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/furniture"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Furnitures
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/plant"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Plants
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>

              {localStorage.getItem("UserLoggedIn") === "true" ? (
                <>
                  <li>
                    <Link
                      to="/profile"
                      className="block md:hidden py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Profile
                    </Link>
                  </li>
                  {user?.role === "admin" && (
                    <li>
                      <Link
                        to="/processorders"
                        className="block md:hidden py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        Orders
                      </Link>
                    </li>
                  )}
                  <li className="lg:hidden">
                    <button
                      className="py-2 px-2 rounded text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      style={{ margin: "8px 0px 0px" }}
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li className="mt-4">
                  <div className="lg:hidden">
                    <Link to="/login">
                      <button
                        className="py-2.5 px-5 rounded text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        style={{ margin: "0px" }}
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- drawer component for cart--> */}
      <div
        id="cartDrawer"
        className="fixed top-0 left-0 z-50 w-64 md:w-10/12 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-green-50 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="cartDrawer-label"
      >
        <h5
          id="cartDrawer-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Cart
        </h5>
        <button
          type="button"
          id="sidebarCloseBtn"
          data-drawer-hide="cartDrawer"
          aria-controls="cartDrawer"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close Cart</span>
        </button>
        {/* order will show here */}
        <div className="py-4 overflow-y-auto">
          {data?.cartItems?.length ? (
            <>
              {/* table starts here for showing cart items */}
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3"></th>
                      <th scope="col" className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* all data will me mapped here */}
                    {data?.cartItems?.map((item) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={item._id}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.name}
                        </th>
                        <td className="px-6 py-4">{item.price}</td>
                        <td className="px-6 py-4">
                          <Link to={`/order/${item._id}`} state={{ item }}>
                            <button className="p-2 rounded bg-orange-500 text-white font-semibold">
                              Buy_Now
                            </button>
                          </Link>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() =>
                              handleDeleteItemFromCart(
                                item,
                                loadCartItems,
                                setLoadCartItems
                              )
                            }
                            className="p-2 rounded bg-red-500 text-white font-semibold"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* table starts here for showing cart items */}

              {/* section for buy and clear btns */}
              <div className="flex justify-between">
                <Link to="/orders">
                  <button
                    onClick={() =>
                      document.getElementById("sidebarCloseBtn").click()
                    }
                    className="px-4 py-2 rounded bg-green-500 text-white font-semibold my-4"
                  >
                    Buy All
                  </button>
                </Link>
                <button
                  onClick={() =>
                    handleDeleteAllItemsFromCart(
                      userData,
                      loadCartItems,
                      setLoadCartItems
                    )
                  }
                  className="px-4 py-2 rounded bg-red-500 text-white font-semibold my-4"
                >
                  Clear Cart
                </button>
              </div>
              {/* order will show here */}
            </>
          ) : (
            <>
              <p className="my-4 font-semibold text-center">
                No Items In Cart. Shop Now.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
