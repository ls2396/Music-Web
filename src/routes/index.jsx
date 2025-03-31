import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading/Loading";
import Home from "../pages/Home/Home";

const hasVisited = localStorage.getItem("hasVisited");

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: hasVisited ? <Home /> : <Loading />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ],
  {
    basename: "/Music-Web", 
  }
);

export default router;
