import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import userImg from "../../../Assets/user.png";
import TransParentLoadingScene from "../../../Components/LoadingScene/TransParentLoadingScene";
import { api } from "../../../Utils/Api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState("");
  const [reloadUserData, setReloadUserData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    return () => getUserData();
  }, [reloadUserData]);

  const userDetails = JSON.parse(localStorage.getItem("UserDetails"));
  if (!userDetails) {
    navigate("/login");
  }

  // react query for fetching dat of user orders
  const { isLoading, data } = useQuery(["email"], async () => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));
    return fetch(`${api}/userorders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => data);
  });

  // function for getting user info on page render
  const getUserData = () => {
    const userDetails = JSON.parse(localStorage.getItem("UserDetails"));
    const userMail = userDetails?.email;

    if (userMail) {
      setLoading(true);
      fetch(`${api}/getuserdata?email=${userMail}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200 && data.userData._id) {
            const user = data.userData;
            setUserData(user);
            setLoading(false);
          } else {
            toast.error(data.message);
          }
        });
    }
  };

  // function for clicking input file for choosing image
  const handleClickInputFile = () => {
    const inputFile = document.getElementById("image");
    inputFile.click();
  };

  // function triggered when input file is changed to get file data
  const handleGetImageData = () => {
    const fileData = document.getElementById("image").files[0];
    console.log(fileData);
  };

  // function for updating userInfo
  const handleUpdateUserInfo = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    if (!name || !email || !phone || !address) {
      return toast.info("Please Fill All The Fields");
    }

    // writing this because flowbite modal is shwoing problem
    const modal = document.getElementById("staticModal");
    modal.classList.remove("hidden");
    modal.classList.add("flex", "justify-center");

    // document.getElementById("modalId").click();
  };

  // function for closing modal
  const hideModal = () => {
    const modal = document.getElementById("staticModal");
    modal.classList.add("hidden");
  };

  // function for proceeding after entering password on updating user info
  const handleProccedOnPassword = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    if (password) {
      // hidding modal before fetching data
      const modal = document.getElementById("staticModal");
      modal.classList.add("hidden");
      // hidding modal before fetching data
      setLoading(true);
      fetch(
        `${api}/matchpassword?email=${
          document.getElementById("email").value
        }&pass=${password}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.status !== 200 && data.userFound !== true) {
            document.getElementById("password").value = "";
            setLoading(false);
            return toast.error("Password Didn't Matched");
          } else if (data.status === 200 && data.userFound === true) {
            handleUpdateUser(name, email, phone, address);
          } else {
            setLoading(false);
            return toast.error(
              "An Error Occured While Updating. Please Try Later"
            );
          }
        });
    } else {
      return toast.error("Enter The Password");
    }
  };

  // function that will work for api call for updating user info
  const handleUpdateUser = (name, email, phone, address) => {
    fetch(`${api}/updateuserinfo`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, address }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.userUpdated) {
          toast.success("Successfully Updated User Info");
          setReloadUserData(true);
        }
        setLoading(false);
        return data;
      });
  };

  // loader scene when function wills work for api calls
  if (loading || isLoading) {
    return <TransParentLoadingScene />;
  }

  return (
    <section className=" bg-orange-50 -mt-2">
      <ToastContainer />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr,2fr] xl:grid-cols-[1fr,3fr] gap-4 py-6">
        {/* user logo and other staffs */}
        <div className="p-12 bg-white border border-orange-500 rounded">
          {/* user image */}
          <div className="flex justify-center items-center">
            <img
              src={userImg}
              alt="user logo"
              className="rounded-full border border-orange-500 h-14 w-14"
            />
          </div>
          {/* image uploading section */}
          <div className="my-4  flex justify-center">
            <input
              type="file"
              name="image"
              id="image"
              className="hidden"
              onChange={handleGetImageData}
            />
            <button
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded text-sm px-2 py-1 text-center mr-2 mb-2"
              onClick={handleClickInputFile}
            >
              Update Image
            </button>
          </div>

          {/* basic user info */}
          <div className="my-4">
            <h4 className="text-lg font-semibold">Name : {userData?.name}</h4>
            <p className="font-medium my-2">Email : {userData?.email}</p>
            <p className="font-medium my-2">Phone : {userData?.phone}</p>
            <p className="font-medium my-2">Address : {userData?.address}</p>
          </div>
        </div>
        {/* user personal information here */}
        <div className="p-12">
          <h4 className="text-2xl font-semibold text-orange-500 mb-4">
            Personal Information
          </h4>
          <p className="my-6">
            Manage your personal information icluding your phone number, address
            and name . So that you can be contacted. <br />
            !!! Please note that Email can not be changed
          </p>

          {/* user info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white px-6 py-12 border border-orange-500 rounded">
            {/* user name */}
            <div className="lg:flex justify-between items-center">
              <label htmlFor="name" className="inline-block w-[110px]">
                Name :
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded w-full"
                defaultValue={userData?.name}
              />
            </div>

            {/* user email */}
            <div className="lg:flex justify-between items-center">
              <label htmlFor="email" className="inline-block w-[110px]">
                Email :
              </label>
              <input
                type="email"
                name="email"
                id="email"
                disabled
                className="rounded w-full bg-orange-50"
                defaultValue={userData?.email}
              />
            </div>

            {/* user phone */}
            <div className="lg:flex justify-between items-center">
              <label htmlFor="phone" className="inline-block w-[110px]">
                Phone :
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="rounded w-full"
                defaultValue={userData?.phone}
              />
            </div>

            {/* user address */}
            <div className="lg:flex justify-between items-center">
              <label htmlFor="address" className="inline-block w-[110px]">
                Address :
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="rounded w-full"
                defaultValue={userData?.address}
              />
            </div>
          </div>
          <div className="flex justify-center my-4">
            <button
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleUpdateUserInfo}
            >
              Update Information
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10">
        <h4 className="text-2xl font-medium py-4 text-center">
          Your Orders History
        </h4>

        {data.orders.length ? (
          <>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-orange-400 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payment
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.orders.map((orders) =>
                    orders.cartItemsData.map((items) => (
                      <tr
                        key={items._id}
                        className="bg-white border dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4 font-semibold uppercase">
                          {items.name}
                        </td>
                        <td className="px-6 py-4">{items.price}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`${
                              orders.payment === "PAID"
                                ? "bg-green-500"
                                : "bg-orange-500"
                            }  text-white p-2 w-24 inline-block text-center`}
                          >
                            {orders.payment}
                          </span>
                        </td>
                        <td className="px-6 py-4">{items.quantity}</td>
                        <td className="px-6 py-4">{orders.status}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <p className="text-center my-6 font-semibold">{data.message}</p>
        )}
      </div>

      {/* modal for confirming password */}

      {/* <!-- Main modal --> */}
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full bg-[rgba(0,0,0,0.5)] p-4 i overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
        style={{ alignItems: "start" }}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white border-2 border-orange-500 rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Enter Password Before Proceed
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="staticModal"
                onClick={() => {
                  hideModal();
                  return toast.error("Failed To Update Info");
                }}
              >
                <svg
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
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <div className="lg:flex justify-between items-center">
                <label htmlFor="password" className="inline-block w-[110px]">
                  Password :
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="rounded w-full"
                />
              </div>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="staticModal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleProccedOnPassword}
              >
                Proceed
              </button>
              <button
                data-modal-hide="staticModal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={() => {
                  hideModal();
                  return toast.error("Failed To Update Info");
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
