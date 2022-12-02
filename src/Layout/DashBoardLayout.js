import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashBoardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content lg:mt-24">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard" className="text-primary font-bold">
                My Orders
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myWishList"
                className="text-primary font-bold"
              >
                My Wishlist
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myProducts"
                className="text-primary font-bold"
              >
                My Products
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/orderForm"
                className="text-primary font-bold"
              >
                Add a product
              </Link>
            </li>
            <li>
              <Link to="" className="text-primary font-bold">
                My Advertise
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
