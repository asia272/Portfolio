import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/HeroSection";
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"
import Overlay from './components/Overlay/Overlay';
import Scroll from './components/ScrollAnimate/Scroll';



function App() {
  //Aos (animation on text)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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

