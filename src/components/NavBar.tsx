import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../constants';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className="fixed w-full z-50 glass-nav text-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="font-serif font-bold text-xl tracking-wider text-serene-300">
              JT<span className="text-accent-gold">.</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-serene-300 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
             <a href={`https://${PROFILE.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-serene-300 transition-colors">
               <Github size={18} />
             </a>
             <a href={`https://${PROFILE.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-serene-300 transition-colors">
               <Linkedin size={18} />
             </a>
             <a href={`mailto:${PROFILE.contact.email}`} className="hover:text-serene-300 transition-colors">
               <Mail size={18} />
             </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-white hover:bg-serene-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:text-serene-300 hover:bg-serene-800/50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;