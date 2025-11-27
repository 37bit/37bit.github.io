import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import EducationExperience from './components/EducationExperience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Smooth scroll behavior for hash links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <HashRouter>
      <div className="min-h-screen bg-gradient-to-br from-serene-900 via-serene-800 to-serene-900 text-slate-200 font-sans selection:bg-serene-500 selection:text-serene-900">
        <NavBar />
        <main>
          <Hero />
          <EducationExperience />
          <Projects />
          <Skills />
        </main>
        <Contact />
      </div>
    </HashRouter>
  );
};

export default App;