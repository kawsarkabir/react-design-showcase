import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouters = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  console.log(location);

  if(loading){
    return <span className="loading loading-dots loading-lg flex justify-center items-center bg-red-400"></span>
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={`/login`}></Navigate>;
};

export default PrivateRouters;
