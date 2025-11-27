import React from 'react';
import { PROJECTS, CERTIFICATIONS } from '../constants';
import { ExternalLink, Award, Code } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
       {/* Subtle background decoration */}
       <div className="absolute right-0 top-1/4 w-[30%] h-[30%] bg-serene-600/10 blur-[100px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Projects Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Code className="text-serene-400" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100">Projects</h2>
          </div>
          <p className="text-slate-400 max-w-2xl">
            A selection of my work in Cybersecurity, AI, and Full Stack Development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {PROJECTS.map((project, index) => (
            <div key={index} className="glass-panel rounded-xl p-6 flex flex-col hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-serene-500/10 group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-serene-100 group-hover:text-serene-300 transition-colors">
                  {project.title}
                </h3>
                {/* Placeholder link since resume didn't provide specific URLs for each project, but good practice to have the icon */}
                <ExternalLink size={18} className="text-slate-600 group-hover:text-serene-400 transition-colors" />
              </div>
              
              <div className="text-xs font-mono text-slate-500 mb-4">{project.period}</div>
              
              <div className="flex-grow">
                 <ul className="space-y-2 mb-6">
                    {project.description.slice(0, 2).map((desc, i) => (
                        <li key={i} className="text-sm text-slate-400 line-clamp-3">
                            • {desc}
                        </li>
                    ))}
                 </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech?.map((t, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-md bg-serene-800 text-serene-300 border border-serene-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
            <div className="flex items-center gap-3 mb-8">
                <Award className="text-accent-gold" />
                <h2 className="text-3xl font-serif font-bold text-slate-100">Certifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="glass-panel p-6 rounded-xl border-l-4 border-l-accent-gold">
                        <h3 className="text-lg font-bold text-slate-100 mb-2">{cert.name}</h3>
                        <p className="text-sm text-accent-gold font-mono mb-3">{cert.date}</p>
                        <p className="text-slate-400 text-sm">{cert.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;