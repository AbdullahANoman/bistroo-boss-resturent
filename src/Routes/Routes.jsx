import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Secret/Secret";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children : [
        {
            path : '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element : <Menu></Menu>
        },
        {
          path: 'shop/:category',
          element : <Order></Order>
        },
        {
          path: 'login',
          element : <Login></Login>
        },
        {
          path:'signUp',
          element: <SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path :'/dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path : 'cart',
        element: <MyCart></MyCart>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);

export default router;