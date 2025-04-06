import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Logo */}
          <div className="flex items-center">
            <h1 className="text-indigo-950 text-2xl font-black">Manul IT</h1>
            {/* <img src="./logo/logo.jpeg" width={40} /> */}
          </div>

          {/* Right Section: Menu Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline ">
              <a
                href="#"
                className="text-indigo-950 hover:text-gray-5000 px-3 py-2 rounded-md text-sm font-bold hover:bg-indigo-50 hover:rounded-lg"
              >
                หน้าหลัก
              </a>
              <a
                href="#"
                className="text-indigo-950 hover:text-gray-5000 px-3 py-2 rounded-md text-sm font-bold hover:bg-indigo-50 hover:rounded-lg"
              >
                เกี่ยวกับ
              </a>
              <a
                href="#"
                className="text-indigo-950 hover:text-gray-5000 px-3 py-2 rounded-md text-sm font-bold hover:bg-indigo-50 hover:rounded-lg"
              >
                ติดต่อเรา
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-indigo-950 text-gray-400 hover:text-gray-5000 hover:bg-indigo-900 p-2 rounded-md transition-all duration-500 ease-in-out"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Slower, Smoother Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-all duration-700 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <a
            href="#"
            className="text-indigo-950 hover:text-gray-5000 block px-3 py-2 rounded-md text-base font-bold transition-all duration-500 ease-in-out transform hover:translate-x-2"
          >
            Home
          </a>
          <a
            href="#"
            className="text-indigo-950 hover:text-gray-5000 block px-3 py-2 rounded-md text-base font-bold transition-all duration-500 ease-in-out transform hover:translate-x-2"
          >
            About
          </a>
          <a
            href="#"
            className="text-indigo-950 hover:text-gray-5000 block px-3 py-2 rounded-md text-base font-bold transition-all duration-500 ease-in-out transform hover:translate-x-2"
          >
            Services
          </a>
          <a
            href="#"
            className="text-indigo-950 hover:text-gray-5000 block px-3 py-2 rounded-md text-base font-bold transition-all duration-500 ease-in-out transform hover:translate-x-2"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
