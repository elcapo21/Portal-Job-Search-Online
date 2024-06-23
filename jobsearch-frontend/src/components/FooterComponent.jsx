import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-50 p-4 mt-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg">JobSearch</h3>
          <p>Find your dream job with us</p>
        </div>
        <div>
          <a href="https://www.linkedin.com" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
      <div className="text-sm mt-2">
        © 2024 JobSearch. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
