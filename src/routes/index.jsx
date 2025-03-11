import { createBrowserRouter } from "react-router-dom";
import Loading from "../pages/Loading/Loading";
import Home from "../pages/Home/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Loading />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ],
  {
    basename: "/", 
  }
);

export default router;
