'use client';

import { useState } from 'react';

const Prestations = () => {
  // State to track modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 text-gray-800">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Prestations</h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              aliquam faucibus ullamcorper. Donec molestie ultricies justo vitae
              bibendum. Donec finibus tellus nisl, eu feugiat sapien lacinia ac.
            </p>
            <a
              href="#"
              onClick={toggleModal}
              className="text-blue-500 mt-4 inline-block"
            >
              voir plus
            </a>
          </div>
          <div className="bg-gray-200 h-64"></div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-[80%]  mx-auto h-4/5 md:h-auto overflow-y-auto">
            <div className="mb-6">
              <h3 className="text-4xl font-bold mb-2">Prestations</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-left">
              <div>
                <h4 className="text-2xl font-semibold mb-4">Nettoyage</h4>
                <ul className="leading-relaxed space-y-2">
                  <li>
                    Nettoyage de mise en service de logement en gestion locative
                  </li>
                  <li>Nettoyage de logement en gestion locative</li>
                  <li>Nettoyage d'inter-saison</li>
                  <li>Nettoyage de vitres</li>
                  <li>Nettoyage événementiel/réception/mariage</li>
                  <li>Nettoyage de locaux commerciaux</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4">Blanchisserie</h4>
                <ul className="leading-relaxed space-y-2">
                  <li>Nettoyage et repassage de linge de lit</li>
                  <li>Nettoyage de serviette</li>
                  <li>Nettoyage volumineux (couette/oreiller)</li>
                  <li>Nettoyage de vitres</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4">
                  Location de linge
                </h4>
                <h3 className="text-xl font-semibold mb-4">Location de kits</h3>
                <ul className="leading-relaxed space-y-2">
                  <li>Draps de bains</li>
                  <li>Serviettes de bains</li>
                  <li>Serviettes invitées</li>
                  <li>Housse de couette 240x200</li>
                  <li>Draps housse 140x200 & 160x200</li>
                  <li>Taies d'oreillers</li>
                </ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4">Autres</h4>
                <ul className="leading-relaxed space-y-2">
                  <li>Petits bricolage</li>
                  <li>Évacuation des encombrants</li>
                  <li>Livraison/installation de mobiliers</li>
                </ul>
              </div>
            </div>

            <button
              onClick={toggleModal}
              className="mt-6 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Prestations;
