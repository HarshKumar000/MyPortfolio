import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-100">
      <ParticleBackground />
      <div className="neural-bg">
        <Header />
        <Experience />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;