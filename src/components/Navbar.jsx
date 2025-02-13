import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbar = (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-warning text-black'
              : isPending
              ? 'pending'
              : 'btn btn-outline btn-warning text-gray-500'
          }
        >
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/available-car'
          className={({ isActive, isPending }) =>
            isActive
              ? 'btn btn-warning text-black'
              : isPending
              ? 'pending'
              : 'btn btn-outline btn-warning text-gray-500'
          }
        >
          <span>Available Cars</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className='navbar bg-base-100 shadow-sm container mx-auto'>
      {/* Nav Left Side (navbar-start) */}
      <div className='navbar-start'>
        {/* Mobile Devices */}
        <div className='dropdown'>
          {/* Hamburger Menu */}
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>

          {/* Nav Link */}
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2'
          >
            {navbar}
          </ul>
        </div>

        {/* Title Logo */}
        <Link
          to={'/'}
          className='btn btn-ghost flex items-center justify-center'
        >
          <img className='w-7 h-7' src='/car-rental.png' alt='logo' />
          <span className='font-bold text-xl'>Car Rent</span>
        </Link>
      </div>

      {/* Navbar Middle Side (navbar-center hidden lg:flex)*/}
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 space-x-2'>{navbar}</ul>
      </div>

      {/* NavBar End */}
      <div className='navbar-end'>
        <Link to={"/login"} className='btn btn-warning'>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
