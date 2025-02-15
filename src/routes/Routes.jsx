import { createBrowserRouter } from 'react-router-dom';
import HomeLaylout from '../layouts/HomeLaylout';
import ErrorPage from './error-page';
import AvailableCar from '../page/AvailableCar';
import Login from '../page/authentication/Login';
import Register from '../page/authentication/Register';
import PrivateRoutes from './PrivateRoutes';
import AddCar from '../page/AddCar';
import MyCar from '../page/MyCar';
import MyBookings from '../page/MyBookings';
import Home from '../page/Home';
import AvailAbleCarDetails from '../page/AvailAbleCarDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLaylout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: '/',
        element: <Home />,
      },
      {
        path: '/available-car',
        element: <AvailableCar />,
      },
      {
        path: '/available-car/:id',
        element: (
          <PrivateRoutes>
            <AvailAbleCarDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: '/add-car',
        element: (
          <PrivateRoutes>
            <AddCar />
          </PrivateRoutes>
        ),
      },
      {
        path: '/my-car',
        element: (
          <PrivateRoutes>
            <MyCar />
          </PrivateRoutes>
        ),
      },
      {
        path: '/my-bookings',
        element: (
          <PrivateRoutes>
            <MyBookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
]);

export default router;

/*
siddiqur_rahman@yahoo.com
Siddiq@1234
https://cdn.kwork.com/files/portfolio/t3/24/a5bf8465becd2274bd38894122c7020e96115673-1711803733.jpg
*/

/*
turag_ahmed@gmail.com
Turag@1234
https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/669726e7b6388b54f9aa2769_66553f0390479b8e5a3fc524_image_CMEex1C1_1716770910814_raw.jpeg
*/
