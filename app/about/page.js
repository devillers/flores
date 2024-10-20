'use client';

import { useState } from 'react';

export default function ContactPage() {
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
    <div>
      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 md:p-6">Nous contacter</h1>
        <h2 className="text-justify mt-6 ">
          {' '}
          Vous avez des questions ou souhaitez un devis personnalisé ?{' '}
        </h2>
        <p className="md:p-6">
          {' '}
          Que ce soit pour des renseignements sur nos services, un devis
          gratuit, ou des conseils personnalisés, n’hésitez pas à nous écrire en
          remplissant le formulaire de contact. Nous vous répondrons dans les
          plus brefs délais !
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <label className="block mb-1">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border"
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
              className="w-full p-2 border"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-slate-900 rounded-md text-white p-2"
          >
            Envoyer
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </div>
    </div>
  );
}
