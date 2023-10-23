import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signin"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Sign In
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signup"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Sign Up
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto px-6 py-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"}>
          <img
            src="https://i.ibb.co/XssN0CN/logo.png"
            alt=""
            className="w-16"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline text-[#FF3818] py-0">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default Navbar;
