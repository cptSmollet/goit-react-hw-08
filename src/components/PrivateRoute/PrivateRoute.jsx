import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectTo = "/login" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? <Component /> : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
