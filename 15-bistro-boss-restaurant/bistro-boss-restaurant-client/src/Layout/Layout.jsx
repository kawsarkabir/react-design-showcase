import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/header/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";

const Layout = () => {
  const location = useLocation()
  const isSignin = location.pathname.includes('signin')
   return (
    <div>
      { isSignin || <Navbar></Navbar>}
      <Outlet></Outlet>
      {isSignin || <Footer></Footer>}
    </div>
  );
};

export default Layout;
