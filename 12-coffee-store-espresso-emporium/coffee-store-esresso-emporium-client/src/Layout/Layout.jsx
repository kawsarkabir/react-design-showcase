import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

 
const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;