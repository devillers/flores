import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  return (
    <header className="relative h-screen bg-gray-900 text-white rounded-md">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/house.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-gray-500/30">
          <div className="relative flex items-center justify-center top-[200px] sm:absolute sm:bottom-20 sm:right-20 ">
            <Image
              src="/flores-logo.svg" // Path to your logo SVG file
              alt="Flores & Cie Logo"
              width={380} // Adjust as needed
              height={380} // Adjust as needed
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 z-10">
        {/* <div className="text-xl font-bold">LOGO</div> */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/logo-small.svg"
              alt="Flores & Cie"
              width={50}
              height={50}
              className="object-contain p-1 "
            />
          </Link>
          <Link href="/" className="text-2xl  text-white pl-5">
            Flores & Cie
          </Link>
        </div>
        <BurgerMenu />
      </nav>
    </header>
  );
};

export default Header;
