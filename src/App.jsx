import { useState } from 'react';
import './App.css';
import TerminalLayout from './components/TerminalLayout';
import HeroSection from './components/Hero';
import Terminal from './components/Terminal';
import TerminalWindow from './components/TerminalWindow';
function App() {
  return (
    <TerminalLayout>
      <TerminalWindow>
        <HeroSection />
        <Terminal />
      </TerminalWindow>
    </TerminalLayout>
  );
}

export default App;
