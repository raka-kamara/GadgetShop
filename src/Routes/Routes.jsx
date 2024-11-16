import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import ContactUs from "../Pages/ContactUs";
import About from "../Pages/About";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/products",
          element:<Products/>,
        },
        {
          path:"/contact-us",
          element:<ContactUs/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
      ]
    },
  ]);

