import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user?.email) {
    return children;
  }
  if (loading) {
    return (
      <h1 className="text-7xl flex justify-center items-center bg-red-600">
        LOADING
      </h1>
    );
  }
  return <Navigate to={"/signin"}></Navigate>;
};

export default PrivateRoute;
