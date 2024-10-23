'use client';

import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Chevron icons for open/close

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active accordion section
  const contentRefs = useRef([]); // Keep track of content refs for calculating height dynamically

  // Function to toggle accordion sections
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Auto close the accordion after 60 seconds
  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setActiveIndex(null); // Close the accordion after 60 seconds
      }, 10000); // 10000ms = 60 seconds

      // Clear the timeout if the component unmounts or activeIndex changes
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section className="bg-white p-6">
      <div className="container mx-auto text-gray-800">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 h-64"></div> {/* Replace with an image */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Experts en Nettoyage de biens immobiliers locatifs
            </h2>
            <p className="text-md leading-relaxed text-justify">
              Depuis trois ans, Flores & Cie s'affirme comme un acteur clé dans
              le nettoyage et l'entretien de chalets et appartements prestigieux
              en gestion locative dans la vallée de Chamonix. L'entreprise est
              spécialisée dans la valorisation de biens haut de gamme, offrant
              un service personnalisé et de qualité à ses clients.
            </p>
            <p className="text-md leading-relaxed text-justify mt-4">
              Grâce à son expertise, Flores & Cie garantit des standards
              d'excellence pour préserver et magnifier ces propriétés
              exceptionnelles.
            </p>
          </div>
        </div>

        {/* Accordion starts here */}
        <div className="mt-4 space-y-2">
          {/* Accordion Item 1 */}
          <div className="rounded-md drop-shadow-md">
            <button
              onClick={() => toggleAccordion(0)}
              className={`w-full flex justify-between items-center p-4 ${
                activeIndex === 0 ? 'bg-slate-900 text-white ' : 'bg-white'
              } transition-all duration-300`}
            >
              <h3 className="text-lg">Histoire de l'entreprise</h3>
              {activeIndex === 0 ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-pink-500" />
              )}
            </button>
            <div
              ref={(el) => (contentRefs.current[0] = el)}
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                height:
                  activeIndex === 0
                    ? contentRefs.current[0]?.scrollHeight + 'px'
                    : '0px',
              }}
            >
              <div className="p-4 bg-gray-100 border border-l-4 border-l-pink-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-justify">
                    L'entreprise a vu le jour en vallée de Chamonix en 2021,
                    sous le nom initial de CannelleChx. Dès ses débuts, elle
                    s'est distinguée par son professionnalisme et sa
                    disponibilité, ce qui lui a permis de gagner rapidement la
                    confiance de ses clients. Grâce à un engagement constant
                    envers la qualité de service et une approche personnalisée,
                    CannelleChx a su se faire un nom dans le secteur du
                    nettoyage professionnel.
                  </li>
                  <li className="text-justify">
                    En peu de temps, l'entreprise a élargi son offre et a évolué
                    pour devenir Flores & Cie, consolidant sa réputation en tant
                    qu'acteur clé dans le nettoyage en gestion locative de
                    chalets et d'appartements haut de gamme. Aujourd'hui, Flores
                    & Cie continue d'exceller dans l'entretien et la
                    valorisation de propriétés, tout en élargissant son secteur
                    d'activité à l'ensemble du domaine du Mont-Blanc
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="rounded-md drop-shadow-md">
            <button
              onClick={() => toggleAccordion(1)}
              className={`w-full flex justify-between items-center p-4 ${
                activeIndex === 1 ? 'bg-slate-900 text-white ' : 'bg-white'
              } transition-all duration-300`}
            >
              <h3 className="text-lg">Nos équipes</h3>
              {activeIndex === 1 ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-pink-500" />
              )}
            </button>
            <div
              ref={(el) => (contentRefs.current[1] = el)}
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                height:
                  activeIndex === 1
                    ? contentRefs.current[1]?.scrollHeight + 'px'
                    : '0px',
              }}
            >
              <div className="p-4 bg-gray-100 border border-l-4 border-l-pink-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-justify">
                    Chez Flores & Cie, nous nous entourons de collaborateurs de
                    qualité en qui vous pouvez avoir confiance. Nos équipes,
                    ponctuelles et bien organisées, sont toutes véhiculées,
                    garantissant ainsi flexibilité et réactivité optimales. Nous
                    sommes fiers de notre métier, et cela se reflète dans nos
                    tenues sobres et élégantes. Nous attachons une grande
                    importance à la discrétion et au respect de votre espace,
                    assurant un service irréprochable.
                  </li>
                  <li className="text-justify">
                    Avec Flores & Cie, vous pouvez être assuré de la compétence
                    et du professionnalisme de nos équipes.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="rounded-md drop-shadow-md">
            <button
              onClick={() => toggleAccordion(2)}
              className={`w-full flex justify-between items-center p-4 ${
                activeIndex === 2 ? 'bg-slate-900 text-white ' : 'bg-white'
              } transition-all duration-300`}
            >
              <h3 className="text-lg">Pourquoi nous choisir ?</h3>
              {activeIndex === 2 ? (
                <FaChevronUp className="text-gray-600" />
              ) : (
                <FaChevronDown className="text-pink-500" />
              )}
            </button>
            <div
              ref={(el) => (contentRefs.current[2] = el)}
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                height:
                  activeIndex === 2
                    ? contentRefs.current[2]?.scrollHeight + 'px'
                    : '0px',
              }}
            >
              <div className="p-4 bg-gray-100 border border-l-4 border-l-pink-600">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-justify">
                    Choisir Flores & Cie, c'est opter pour un partenaire qui
                    croit profondément en la valeur du travail, en l'humain et
                    en l'honnêteté. Nous nous engageons à offrir un service de
                    qualité, basé sur la confiance et la transparence. Notre
                    équipe se consacre à l'entretien de vos biens avec soin et
                    professionnalisme.
                  </li>
                  <li className="text-justify">
                    Nous valorisons les relations humaines et nous nous
                    efforçons de créer une atmosphère chaleureuse et
                    respectueuse dans toutes nos interactions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
