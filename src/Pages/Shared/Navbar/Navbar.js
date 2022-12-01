import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../components/contexts/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/products">All Products</Link>
      </li>

      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              {user?.uid ? (
                <li>
                  <Link onClick={logOut}>Logout</Link>
                </li>
              ) : (
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              )}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-2xl font-bold text-sky-600"
          >
            Old Store
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          <ul className="menu menu-horizontal p-0">
            {user?.uid ? (
              <li>
                <Link onClick={logOut}>Logout</Link>
              </li>
            ) : (
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            )}
            {user?.photoURL ? (
              <li>
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user?.photoURL} alt="user" />
                  </div>
                </div>
              </li>
            ) : (
              <li>
                <Link to="/">
                  <FaUser></FaUser>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
