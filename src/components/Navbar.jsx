import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiX } from 'react-icons/fi'; // Close icon and arrow icon
import logo from '../assets/Pocoloco.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle for mobile menu

  // Function to close the mobile menu
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Navbar container */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-auto" /> {/* Increased logo size */}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:block bg-purple-700 rounded-full py-2 px-6">
          <ul className="flex font-extrabold text-white uppercase text-lg">
            <li className="border-r border-white px-4">
              <Link to="/" className="hover:text-purple-900 py-2 px-6 transition duration-300">
                Home
              </Link>
            </li>
            <li className="border-r border-white px-4">
              <Link to="/about" className="hover:text-purple-900 py-2 px-6 transition duration-300">
                About
              </Link>
            </li>
            <li className="border-r border-white px-4">
              <Link to="/activities" className="hover:text-purple-900 py-2 px-6 transition duration-300">
                Activities
              </Link>
            </li>
            <li className="border-r border-white px-4">
              <Link to="/gallery" className="hover:text-purple-900 py-2 px-6 transition duration-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-purple-900 py-2 px-6 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)} // Open mobile menu
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full"
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-purple-600 z-50 flex flex-col items-start p-8">
          {/* Logo and Close Button */}
          <div className="flex justify-between items-center w-full mb-6">
            <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Increased mobile logo size */}
            <button
              onClick={() => setIsOpen(false)} // Close mobile menu
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full"
            >
              Close <FiX className="inline ml-2" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="space-y-6 text-white text-xl font-semibold">
            <li>
              <Link to="/" className="block hover:text-purple-900" onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-purple-900" onClick={handleCloseMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/activities" className="block hover:text-purple-900" onClick={handleCloseMenu}>
                Activities
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="block hover:text-purple-900" onClick={handleCloseMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-purple-900" onClick={handleCloseMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
