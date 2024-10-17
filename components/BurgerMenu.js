// components/BurgerMenu.js
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Bouton du menu burger */}
      <button
        onClick={toggleMenu}
        className="relative z-50 flex h-7 w-7 flex-col items-center justify-evenly md:hidden"
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
            isOpen ? 'translate-y-3 rotate-45' : ''
          }`}
        />
        <span
          className={`h-0.5 w-full bg-white transition duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
            isOpen ? '-translate-y-3 -rotate-45' : ''
          }`}
        />
      </button>

      {/* Menu overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm transform transition duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-8">
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:"
          >
            Accueil
          </Link>
          <Link
            href="/prestations"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:"
          >
            Prestations
          </Link>
          <Link
            href="/a-propos"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:"
          >
            Prestations
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="text-2xl font-semibold text-white hover:"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Menu pour écrans moyens et plus grands */}
      <div className="hidden md:flex md:items-center md:space-x-6">
        <Link href="/" className="text-white hover:">
          Accueil
        </Link>
        <Link href="/prestations" className="text-white hover:">
          Prestations
        </Link>
        <Link href="/a-propos" className="text-white hover:">
          A propos
        </Link>
        <Link href="/contact" className="text-white hover:">
          Contact
        </Link>
      </div>
    </div>
  );
}
