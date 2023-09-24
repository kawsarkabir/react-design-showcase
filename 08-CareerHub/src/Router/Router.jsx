import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Statistics from '../Pages/Statistics/Statistics';
import AppliedJob from '../Pages/AppliedJob/AppliedJob';
import Blogs from '../Pages/Blogs/Blogs';

const Router =  createBrowserRouter([
    {
        path: '/', 
        element: <Layout/>, 
        children: [
            {
                path: '/', 
                element: <Statistics/>
            }, 
            {
                path: '/appliedjob', 
                element: <AppliedJob/>
            }, 
            {
                path: '/blogs', 
                element: <Blogs/>
            }
        ]
    }
])

export default Router;