// components/Navbar.tsx
"use client";
import { useState } from 'react'; // ต้อง import useState เพื่อใช้สำหรับ Hamburger Menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="/" className="text-3xl font-extrabold text-indigo-600 hover:text-indigo-700 transition duration-300 ease-in-out">
            Room<span className="text-gray-800">Booking</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-10 text-lg font-semibold text-gray-700">
            <li>
              <a href="#" className="hover:text-indigo-600 transition duration-300 ease-in-out">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition duration-300 ease-in-out">Rooms</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition duration-300 ease-in-out">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600 transition duration-300 ease-in-out">Contact</a>
            </li>
          </ul>
        </nav>

        {/* User Actions (Login/Sign Up) - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="#"
            className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition duration-300 ease-in-out"
          >
            Login
          </a>
          <a
            href="#"
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2 transition duration-300 ease-in-out"
            aria-label="Toggle menu"
          >
            {/* Hamburger Icon */}
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                // Close Icon (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="px-4 pt-2 pb-3 space-y-4">
            <a
              href="#"
              className="block text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Rooms
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4 border-t border-gray-200">
              <a
                href="#"
                className="block w-full text-center px-6 py-2 border border-indigo-600 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition duration-300 ease-in-out mb-3"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
              <a
                href="#"
                className="block w-full text-center px-6 py-2 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}