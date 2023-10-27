import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home/Home";

import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import MyCart from "../pages/myCart/MyCart";

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
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: '/checkout/:id', 
        element: <CheckOut></CheckOut>,
        loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      }, 
      {
        path:'/mycart', 
        element: <MyCart></MyCart>,
      }
    ],
  },
]);

export default Router;
