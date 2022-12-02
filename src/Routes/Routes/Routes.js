import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Login from "../../Pages/Authentications/Login/Login";
import SignUp from "../../Pages/Authentications/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Categories/Categories";
import CatOne from "../../Pages/Categories/CatOne/CatOne";
import CatThree from "../../Pages/Categories/CatThree/CatThree";
import CatTwo from "../../Pages/Categories/CatTwo/CatTwo";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import OrderForm from "../../Pages/OrderForm/OrderForm";
import Products from "../../Pages/Products/Products";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/orderForm",
        element: <OrderForm></OrderForm>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: "/cat1",
        element: (
          <PrivateRoute>
            <CatOne></CatOne>,
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/product/1`),
      },
      {
        path: "cat2",
        element: (
          <PrivateRoute>
            <CatTwo></CatTwo>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/product/2`),
      },
      {
        path: "cat3",
        element: (
          <PrivateRoute>
            <CatThree></CatThree>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/product/3`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);
