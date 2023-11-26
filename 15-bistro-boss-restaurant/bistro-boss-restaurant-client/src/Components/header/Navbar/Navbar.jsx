import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => console.log(err));
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#DB6A00] " : ""
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#DB6A00] " : ""
          }
        >
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#DB6A00] " : ""
          }
        >
          ORDER
        </NavLink>
      </li>
      <li>
        <div className="flex-none">
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
                <span className="badge badge-sm indicator-item">
                  {cart?.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{cart?.length} Items</span>
                <span className="text-info text-lg">Subtotal: {totalPrice}</span>
                <div className="card-actions">
                  <Link
                    to="/dashboard/cart"
                    className="btn btn-primary btn-block"
                  >
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="photo" src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">{user.displayName}</Link>
              </li>
              <li>
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#DB6A00]" : ""
              }
            >
              SIGN IN
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=" bg-base-100 ">
      <div className="navbar  max-w-screen-xl mx-auto">
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
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <h4 className="text-sm font-bold">
              <img
                src="https://i.ibb.co/0c1xKsb/logo.png"
                alt=""
                className="w-14"
              />
            </h4>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal px-1 items-center">{navLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
