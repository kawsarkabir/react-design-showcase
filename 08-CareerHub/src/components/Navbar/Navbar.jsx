import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="flex justify-between gap-4 px-10 mt-8">
        <div>
          <h1 className="text-3xl font-semibold">CareerHub</h1>
        </div>
        <nav>
          <ul className=" gap-x-5 flex">
            <NavLink to="/">Statistics</NavLink>
            <NavLink to="/appliedjob">Applied Job</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
          </ul>
        </nav>
        <div>
          <button className="btn bg-purple-500 text-white  rounded-lg">Start Applying</button>
        </div>
      </div>
    );
};

export default Navbar;