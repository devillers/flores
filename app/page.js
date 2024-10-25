import Prestations from '../components/Prestations';
import About from '../components/About';
import Contact from '../components/Contact';

function App() {
  return (
    <div>
      {/* <section id="about">
        <About />
      </section> */}
      <section id="prestations">
        <Prestations />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
