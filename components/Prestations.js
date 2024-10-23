'use client';
import { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Chevron icons for open/close

const PrestationsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active accordion section
  const contentRefs = useRef([]); // To keep track of content heights dynamically

  // Function to toggle accordion sections
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Auto close the accordion after 20 seconds
  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setActiveIndex(null); // Close the accordion after 20 seconds
      }, 10000); // 20000ms = 20 seconds

      // Clear the timeout if the component unmounts or activeIndex changes
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section className="bg-white p-6">
      <div className="container mx-auto text-gray-800">
        <div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Prestations</h2>
            <p className="text-lg leading-relaxed mb-8">
              Nous offrons une gamme complète de services de nettoyage adaptés à
              vos besoins.
            </p>
          </div>

          {/* Accordion starts here */}
          <div className="w-full">
            <div className="space-y-2">
              {/* First Accordion Item */}
              <div className="rounded-md drop-shadow-md">
                <button
                  onClick={() => toggleAccordion(0)}
                  className={`w-full flex justify-between items-center p-4 ${
                    activeIndex === 0 ? 'bg-slate-900 text-white ' : 'bg-white'
                  } transition-all duration-300`}
                >
                  <h3 className="text-lg">Nettoyage</h3>
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
              <div className="rounded-md drop-shadow-md">
                <button
                  onClick={() => toggleAccordion(1)}
                  className={`w-full flex justify-between items-center p-4 ${
                    activeIndex === 1 ? 'bg-slate-900 text-white ' : 'bg-white'
                  } transition-all duration-300`}
                >
                  <h3 className="text-lg">Blanchisserie</h3>
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
                      <li>Nettoyage et repassage de linge de lit</li>
                      <li>Nettoyage de serviettes</li>
                      <li>Nettoyage volumineux (couettes/oreillers)</li>
                      <li>Nettoyage de vitres</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third Accordion Item */}
              <div className="rounded-md drop-shadow-md">
                <button
                  onClick={() => toggleAccordion(2)}
                  className={`w-full flex justify-between items-center p-4 ${
                    activeIndex === 2 ? 'bg-slate-900 text-white ' : 'bg-white'
                  } transition-all duration-300`}
                >
                  <h3 className="text-lg">Location de linge</h3>
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
              <div className="rounded-md drop-shadow-md">
                <button
                  onClick={() => toggleAccordion(3)}
                  className={`w-full flex justify-between items-center p-4 ${
                    activeIndex === 3 ? 'bg-slate-900 text-white ' : 'bg-white'
                  } transition-all duration-300`}
                >
                  <h3 className="text-lg">Autres services</h3>
                  {activeIndex === 3 ? (
                    <FaChevronUp className="text-gray-600" />
                  ) : (
                    <FaChevronDown className="text-pink-500" />
                  )}
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
                  <div className="p-4 bg-gray-100 border border-l-4 border-l-pink-600">
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
