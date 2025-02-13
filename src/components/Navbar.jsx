import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navbar = (
    <>
      {/* Home */}
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-warning text-black"
              : isPending
              ? "pending"
              : "btn btn-outline btn-warning text-zinc-700"
          }
        >
          <span>Home</span>
        </NavLink>
      </li>

      {/* Available Cars */}
      <li>
        <NavLink
          to="/available-car"
          className={({ isActive, isPending }) =>
            isActive
              ? "btn btn-warning text-black"
              : isPending
              ? "pending"
              : "btn btn-outline btn-warning text-zinc-700"
          }
        >
          <span>Available Cars</span>
        </NavLink>
      </li>

      {/* Add Car */}
      {user?.email && (
        <li>
          <NavLink
            to="/add-car"
            className={({ isActive, isPending }) =>
              isActive
                ? "btn btn-warning text-black"
                : isPending
                ? "pending"
                : "btn btn-outline btn-warning text-zinc-700"
            }
          >
            <span>Add Car</span>
          </NavLink>
        </li>
      )}

      {/* My Car */}
      {user?.email && (
        <li>
          <NavLink
            to="/my-car"
            className={({ isActive, isPending }) =>
              isActive
                ? "btn btn-warning text-black"
                : isPending
                ? "pending"
                : "btn btn-outline btn-warning text-zinc-700"
            }
          >
            <span>My Car</span>
          </NavLink>
        </li>
      )}

      {/* My Bookings */}
      {user?.email && (
        <li>
          <NavLink
            to="/my-bookings"
            className={({ isActive, isPending }) =>
              isActive
                ? "btn btn-warning text-black"
                : isPending
                ? "pending"
                : "btn btn-outline btn-warning text-zinc-700"
            }
          >
            <span>My Bookings</span>
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = async () => {
    try {
      toast.success("Logout Successful");
      await logOut();
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      {/* Nav Left Side (navbar-start) */}
      <div className="navbar-start">
        {/* Mobile Devices */}
        <div className="dropdown">
          {/* Hamburger Menu */}
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          {/* Nav Link */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
          >
            {navbar}
          </ul>
        </div>

        {/* Title Logo */}
        <Link
          to={"/"}
          className="btn btn-ghost flex items-center justify-center"
        >
          <img className="w-7 h-7" src="/car-rental.png" alt="logo" />
          <span className="font-bold text-xl">Car Rent</span>
        </Link>
      </div>

      {/* Navbar Middle Side (navbar-center hidden lg:flex)*/}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navbar}</ul>
      </div>

      {/* NavBar End */}
      <div className="navbar-end">
        {!user?.email && (
          <Link to={"/login"} className="btn btn-warning">
            Login
          </Link>
        )}

        {user?.email && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL}
                  alt="User Profile"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div className="flex items-center justify-center py-2">
                <p className="font-semibold">
                  Welcome:{" "}
                  <span className="italic font-bold text-blue-500">
                    {user?.displayName}
                  </span>
                </p>
              </div>
              {/* LogOut */}
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
