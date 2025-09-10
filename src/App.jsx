import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';;
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/HeroSection";
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"
import Overlay from './components/Overlay/Overlay';
import Scroll from './components/ScrollAnimate/Scroll';
import Preloader from './components/Preloader/Preloader';



function App() {

  const [loading, setLoading] = useState(true);

  // Hide preloader after 4 seconds (adjust as needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize AOS (animations on scroll)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
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
      )}
    </>
  );

}

export default App;

