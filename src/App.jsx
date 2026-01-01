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
    <div >
        <TerminalLayout>
          <TerminalWindow>
            <HeroSection />
            <Terminal skillsRef={skillsRef}  projectsRef={projectsRef}/>
          </TerminalWindow>
        </TerminalLayout>
        <div ref={skillsRef} className='bg-transparent'>
          <Skills />
        </div>
        <div ref={projectsRef} className="border border-3">
          <Projects />
        </div>
    </div>
  );
}

export default App;
