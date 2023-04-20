import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("UserDetails"));
  const userLoggedIn = localStorage.getItem("UserLoggedIn");

  console.log("hitted here");

  if (!user || !user.email || !user.name || userLoggedIn !== "true") {
    toast.info("Please Login To Continue");
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRoute;
