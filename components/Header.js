'use client';

import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from './BurgerMenu';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if it's mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Check on mount
    checkMobile();

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="relative h-screen bg-gray-900 text-white rounded-md">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/house.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-gray-500/30">
          {/* Adjust logo size based on mobile or desktop */}
          <div className="absolute inset-x-0 bottom-10 flex justify-center md:justify-end md:right-56">
            <Image
              src="/flores-logo.svg"
              alt="Flores & Cie Logo"
              width={isMobile ? 300 : 500} // Set width dynamically
              height={isMobile ? 300 : 500} // Set height dynamically
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 z-10">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo-small.svg"
              alt="Flores & Cie"
              width={50}
              height={50}
              className="object-contain p-1"
            />
          </Link>
          <Link href="/" className="text-2xl text-white pl-5">
            Flores & Cie
          </Link>
        </div>
        <BurgerMenu />
      </nav>
    </header>
  );
};

export default Header;
