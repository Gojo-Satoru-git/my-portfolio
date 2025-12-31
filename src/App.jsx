import { useState } from 'react';
import './App.css';
import TerminalLayout from './components/TerminalLayout';
import HeroSection from './components/Hero';
import Terminal from './components/Terminal';
function App() {
  return (
    <TerminalLayout>
      <HeroSection/>
      <Terminal/>
    </TerminalLayout>
  );
}

export default App;
