import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/menu', 
        element: <Menu></Menu>
      },
      {
        path: '/order', 
        element: <Order></Order>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: '/signup', 
        element: <SignUp></SignUp>
      },
    ],
  },
]);

export default Router;
