import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Layout from "../Layout";
import Learn from "../Components/Learn";
import Lesson from "../Components/Lesson";
import PrivetRouter from "./PrivetRouter";
import Tutorials from "../Components/Tutorials";

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
        element: <Tutorials></Tutorials>,
      },
    ],
  },
]);
export default router;
