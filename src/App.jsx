import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/HeroSection";
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"
import Overlay from './components/Overlay/Overlay';
import Scroll from './components/ScrollAnimate/Scroll';

function App() {

  return (
    <>
      <Scroll />
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Overlay />
    </>
  );
}

export default App;

