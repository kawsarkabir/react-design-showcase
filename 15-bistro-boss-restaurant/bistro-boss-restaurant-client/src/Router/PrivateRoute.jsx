import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <Spinner className="flex justify-center items-center text-6xl"></Spinner>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/signin"}></Navigate>;
};

export default PrivateRoute;
