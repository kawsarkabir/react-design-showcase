import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Home/Login";
import Register from "../pages/Register/Register";
import NewsDetails from "../pages/Home/NewsDetails";
import PrivateRouters from "./PrivateRouters";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/news.json')
            },
            {
                path: '/login', 
                element: <Login></Login>
            },
            {
                path: '/register', 
                element: <Register></Register>
            },
            {
                path: '/singleNews/:id', 
                element: <PrivateRouters><NewsDetails></NewsDetails></PrivateRouters>
            }
        ]
    }    
]);

export default router;