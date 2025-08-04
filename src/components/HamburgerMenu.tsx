import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HamburgerMenuProps {
  categories: Array<{
    name: string;
    slug: string;
  }>;
}

export default function HamburgerMenu({ categories }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-3 left-3 z-50 bg-cyan-700 text-white p-3 rounded-lg shadow-lg active:bg-cyan-800 transition-colors touch-manipulation"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-4 pt-16">
          <h2 className="text-xl font-bold text-cyan-700 mb-4">Menu Categories</h2>
          <nav className="space-y-1">
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-4 py-4 text-gray-700 active:bg-cyan-50 active:text-cyan-700 rounded-lg transition-colors font-medium text-base touch-manipulation"
            >
              🏠 Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                onClick={toggleMenu}
                className="block px-4 py-4 text-gray-700 active:bg-cyan-50 active:text-cyan-700 rounded-lg transition-colors text-base touch-manipulation"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}