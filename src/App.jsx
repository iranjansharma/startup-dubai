import './App.css';
import About from './components/About';
import Contact from './components/Contact';
// import Hero from './components/Hero';
import HeroSec from './components/HeroSec';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <HeroSec />
      {/* <Hero /> */}
      <About />
      <Pricing />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
