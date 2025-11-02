import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Brain } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="fixed top-0 inset-x-0 z-30 border-b border-white/10 bg-black/50 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 xl:px-12 h-16">
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="inline-flex items-center justify-center rounded-md bg-white/10 p-1.5"><Brain size={18} /></span>
            <span>AI Engineer</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
