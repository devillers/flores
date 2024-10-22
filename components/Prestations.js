'use client';
import { useState, useEffect, useRef } from 'react';

const PrestationsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active accordion section
  const contentRefs = useRef([]); // To keep track of content heights dynamically

  // Function to toggle accordion sections
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Auto close the accordion after 60 seconds
  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setActiveIndex(null); // Close the accordion after 60 seconds
      }, 20000); // 60000ms = 60 seconds

      // Clear the timeout if the component unmounts or activeIndex changes
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section className="bg-white p-6">
      <div className="container mx-auto text-gray-800">
        <div className="">
          <div>
            <h2 className="text-3xl font-bold mb-4">Prestations</h2>
            <p className="text-lg leading-relaxed mb-8">
              Nous offrons une gamme complète de services de nettoyage adaptés à
              vos besoins.
            </p>
          </div>

          {/* Accordion starts here */}
          <div className="w-full">
            <div className="space-y-1">
              {/* First Accordion Item */}
              <div className=" rounded-sm overflow-hidden transition-all duration-500">
                <button
                  onClick={() => toggleAccordion(0)}
                  className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold">Nettoyage</h3>
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
                  <div className="p-4 bg-gray-100">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        Nettoyage de mise en service de logement en gestion
                        locative
                      </li>
                      <li>Nettoyage de logement en gestion locative</li>
                      <li>Nettoyage d'inter-saison</li>
                      <li>Nettoyage de vitres</li>
                      <li>Nettoyage événementiel/réception/mariage</li>
                      <li>Nettoyage de locaux commerciaux</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Second Accordion Item */}
              <div className=" rounded-sm overflow-hidden transition-all duration-500">
                <button
                  onClick={() => toggleAccordion(1)}
                  className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold">Blanchisserie</h3>
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
                  <div className="p-4 bg-gray-100">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Nettoyage et repassage de linge de lit</li>
                      <li>Nettoyage de serviettes</li>
                      <li>Nettoyage volumineux (couettes/oreillers)</li>
                      <li>Nettoyage de vitres</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third Accordion Item */}
              <div className=" rounded-sm overflow-hidden transition-all duration-500">
                <button
                  onClick={() => toggleAccordion(2)}
                  className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold">Location de linge</h3>
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
                  <div className="p-4 bg-gray-100">
                    <h4 className="font-semibold">Location de kits</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Draps de bains</li>
                      <li>Serviettes de bains</li>
                      <li>Serviettes invitées</li>
                      <li>Housse de couette 240x200</li>
                      <li>Draps housse 140x200 & 160x200</li>
                      <li>Taies d'oreillers</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fourth Accordion Item */}
              <div className=" rounded-sm overflow-hidden transition-all duration-500">
                <button
                  onClick={() => toggleAccordion(3)}
                  className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold">Autres</h3>
                </button>
                <div
                  ref={(el) => (contentRefs.current[3] = el)}
                  className="transition-all duration-500 ease-in-out overflow-hidden"
                  style={{
                    height:
                      activeIndex === 3
                        ? contentRefs.current[3]?.scrollHeight + 'px'
                        : '0px',
                  }}
                >
                  <div className="p-4 bg-gray-100">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Petits bricolage</li>
                      <li>Évacuation des encombrants</li>
                      <li>Livraison/installation de mobiliers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrestationsAccordion;
