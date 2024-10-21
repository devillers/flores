'use client';

import { useState } from 'react';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section className="py-16 bg-gray-100 rounded-md">
      <div className="container mx-auto px-6 text-gray-800 ">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 h-64 "></div>{' '}
          {/* Replace with an image */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Experts en Nettoyage de biens immobiliers locatifs{' '}
            </h2>
            <p className="text-md leading-relaxed text-justify">
              Depuis trois ans, Flores & Cie s'affirme comme un acteur clé dans
              le nettoyage et l'entretien de chalets et appartements prestigieux
              en gestion locative dans la vallée de Chamonix. L'entreprise est
              spécialisée dans la valorisation de biens haut de gamme, offrant
              un service personnalisé et de qualité à ses clients. Grâce à son
              expertise, Flores & Cie garantit des standards d'excellence pour
              préserver et magnifier ces propriétés exceptionnelles
            </p>
            <a
              href="#"
              onClick={toggleModal}
              className="text-blue-500 mt-4 inline-block"
            >
              voir plus
            </a>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-[80%]  mx-auto h-4/5 md:h-auto overflow-y-auto">
            <div className="mb-6">
              <h3 className="text-4xl font-bold mb-2">Pourquoi nous choisir</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-left">
              <div>
                <h4 className="text-2xl font-semibold mb-4">
                  Histoire de l'Entreprise
                </h4>
                <p className="leading-relaxed space-y-2">
                  L'entreprise a vu le jour en vallée de Chamonix en 2021, sous
                  le nom initial de CannelleChx. Dès ses débuts, elle s'est
                  distinguée par son professionnalisme et sa disponibilité, ce
                  qui lui a permis de gagner rapidement la confiance de ses
                  clients. Grâce à un engagement constant envers la qualité de
                  service et une approche personnalisée, CannelleChx a su se
                  faire un nom dans le secteur du nettoyage professionnel.
                </p>
              </div>

              <div>
                <p className="leading-relaxed space-y-2">
                  En peu de temps, l'entreprise a élargi son offre et a évolué
                  pour devenir Flores & Cie, consolidant sa réputation en tant
                  qu'acteur clé dans le nettoyage en gestion locative de chalets
                  et d'appartements haut de gamme. Aujourd'hui, Flores & Cie
                  continue d'exceller dans l'entretien et la valorisation de
                  propriétés, tout en élargissant son secteur d'activité à
                  l'ensemble du domaine du Mont-Blanc
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4">Nos équipes</h4>
                <p className="leading-relaxed space-y-2">
                  Chez Flores & Cie, nous nous entourons de collaborateurs de
                  qualité en qui vous pouvez avoir confiance. Nos équipes,
                  ponctuelles et bien organisées, sont toutes véhiculées,
                  garantissant ainsi flexibilité et réactivité optimales. Nous
                  sommes fiers de notre métier, et cela se reflète dans nos
                  tenues sobres et élégantes. Nous attachons une grande
                  importance à la discrétion et au respect de votre espace,
                  assurant un service irréprochable
                </p>
                <p className="leading-relaxed space-y-2">
                  Avec Flores & Cie, vous pouvez être assuré de la compétence et
                  du professionnalisme de nos équipes.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4">
                  Pourquoi nous choisir ?
                </h4>
                <p className="leading-relaxed space-y-2">
                  Choisir Flores & Cie, c'est opter pour un partenaire qui croit
                  profondément en la valeur du travail, en l'humain et en
                  l'honnêteté. Nous nous engageons à offrir un service de
                  qualité, basé sur la confiance et la transparence. Notre
                  équipe se consacre à l'entretien de vos biens avec soin et
                  professionnalisme.
                </p>
                <p>
                  Nous valorisons les relations humaines et nous nous efforçons
                  de créer une atmosphère chaleureuse et respectueuse dans
                  toutes nos interactions.
                </p>
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

export default About;
