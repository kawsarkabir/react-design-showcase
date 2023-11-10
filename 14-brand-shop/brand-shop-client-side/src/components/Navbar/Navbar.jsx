import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import "./Responsive.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <header className="max-w-screen-xl mx-auto">
        <div className="container">
          <nav>
            <div className="top-navbar">
              <ul>
                <li>Account</li>
                <li>Tract Order</li>
                <li>Support</li>
              </ul>
              <ul>
                <li className="flex gap-x-2">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                    alt=""
                    className="w-6"
                  />
                  <span>United State</span>
                </li>
                <li>
                  USD <i className="fa-solid fa-angle-down"></i>
                </li>
                <li>
                  Bangla <i className="fa-solid fa-angle-down"></i>
                </li>
              </ul>
            </div>
            <div className="middle-navbar">
              <div className="logo">
                <Link to={"/"}>
                  <img src="https://i.ibb.co/mXKTYxf/logo.png" alt="" />
                </Link>
              </div>
              <div className="search-bar">
                <div className="input-field">
                  <input type="text" placeholder="Search" />
                  <input type="text" placeholder="All Categories" />
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <button className="btn-orange">Search</button>
              </div>
              {/* add to cart here  */}
              <div className="lg:relative lg:left-20 z-10">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
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
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                  >
                    <div className="card-body">
                      <div className="card-actions">
                        <Link to={"/dashboard/mycart"}>
                          <button className="btn btn-warning px-12">
                            View cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="navbar-icon-menu">
                <div className="z-10">
                  {user ? (
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img src={user?.photoURL} />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a className="justify-between">{user.displayName}</a>
                        </li>

                        <li>
                          <Link to={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li onClick={handleSignOut}>
                          <Link>Logout</Link>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <Link to={"/login"}>
                      <button className="w-[150px] bg-[#FFBB18] h-[50px] my-3 flex items-center justify-center rounded font-bold  text-[#000] hidden lg:block">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
                {/* toogle icon here */}
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    onChange={handleToggle}
                    checked={theme === "light" ? false : true}
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-on fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-off fill-current w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <section className="main-navbar">
        <div className="container">
          <div className="main-navbar-wrapper">
            <div className="categories">
              <h4>
                <i className="fa-solid fa-bars"></i> All Categories
                <i className="fa-solid fa-angle-down"></i>
              </h4>
            </div>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active bg-black text-white py-3 px-8"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active  bg-black text-white py-3 px-8"
                      : ""
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active  bg-black text-white py-3 px-8"
                      : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            </ul>
            <Link to={"/register"}>
              <button className="seller-btn">
                Become a Seller <i className="fa-solid fa-angle-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
