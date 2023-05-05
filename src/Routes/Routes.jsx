import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Books from "../pages/Books/Books";
import Blogs from "../pages/Blogs/Blogs";
import Main from "../Layouts/Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../components/Terms";
import Hadith from "../components/Hadith";

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
        path: "/hadith",
        element: <Hadith />,
        loader: ({ params }) =>
          fetch(`https://alquranbd.com/api/hadith/${params}`),
      },
      {
        path: "/books",
        element: (
          <PrivateRoute>
            <Books />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms",
        element: <Terms />,
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
  {
    path: "hadith",
    element: <Home />,
    children: [],
  },
]);

export default router;
