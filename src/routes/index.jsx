import Loading from '../pages/Loading/Loading';
import Home from '../pages/Home/Home';
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Loading />,
    },
    {
        path: '/home',
        element: <Home />
    }
],
    {
        basename: "/Music-Web/"
    }
);

export default Router;