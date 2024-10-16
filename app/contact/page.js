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
      <p>
        Vous avez des questions ou souhaitez un devis personnalisé ? Notre
        équipe est à votre disposition pour répondre à toutes vos demandes et
        vous proposer des solutions sur mesure adaptées à vos besoins. Que ce
        soit pour des renseignements sur nos services, un devis gratuit, ou des
        conseils personnalisés, n’hésitez pas à nous écrire en remplissant le
        formulaire de contact. Nous vous répondrons dans les plus brefs délais !
        Contactez-nous dès maintenant et bénéficiez d’une propreté irréprochable
        pour vos locaux !
      </p>
      <h1 className="text-4xl font-bold mb-4">Nous contacter</h1>
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
        <button type="submit" className="bg-blue-600 text-white p-2">
          Envoyer
        </button>
      </form>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
