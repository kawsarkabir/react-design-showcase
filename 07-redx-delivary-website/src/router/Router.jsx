import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../Layout/Layout";
import EnterPrice from "../pages/enterprice/EnterPrice";
import Curier from "../pages/curier/Curier";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";

 

const Router = createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children:[
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/enterprice', 
                element: <EnterPrice></EnterPrice>
            }, 
            {
                path: '/curier', 
                element: <Curier></Curier>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register', 
                element: <Register></Register>
            }
        ]
    }
])

export default Router;