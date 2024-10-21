'use client';

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
    <section className="py-16 bg-gray-900 text-white grid  md:grid-cols-2 justify-between rounded-md">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">Nous contacter</h1>
        <h2 className="text-2xl mt-6 ">
          {' '}
          Vous avez des questions ou souhaitez un devis personnalisé ?{' '}
        </h2>
        <p className=" leading-loose text-justify mt-6">
          Chez Flores & Cie, nous faisons preuve de transparence sur nos tarifs
          et proposons des forfaits basés sur les prestations offertes par vos
          biens immobiliers. Nous croyons en une communication claire et
          honnête, afin que vous sachiez exactement ce que vous payez et ce que
          vous recevrez en retour
        </p>
        <p className=" leading-loose text-justify mt-6">
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
      </form>
      {status && <p className="p-6 text-pink-300">{status}</p>}
    </section>
  );
};

export default Contact;
