import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Layout from "../Layout";
import Learn from "../Components/Learn";
import Lesson from "../Components/Lesson";
import PrivetRouter from "./PrivetRouter";
import Tutorials from "../Components/Tutorials";
import Profile from "../Components/Profile";
import About from "../Components/About";
import Error from "../Components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "start-learning",
        element: <Learn></Learn>,
      },
      {
        path: "lesson/:numb",
        element: (
          <PrivetRouter>
            <Lesson></Lesson>
          </PrivetRouter>
        ),
      },
      {
        path: "tutorials",
        element: (
          <PrivetRouter>
            <Tutorials></Tutorials>
          </PrivetRouter>
        ),
      },
      {
        path: "my-profiles",
        element: (
          <PrivetRouter>
            <Profile></Profile>
          </PrivetRouter>
        ),
      },
      {
        path: "about-us",
        element: <About></About>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
export default router;
