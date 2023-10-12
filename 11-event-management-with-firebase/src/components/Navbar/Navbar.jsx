import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const navLinks = (
    <>
      <li className="text-lg">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="text-lg">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li className="text-lg">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500" : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-screen-xl mx-auto py-0 px-10 lg:px-0">
      <div className="navbar-start flex-row-reverse lg:flex-row">
        <div className="dropdown">
          
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden relative left-48"
          >
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
        <Link to={`/`}>
          <img src="https://i.ibb.co/r2b47gm/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ml-auto">
        <ul className="menu menu-horizontal px-1 mr-20">{navLinks}</ul>
      </div>
      <div>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  {user.displayName}
                
                </a>
              </li>
              <li>
                <Link to={'/profile'}>Profile</Link>
              </li>
              <li>
                <Link to={'/dashboard'}>Dashboard</Link>
              </li>
              <li onClick={handleSignOut}>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={"/login"}>
            <button className="w-[150px] bg-[#ce1446] h-[50px] my-3 flex items-center justify-center rounded font-bold  text-[#fff] hidden lg:block">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
