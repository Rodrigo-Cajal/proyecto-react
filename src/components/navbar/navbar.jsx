import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ShoppingCartComponent from '../cart/cart';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dkifusffi/image/upload/v1700232046/landing-react/rllakaj3koc6tolblmne.svg"
                alt="logo"
                className="w-16 h-16"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center text-center">
            <ul className="flex space-x-4 text-center border-solid">
              <li>
                <a href="/" className="hover:text-gray-600">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/nosotros" className="hover:text-gray-600">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/productos" className="hover:text-gray-600">
                  Productos
                </a>
              </li>
              <li>
                <a href="/contacto" className="hover:text-gray-600">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <ShoppingCartComponent isOpen={isCartOpen} toggleCart={toggleCart} />

            <button
              className="md:hidden ml-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            style={{ top: '5rem' }}
            onClick={toggleMenu}
          ></div>
          <div className="fixed right-0 top-20 bottom-0 w-1/2 bg-white z-50 overflow-auto">
            <div className="flex flex-col h-full p-4 border-t-[0.5px] border-gray-300">
              <ul className="flex-grow space-y-1">
                <li>
                  <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/nosotros" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="/productos" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
