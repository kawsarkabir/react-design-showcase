import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import Register from "../pages/Register.jsx/Register";

import EventDetails from "../components/Event/EventDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Profile from "../components/Profile/Profile";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/eventDetails/:id",
        element: <PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>,
        loader: ( )=> fetch("/services.json"),
       },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ],
  },
]);

export default Router;
