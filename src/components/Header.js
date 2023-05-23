import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="flex flex-row justify-between py-12">
      <div>FBI Watch List</div>
    </nav>
    <Outlet />
  </>
);

export default Header;
