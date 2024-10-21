// app/layout.js
import './globals.css'; // Importer les styles globaux
import localFont from 'next/font/local';

import Footer from '../components/Footer';
import Script from 'next/script'; // Importer le composant Script
import Header from '@/components/Header';

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
      <body className="bg-white text-slate-900 md:p-3">
        <Header />
        <main className=" mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
