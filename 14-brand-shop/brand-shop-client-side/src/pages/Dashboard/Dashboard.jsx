import { Link, Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-20 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="userInfo border-2 border-[#FFBB38]">
          <div className="flex flex-col gap-6">
            <ul className="menu menu-vertical">
              <li>
                <details>
                  <summary>Products</summary>
                  <ul className="p-2">
                    <li>
                      <Link to={"/dashboard/allproduct"}>All Product</Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/addproduct"}>Add Product</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Brand</summary>
                  <ul className="p-2">
                    <li>
                      <Link to={"/dashboard/allbrand"}>All Brand</Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/addbrand"}>Add New Brand</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Product Base Slider</summary>
                  <ul className="p-2">
                    <li>
                      <Link to={"/dashboard/allproductbaseslider"}>All Slider</Link>
                    </li>
                    <li>
                      <Link to={"/dashboard/addproductbaseslider"}>Add New Slider</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to={"/dashboard/mycart"}>My Cart</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboard-content border-2 border-[#FFBB38] col-span-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
