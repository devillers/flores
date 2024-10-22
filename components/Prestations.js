// 'use client';
// import Image from 'next/image';
// import { useState } from 'react';

// const Prestations = () => {
//   // State to track modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Function to toggle modal visibility
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <section className="bg-white py-16 ">
//       <div className="container mx-auto px-6 text-gray-800">
//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-3xl font-bold mb-4">Prestations</h2>
//             <p className="text-md leading-relaxed">
//               Nous offrons une gamme complète de services de nettoyage adaptés à
//               vos besoins
//             </p>
//             <a
//               href="#"
//               onClick={toggleModal}
//               className="text-blue-500 mt-4 inline-block"
//             >
//               voir plus
//             </a>
//           </div>
//           <div className="relative bg-gray-200 h-64">
//             <Image
//               src="/bedroom.png" // Replace with the path to your image
//               alt="chambre chalet moderne"
//               layout="fill" // Ensures the image fills the div
//               objectFit="cover" // Ensures the image covers the entire area without distortion
//               className="rounded-md" // Optional: add Tailwind classes for styling (e.g., rounded corners)
//             />
//           </div>
//         </div>
//       </div>

//       {/* Modal Popup */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-sm shadow-lg max-w-[80%]  mx-auto h-4/5 md:h-auto overflow-y-auto">
//             <div className="mb-6">
//               <h3 className="text-4xl font-bold mb-2">Prestations</h3>
//             </div>
//             <div className="grid md:grid-cols-4 gap-8 text-left">
//               <div>
//                 <h4 className="text-2xl font-semibold mb-4">Nettoyage</h4>
//                 <ul className="leading-relaxed space-y-2">
//                   <li>
//                     Nettoyage de mise en service de logement en gestion locative
//                   </li>
//                   <li>Nettoyage de logement en gestion locative</li>
//                   <li>Nettoyage d'inter-saison</li>
//                   <li>Nettoyage de vitres</li>
//                   <li>Nettoyage événementiel/réception/mariage</li>
//                   <li>Nettoyage de locaux commerciaux</li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-2xl font-semibold mb-4">Blanchisserie</h4>
//                 <ul className="leading-relaxed space-y-2">
//                   <li>Nettoyage et repassage de linge de lit</li>
//                   <li>Nettoyage de serviette</li>
//                   <li>Nettoyage volumineux (couette/oreiller)</li>
//                   <li>Nettoyage de vitres</li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-2xl font-semibold mb-4">
//                   Location de linge
//                 </h4>
//                 <h3 className="text-xl font-semibold mb-4">Location de kits</h3>
//                 <ul className="leading-relaxed space-y-2">
//                   <li>Draps de bains</li>
//                   <li>Serviettes de bains</li>
//                   <li>Serviettes invitées</li>
//                   <li>Housse de couette 240x200</li>
//                   <li>Draps housse 140x200 & 160x200</li>
//                   <li>Taies d'oreillers</li>
//                 </ul>
//               </div>

//               <div>
//                 <h4 className="text-2xl font-semibold mb-4">Autres</h4>
//                 <ul className="leading-relaxed space-y-2">
//                   <li>Petits bricolage</li>
//                   <li>Évacuation des encombrants</li>
//                   <li>Livraison/installation de mobiliers</li>
//                 </ul>
//               </div>
//             </div>

//             <button
//               onClick={toggleModal}
//               className="mt-6 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
//             >
//               Fermer
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Prestations;
'use client';
import { useState, useRef } from 'react';

const PrestationsAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // State to track active accordion section
  const contentRefs = useRef([]); // To keep track of content heights dynamically

  // Function to toggle accordion sections
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 p-6">
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
            <div className="space-y-4">
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
