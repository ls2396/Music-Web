import Home from '../pages/Home/Home';
import Songs from '../pages/Songs/Songs';
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/songs',
        element: <Songs />
    }
]);

export default Router;