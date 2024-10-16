// app/layout.js
import './globals.css'; // Importer les styles globaux
import localFont from 'next/font/local';
import BurgerMenu from '../components/BurgerMenu';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';
import Script from 'next/script'; // Importer le composant Script

// Importer la police depuis le répertoire '/app/fonts/'
const didactGothic = localFont({
  src: './fonts/DidactGothic-Regular.ttf', // Chemin relatif vers le fichier de police
  display: 'swap', // Optionnel : Contrôler le comportement d'affichage de la police
  variable: '--font-didact-gothic', // Définir une variable CSS pour la police
});

export const metadata = {
  title: 'Flores & cie',
  description: 'Entreprise de nettoyage professionnel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={didactGothic.variable}>
      <head>
        <title>Flores & Cie</title>
        {/* Balise globale du site (gtag.js) - Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="bg-white text-slate-900">
        <header>
          <div className="relative">
            {/* Image de fond */}
            <div className="relative w-full h-screen md:h-[500px] ">
              <Image
                src="/living-rom.png" // Assurez-vous que l'image existe
                alt="Flores & Cie"
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
              {/* Contenu du header */}
              <nav className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between bg-slate-900 opacity-75">
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
            </div>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
