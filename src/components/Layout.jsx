import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children, showNavbar = true }) => {
  return (
    <div>
      {showNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;