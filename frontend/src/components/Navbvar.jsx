import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Custom Link component to simulate react-router-dom Link.
const Link = ({ children, to, className, onClick }) => (
  <a href={to} className={className} onClick={onClick}>
    {children}
  </a>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Home", to: "/home" },
    { name: "Workout", to: "/workouts" },

  ];

  // The outer div is necessary as the component must return a single element.
  // All navigation logic and styling are confined within the <nav> element.
  return (
    <div> 
      <nav className="bg-white shadow-lg fixed top-0 w-full z-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo/Brand Section */}
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center text-gray-900 text-3xl font-extrabold tracking-wide rounded"
              >
                <span className="font-light">Fit</span> <span className="font-extrabold text-blue-600">Tracker</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.to}
                    className="nav-link text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-lg text-base font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-lg text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 cursor-pointer"
                aria-controls="mobile-menu-container"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white" id="mobile-menu-container">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.to}
                  onClick={toggleMenu} // Close menu when an item is clicked
                  className="nav-link text-gray-800 hover:bg-gray-100 block px-4 py-2 rounded-lg text-base font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default App;