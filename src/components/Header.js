import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <>
      <nav
        aria-controls="accordion-arrow-icon-body-1"
        className="flex justify-center w-full bg-custom-blue-dark font-lato items-center"
      >
        {location.pathname !== '/' && (
          <NavLink to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-4 h-4 absolute md:ml-16"
              style={{ top: '2px', left: '2px' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </NavLink>
        )}
        <p className="text-sm font-semibold italic text-white">
          Fidelity, Bravery, Integrity
        </p>
      </nav>
      <Outlet />
      <footer className="flex w-full bg-custom-blue-dark justify-center">
        <p className="text-sm font-semibold text-white">Built by Abel</p>
      </footer>
    </>
  );
};

export default Header;
