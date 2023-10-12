import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <div className="font-barlow">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer/>
    </div>
  );
};

export default Layout;
