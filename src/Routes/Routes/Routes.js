import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../../Layout/DashBoardLayout';
import Main from '../../Layout/Main';
import PageNotFound from '../../Pages/404/404';
import About from '../../Pages/About/About';
import Login from '../../Pages/Authentications/Login/Login';
import SignUp from '../../Pages/Authentications/SignUp/SignUp';
import Blog from '../../Pages/Blog/Blog';
import Categories from '../../Pages/Categories/Categories';
import MyWishList from '../../Pages/Dashboard/Dashboard/MyWishList/MyWishList';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts';
import Home from '../../Pages/Home/Home/Home';
import OrderForm from '../../Pages/OrderForm/OrderForm';
import Products from '../../Pages/Products/Products';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/products',
        element: <Products></Products>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: '/dashboard',
        element: <MyOrders></MyOrders>,
      },
      {
        path: '/dashboard/orderForm',
        element: <OrderForm></OrderForm>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      {
        path: '/dashboard/myWishList',
        element: <MyWishList></MyWishList>,
      },
      {
        path: '/dashboard/myProducts',
        element: <MyProducts></MyProducts>,
      },
    ],
  },
]);
