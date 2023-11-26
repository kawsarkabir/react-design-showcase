import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import Review from "../Pages/Dashboard/Review/Review";
import MyBooking from "../Pages/Dashboard/MyBooking/MyBooking";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
        path: '/order/:category', 
        element: <PrivateRoute><Order></Order></PrivateRoute>
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
  {
    path: '/dashboard', 
    element: <Dashboard></Dashboard>,
    children:[
      {
        path: 'cart', 
        element: <Cart></Cart>
      },
      {
        path: 'userHome', 
        element: <UserHome></UserHome>
      }, 
      {
        path: 'reservation', 
        element: <Reservation></Reservation>
      },
      {
        path: 'review', 
        element: <Review></Review>
      }, 
      {
        path: 'myBooking', 
        element: <MyBooking></MyBooking>
      }, 
      {
        path: 'paymentHistory', 
        element: <PaymentHistory></PaymentHistory>
      }
    ]
  }
]);

export default Router;
