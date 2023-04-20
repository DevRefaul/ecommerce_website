import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("UserDetails"));
  const userLoggedIn = localStorage.getItem("UserLoggedIn");


  if (!user || !user.email || !user.name || userLoggedIn !== "true") {
    toast.info("Please Login To Continue");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
