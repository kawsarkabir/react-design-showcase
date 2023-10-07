 
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const Routes =  createBrowserRouter([
    {
        path: '/', 
        element: <Layout></Layout>, 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }
            , {
                path: '/register', 
                element: <Register></Register>
            }
        ]
    }
])

export default Routes;