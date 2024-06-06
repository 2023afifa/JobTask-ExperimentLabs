import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from './Components/Error/Error.jsx';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Homepage/Home/Home.jsx';
import DecorItems from './Components/DecorItems/DecorItems.jsx';


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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
