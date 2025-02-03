import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/HeroSection";
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <>
      <Navbar />

  <HeroSection />
         <About />
        <Skills />
        <Projects />
       <Contact />

  
   
    </>
  );
}

export default App;

