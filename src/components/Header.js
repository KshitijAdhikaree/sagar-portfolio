import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-primary">
      <div className="w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-8" />
            </Link>
          </div>
          <div className="flex-grow"></div>
          <div className="hidden md:block">
            <div className="ml-4 flex  items-baseline">
              <Link to="/" className="px-3 py-2  rounded-md text-sm font-medium text-white hover:bg-headerbg hover:text-black">
                Home
              </Link>
              <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-headerbg hover:text-black">
                About
              </Link>
              <Link to="/publications" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-headerbg hover:text-black">
                Publications
              </Link>
              <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-headerbg hover:text-black">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
