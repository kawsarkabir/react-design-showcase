import { Outlet } from "react-router-dom";
import Navbar from "../Components/header/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
