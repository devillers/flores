import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Flores&Cie</title>
      </head>
      <body className="bg-gray-100 text-black">
        <header className="p-4 bg-blue-500 text-white">
          <nav>
            <ul className="container mx-auto flex space-x-4">
              <li>
                <a href="/">accueil</a>
              </li>
              <li>
                <a href="/prices">prix</a>
              </li>
              <li>
                <a href="/contact">contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
