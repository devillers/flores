import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  return (
    <header className="relative h-screen bg-gray-900 text-white ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/flores-chalet2.webp)' }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-white/30"> */}
        <div>
          {/* Adjusted logo position to be pinned at the bottom center */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center ">
            <Image
              src="/logo-large.svg" // Path to your logo SVG file
              alt="Flores & Cie Logo"
              width={300} // Default size for mobile
              height={300} // Default size for mobile
              className="object-contain sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] " // Adjust size for larger screens
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
