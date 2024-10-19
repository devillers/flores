import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  return (
    <header className="relative h-screen bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/path/to/your-image.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
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
      <div className="absolute bottom-20 left-10 z-10">
        <h1 className="text-5xl font-bold">FLores & Cie</h1>
        <p className="mt-4 text-lg max-w-lg">Le ménage avec un grand M</p>
      </div>
    </header>
  );
};

export default Header;
