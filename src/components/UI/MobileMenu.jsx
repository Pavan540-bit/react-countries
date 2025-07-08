import React, { useState, useEffect } from 'react';
import { NavLink as Navlink, useLocation } from 'react-router-dom';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
      if (window.innerWidth >= 760) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  if (!isMobile) return null;

  return (
    <div className="mobile-menu relative z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white bg-gray-800 rounded"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Slide-out Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-white mt-15! shadow-md p-4 z-50 transition-all duration-300">
          <ul className="flex flex-col gap-4 text-black">
            <li>
              <Navlink to="/" className="text-gray-700" onClick={() => setIsOpen(false)}>Home</Navlink>
            </li>
            <li>
              <Navlink to="/about" className="text-gray-700" onClick={() => setIsOpen(false)}>About</Navlink>
            </li>
            <li>
              <Navlink to="/country" className="text-gray-700" onClick={() => setIsOpen(false)}>Country</Navlink>
            </li>
            <li>
              <Navlink to="/contact" className="text-gray-700" onClick={() => setIsOpen(false)}>Contact</Navlink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
