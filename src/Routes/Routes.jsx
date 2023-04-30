import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Books from "../pages/Books/Books";
import Blogs from "../pages/Blogs/Blogs";
import Main from "../Layouts/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      // {
      //   path: "/shop",
      //   element: <Shop />,
      // },
      // {
      //   path: "/cart",
      //   element: <Cart />,
      // },
    ],
  },
]);

export default router;
