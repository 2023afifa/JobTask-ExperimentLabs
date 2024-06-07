import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Components/Error/Error.jsx';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Homepage/Home/Home.jsx';
import DecorItems from './Components/DecorItems/DecorItems.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Signup from './Components/Signup/Signup.jsx';
import Login from './Components/Login/Login.jsx';
import Carts from './Components/Carts/Carts.jsx';
import PrivateRoute from "./Components/Routes/PrivateRoute.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/items",
        element: <DecorItems></DecorItems>,
      },
      {
        path: "/carts",
        element: <PrivateRoute><Carts></Carts></PrivateRoute>,
        loader: () => fetch("https://homedecorserver.vercel.app/carts"),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
