import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-gray-50 p-4 flex justify-between items-center">
      <div className="text-2xl">JobSearch</div>
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/login" className="hover:text-gray-400">Sign In</Link>
        <Link to="/register" className="hover:text-gray-400">Sign Up</Link>
        <Link to="/profile" className="hover:text-gray-400">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
