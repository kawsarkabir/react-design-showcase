import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex p-2">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400 rounded-l-2xl p-10">
        <ul>
          {isAdmin ? (
            <>
              <li className="my-5">
                <NavLink
                  className="bg-black p-2 px-6 rounded-lg text-orange-500 "
                  to="/dashboard/adminHome"
                >
                  <i className="fa-solid fa-house"></i> Admin Home
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink
                  className="bg-black py-2 px-9 rounded-lg text-orange-500 "
                  to="/dashboard/addItem"
                >
                  <i className="fa-solid fa-calendar"></i> Add Items
                </NavLink>
              </li>    
              <li className="my-5">
                <NavLink
                  className="bg-black py-2 px-5 rounded-lg text-orange-500 "
                  to="/dashboard/managesItem"
                >
                  <i className="fa-solid fa-calendar"></i> Manages Item
                </NavLink>
              </li>           
              <li className="my-5">
                <NavLink
                  className="bg-black py-2 px-1 rounded-lg text-orange-500 "
                  to="/dashboard/managesBooking"
                >
                  <i className="fa-solid fa-list"></i> Manages Bookings
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink
                  className="bg-black py-2 px-11 rounded-lg text-orange-500 "
                  to="/dashboard/users"
                >
                  <i className="fa-solid fa-credit-card"></i> all User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="my-5">
                <NavLink
                  className="bg-black p-2 px-7 rounded-lg text-orange-500 "
                  to="/dashboard/userHome"
                >
                  <i className="fa-solid fa-house"></i> User Home
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink
                  className="bg-black py-2 px-6 rounded-lg text-orange-500 "
                  to="/dashboard/reservation"
                >
                  <i className="fa-solid fa-calendar"></i> Reservations
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink
                  className="bg-black py-2 px-10 rounded-lg text-orange-500 "
                  to="/dashboard/cart"
                >
                  <i className="fa-solid fa-cart-shopping"></i> My Cart
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink
                  className="bg-black py-2 px-6 rounded-lg text-orange-500 "
                  to="/dashboard/review"
                >
                  <i className="fa-solid fa-rectangle-ad"></i> Add Reviews
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink
                  className="bg-black py-2 px-7 rounded-lg text-orange-500 "
                  to="/dashboard/myBooking"
                >
                  <i className="fa-solid fa-list"></i> My Booking
                </NavLink>
              </li>
              <li className="my-5">
                <NavLink
                  className="bg-black py-2 px-2 rounded-lg text-orange-500 "
                  to="/dashboard/paymentHistory"
                >
                  <i className="fa-solid fa-credit-card"></i> Payment History
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li className="my-5">
            <NavLink
              className="bg-black py-2 px-12 rounded-lg text-orange-500 "
              to="/"
            >
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink
              className="bg-black py-2 px-12 rounded-lg text-orange-500 "
              to="/menu"
            >
              <i className="fa-solid fa-list"></i> Menu
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink
              className="bg-black py-2 px-12 rounded-lg text-orange-500 "
              to="/order/salad"
            >
              <i className="fa-solid fa-pen-to-square"></i> Order
            </NavLink>
          </li>
        </ul>
      </div>
      {/* bashboard content here */}
      <div className="flex-1 bg-orange-100 pt-5 px-5 rounded-r-2xl">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
