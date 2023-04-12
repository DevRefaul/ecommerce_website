import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("UserDetails"));
  const userLoggedIn = localStorage.getItem("UserLoggedIn");

  if (!user.email && !user.name && userLoggedIn !== "true") {
    toast.info("Please Login To Continue");
    return navigate("/login");
  }

  return children;
};

export default PrivateRoute;
