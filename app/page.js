import Header from '../components/Header';
import Prestations from '../components/Prestations';
import About from '../components/About';
//import Tarifs from '../components/Tarifs';
import Contact from '../components/Contact';

function App() {
  return (
    <div>
      <section id="about">
        <About />
      </section>
      <section id="prestations">
        <Prestations />
      </section>

      {/* 
      <section id="tarifs">
        <Tarifs />
      </section> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
