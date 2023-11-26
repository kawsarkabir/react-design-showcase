import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex p-5 ">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-full bg-orange-400 rounded-l-2xl p-10">
        <ul>
          <li className="my-5">
            <NavLink
              className="bg-black p-2 px-8 rounded-lg text-orange-500 "
              to="/dashboard/userHome"
            >
              User Home
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink
              className="bg-black py-2 px-6 rounded-lg text-orange-500 "
              to="/dashboard/reservation"
            >
              Reservations
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink
              className="bg-black py-2 px-11 rounded-lg text-orange-500 "
              to="/dashboard/cart"
            >
              My Cart
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink
              className="bg-black py-2 px-10 rounded-lg text-orange-500 "
              to="/dashboard/review"
            >
              Reviews
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink
              className="bg-black py-2 px-7 rounded-lg text-orange-500 "
              to="/dashboard/myBooking"
            >
              My Booking
            </NavLink>
          </li>
          <li className="my-5">
            <NavLink
              className="bg-black py-2 px-3 rounded-lg text-orange-500 "
              to="/dashboard/paymentHistory"
            >
              Payment History
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
