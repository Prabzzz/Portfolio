import { useEffect, useRef, useState } from 'react';
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import StarCanvas from "./components/StarCanvas";
import CustomCursor from './components/CustomCursor';
import Preloader from "./components/Preloader";
import Chatbot from "./components/chatbot";

export default function App() {
  const mainRef = useRef(null);
  const [preloaderDone, setPreloaderDone] = useState(false);

  // Page entrance after preloader
  useEffect(() => {
    if (preloaderDone && mainRef.current) {
      gsap.from(mainRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, [preloaderDone]);

  return (
    <HashRouter>
      <div className="min-h-screen relative overflow-hidden bg-white text-zinc-900 font-['Poppins']">
        {/* Subtle Gray Grid Pattern */}
        <div className="absolute inset-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <Preloader onComplete={() => setPreloaderDone(true)} />
        <CustomCursor />
        {/* Content section */}
        <div className="relative z-10">
          <div id="hero" className="bg-white/0">
            <Navbar />
            <Hero />
          </div>
          <section id="about" className="pt-15">
            <About />
          </section>
          <section id="tech" className="pt-15">
            <Tech />
          </section>
          <section id="experience" className="pt-15">
            <Experience />
          </section>
          <section id="projects" className="pt-15">
            <Projects />
          </section>
          {<section id="achievements" className="pt-15">
            <Achievements />
          </section> }
          <section id="contact" className="relative z-0 pt-15">
            <Contact />
            <StarCanvas />
          </section>
          <Chatbot />
        </div>
      </div>
    </HashRouter>
  );
}
