import { useRef, useState, useEffect } from 'react';
import './App.css';
import TerminalLayout from './components/TerminalLayout';
import HeroSection from './components/Hero';
import Terminal from './components/Terminal';
import TerminalWindow from './components/TerminalWindow';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { scrollContext } from './contexts.jsx/scrollContext';
function App() {
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <scrollContext.Provider value={{ skillsRef, projectsRef }}>
        <TerminalLayout>
          <TerminalWindow>
            <HeroSection />
            <Terminal />
          </TerminalWindow>
        </TerminalLayout>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={projectsRef} className="border border-3">
          <Projects />
        </div>
      </scrollContext.Provider>
    </>
  );
}

export default App;
