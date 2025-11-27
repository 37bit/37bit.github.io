import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-serene-950 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-serene-700 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-serene-600/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-slate-100 mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          I'm always interested in discussing new opportunities in Cybersecurity, AI, and Software Engineering.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a 
                href={`mailto:${PROFILE.contact.email}`} 
                className="flex items-center gap-3 px-6 py-4 rounded-xl glass-panel hover:bg-serene-800/50 transition-all group min-w-[200px]"
            >
                <div className="p-2 rounded-full bg-serene-900 text-serene-400 group-hover:text-white transition-colors">
                    <Mail size={20} />
                </div>
                <div className="text-left">
                    <p className="text-xs text-slate-500">Email Me</p>
                    <p className="text-sm font-medium text-slate-200">{PROFILE.contact.email}</p>
                </div>
            </a>

            <a 
                href={`https://${PROFILE.contact.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-xl glass-panel hover:bg-serene-800/50 transition-all group min-w-[200px]"
            >
                <div className="p-2 rounded-full bg-serene-900 text-serene-400 group-hover:text-white transition-colors">
                    <Linkedin size={20} />
                </div>
                <div className="text-left">
                    <p className="text-xs text-slate-500">LinkedIn</p>
                    <p className="text-sm font-medium text-slate-200">Connect</p>
                </div>
            </a>
        </div>

        <div className="flex justify-center gap-6 text-slate-500">
            <a href={`https://${PROFILE.contact.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github size={24} />
            </a>
             <a href={`tel:${PROFILE.contact.phone}`} className="hover:text-white transition-colors">
                <Phone size={24} />
            </a>
        </div>

        <div className="mt-12 text-sm text-slate-600 border-t border-slate-800 pt-8">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;