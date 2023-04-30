import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
  BookOpenIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="lg:bg-neutral ">
      <div className="relative flex items-center justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <BookOpenIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            Muslim Site
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-10 font-semibold lg:flex duration-500 ">
          <li>
            <NavLink
              to="/"
              title="Home Link"
              className={({ isActive }) =>
                isActive ? "text-green-300 underline" : "text-slate-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? "text-green-300 underline" : "text-slate-500"
              }
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-300 underline" : "text-slate-500"
              }
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-green-300 underline" : "text-slate-500"
              }
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-2">
          {user && (
            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          )}

          <div>
            {user ? (
              <button className="px-3 rounded bg-slate-500 text-white">
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BoltIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 " />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/books"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
