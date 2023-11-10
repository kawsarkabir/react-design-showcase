import { Outlet } from "react-router-dom";
import Navbar from "../Components/header/Navbar/Navbar";
import { useEffect } from "react";

const Layout = () => { 
    
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;