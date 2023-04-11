import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import Header from "../Components/Shared/Navbar/Header";
import { api } from "../Utils/Api";
import TransParentLoadingScene from "../Components/LoadingScene/TransParentLoadingScene";

const Root = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("UserDetails"));
    const userMail = userDetails?.email;

    if (userMail) {
      setLoading(true);
      fetch(`${api}/getuserdata?email=${userMail}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200 && data.userData._id) {
            const user = data.userData;
            setUser(user);
            setLoading(false);
          } else {
            return;
          }
        });
    }
  }, []);

  // loader scene when function wills work for api calls
  if (loading) {
    return <TransParentLoadingScene />;
  }

  return (
    <>
      <Header user={user} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
