import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import About from "../pages/Home/About/About";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
          path: 'signup',
          element: <SingUp></SingUp>
        }
      ]
    },
  ]);

  export default router;