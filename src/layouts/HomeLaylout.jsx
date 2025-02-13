import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLaylout = () => {
  return (
    <div className='font-montserrat'>
      {/* Navbar */}
      <Navbar />
      {/* Outlet n-65px f-180px */}
      <div className='min-h-[calc(100vh-245px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeLaylout;
