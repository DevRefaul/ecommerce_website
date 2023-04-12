import React, { useEffect, useState } from "react";
import { api } from "../../Utils/Api";
import { toast } from "react-toastify";
import TransParentLoadingScene from "../../Components/LoadingScene/TransParentLoadingScene";
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [userRole, setUserRole] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("UserDetails"));

  useEffect(() => {
    if (!user.email) {
      return navigate("/login");
    }

    setLoading(true);
    fetch(`${api}/getuserdata?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200 && data.userData._id) {
          const user = data.userData;
          setUserRole(user.role);
        } else {
          toast.error(data.message);
        }
        setLoading(false);
      });
  }, [user.email]);

  if (loading) {
    return <TransParentLoadingScene />;
  }

  if (userRole !== "admin") {
    toast.error("Unauthorizedd Access");
    return navigate("/");
  }

  return children;
};

export default AdminRoute;
