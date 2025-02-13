import { createBrowserRouter } from 'react-router-dom';
import HomeLaylout from '../layouts/HomeLaylout';
import ErrorPage from './error-page';
import AvailableCar from '../page/AvailableCar';
import Login from '../page/authentication/Login';
import Register from '../page/authentication/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLaylout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/available-car",
        element: <AvailableCar />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Register />
  }
]);

export default router;
