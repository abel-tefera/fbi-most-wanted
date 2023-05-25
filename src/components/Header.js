import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="flex justify-center w-full bg-custom-blue-dark">
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

export default Header;
