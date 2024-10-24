'use client';

//import Link from 'next/link';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        setStatus('Message Sent Successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setStatus('Failed to Send Message');
      }
    } catch (error) {
      setStatus('Failed to Send Message');
    }
  };

  return (
    <section className="py-16 bg-gray-900 w-full  text-white grid md:grid-cols-2 justify-between  ">
      <div className="container mx-auto px-6 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4 ">Nous contacter</h1>
        <h2 className="text-2xl mt-6 ">
          Vous avez des questions ou souhaitez un devis personnalisé ?
        </h2>
        <p className="leading-loose text-justify mt-6 ">
          Chez Flores & Cie, nous faisons preuve de transparence sur nos tarifs
          et proposons des forfaits basés sur les prestations offertes par vos
          biens immobiliers. Nous croyons en une communication claire et
          honnête, afin que vous sachiez exactement ce que vous payez et ce que
          vous recevrez en retour.
        </p>
        <p className="leading-loose text-justify mt-6 ">
          Notre objectif est de vous offrir des solutions personnalisées qui
          répondent à vos attentes en toute transparence. N'hésitez pas à
          demander un devis gratuit pour évaluer vos besoins.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-6 text-white">
        <div>
          <label className="block mb-1">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border  text-black"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border text-black"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border text-black"
            required
          />
        </div>
        <button type="submit" className="bg-pink-600 rounded-md text-white p-2">
          Envoyer
        </button>
        {status && <p className="p-6 text-pink-300">{status}</p>}
      </form>

      {/* <footer className=" bg-gray-900 text-white  mt-[1px] pt-10 pb-20">
        <div className="container mx-auto px-6 opacity-50">
          <div className="flex justify-between items-center flex-wrap">
          
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

                {/* <Link href="/#tarifs" className="text-white">
                Tarifs
              </Link> *
                <Link href="/#contact" className="text-white">
                  Contact
                </Link>
              </nav>
            </div>

         
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
            </div>
          </div>
        </div>
      </footer> */}
    </section>
  );
};

export default Contact;
