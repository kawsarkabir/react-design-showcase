import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="navbar-start flex-row-reverse lg:flex-row">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden relative left-44">
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
              <li>
                <NavLink
                  style={{ fontSize: "19px" }}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "underline text-red-500"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to={`/`}
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ fontSize: "19px" }}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "underline text-red-500"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to={`/donation`}
                  href="#"
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={{ fontSize: "19px" }}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "underline text-red-500"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to={`/statistics`}
                  href="#"
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
          <Link href="#" className="flex items-center">
            <img
              src="https://i.ibb.co/kQsgggy/Logo.png"
              className="h-10 mr-3"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                style={{ fontSize: "19px" }}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "underline text-red-500"
                    : isPending
                    ? "pending"
                    : ""
                }
                to={`/`}
                href="#"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ fontSize: "19px" }}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "underline text-red-500"
                    : isPending
                    ? "pending"
                    : ""
                }
                to={`/donation`}
                href="#"
              >
                Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ fontSize: "19px" }}
                className={({ isActive, isPending }) =>
                  isActive
                    ? "underline text-red-500"
                    : isPending
                    ? "pending"
                    : ""
                }
                to={`/statistics`}
                href="#"
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
