// app/layout.js
import './globals.css';
import BurgerMenu from '../components/BurgerMenu';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Flores & cie',
  description: 'Entreprise de nettoyage professionnel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <title>Flores & Cie</title>
      </head>
      <body className="bg-gray-100 text-black">
        <header>
          <div className="relative">
            {/* Image de fond */}
            <Image
              src="/image.jpg" // Assurez-vous que l'image existe
              alt="Flores & Cie"
              layout="responsive"
              width={1920}
              height={1080}
              objectFit="cover"
              className="w-full h-auto"
            />
            {/* Overlay pour améliorer la lisibilité */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Contenu du header */}
            <nav className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between max-w-screen-xl mx-auto">
              <div className="flex items-center space-x-2">
                <Link href="/">
                  <Image
                    src="/image.jpg"
                    alt="Flores & Cie"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="/"
                  className="text-2xl font-bold text-white drop-shadow-lg"
                >
                  Flores & Cie
                </Link>
              </div>
              <BurgerMenu />
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
