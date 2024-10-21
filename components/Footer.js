// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white  mt-10 pt-10 pb-20">
      <div className="container mx-auto px-4 opacity-50">
        <div className="flex justify-between items-center flex-wrap">
          {/* Footer Navigation */}
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
              <Link href="/" className="">
                Accueil
              </Link>

              <Link href="/#about" className="text-white">
                A propos
              </Link>

              <Link href="/#prestations" className="text-white">
                Prestations
              </Link>

              <Link href="/#tarifs" className="text-white">
                Tarifs
              </Link>
              <Link href="/#contact" className="text-white">
                Contact
              </Link>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="w-full sm:w-auto flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.75 2h8.5A5.25 5.25 0 0121.5 7.25v8.5A5.25 5.25 0 0116.25 21h-8.5A5.25 5.25 0 012.5 15.75v-8.5A5.25 5.25 0 017.75 2zm7.75 5.25a.75.75 0 100 1.5.75.75 0 000-1.5zM12 8.75A3.25 3.25 0 1112 15.25 3.25 3.25 0 0112 8.75z"
                />
              </svg>
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                className="h-6 w-6 text-white hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
           
                <path d="M24 4.557a9.917 9.917 0 01-2.828.775A4.932 4.932 0 0023.337 3.7a9.865 9.865 0 01-3.127 1.195A4.916 4.916 0 0016.616 3c-2.736 0-4.95 2.214-4.95 4.95 0 .388.044.765.127 1.124A14.004 14.004 0 011.675 3.149a4.93 4.93 0 001.527 6.593 4.916 4.916 0 01-2.24-.619v.061c0 2.389 1.7 4.386 3.954 4.841a4.935 4.935 0 01-2.233.085c.628 1.959 2.445 3.383 4.599 3.423A9.869 9.869 0 010 21.542a13.946 13.946 0 007.548 2.213c9.057 0 14.01-7.504 14.01-14.01 0-.213-.004-.426-.013-.637A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a> */}
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="h-6 w-6 text-white hover:text-blue-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
       
                <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.541C0 23.225.792 24 1.771 24h20.451c.978 0 1.777-.774 1.777-1.729V1.729C24 .774 23.203 0 22.225 0zM7.081 20.452H3.558V9.098h3.523v11.354zM5.32 7.682h-.022c-1.181 0-1.947-.806-1.947-1.813 0-1.025.787-1.815 1.988-1.815 1.202 0 1.946.79 1.968 1.815 0 1.007-.766 1.813-1.988 1.813zM20.451 20.452h-3.525v-5.68c0-1.428-.511-2.402-1.79-2.402-.976 0-1.558.655-1.813 1.288-.094.23-.118.552-.118.873v5.922H9.683V9.098h3.385v1.56c.448-.686 1.246-1.66 3.032-1.66 2.21 0 3.851 1.442 3.851 4.54v7.914z" />
              </svg>
            </a> */}
          </div>
        </div>

        {/* Copyright 
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Flores & Cie. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
