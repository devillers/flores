import Prestations from '../components/Prestations';
import About from '../components/About';
import Contact from '../components/Contact';
import Image from 'next/image';

function App() {
  return (
    <div>
      {/* <section id="about">
        <About />
      </section>
      <section id="prestations">
        <Prestations />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
      <section className="flex flex-col justify-center items-center min-h-screen mx-auto container">
        <Image
          src="/logo-large.svg" // Path to your logo SVG file
          alt="Flores & Cie Logo"
          width={300} // Default size for mobile
          height={300} // Default size for mobile
          className="object-contain sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]" // Adjust size for larger screens
        />

        <p className="text-3xl text-center">we will be back soon</p>
      </section>
    </div>
  );
}

export default App;
