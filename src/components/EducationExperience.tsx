import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const EducationExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-serene-900/50 relative">
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Experience Column */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Briefcase className="text-serene-400" />
                <h2 className="text-3xl font-serif font-bold text-slate-100">Experience</h2>
              </div>

              <div className="space-y-8">
                {EXPERIENCE.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l border-serene-800">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-serene-500 border border-serene-900"></div>
                    <div className="glass-panel p-6 rounded-xl hover:border-serene-500/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h3 className="text-xl font-bold text-serene-100">{exp.role}</h3>
                        <span className="text-xs sm:text-sm text-serene-400 font-mono mt-1 sm:mt-0 flex items-center gap-1">
                          <Calendar size={12}/> {exp.period}
                        </span>
                      </div>
                      <h4 className="text-lg text-serene-300 mb-4">{exp.company}</h4>
                      <ul className="space-y-2">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="text-slate-400 text-sm leading-relaxed flex items-start">
                            <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-serene-500 shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Column */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <GraduationCap className="text-accent-gold" />
                <h2 className="text-3xl font-serif font-bold text-slate-100">Education</h2>
              </div>

              <div className="space-y-8">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l border-serene-800">
                     <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent-gold border border-serene-900"></div>
                    <div className="glass-panel p-6 rounded-xl hover:border-accent-gold/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h3 className="text-xl font-bold text-serene-100">{edu.school}</h3>
                        <span className="text-xs sm:text-sm text-serene-400 font-mono mt-1 sm:mt-0 flex items-center gap-1">
                          <Calendar size={12}/> {edu.period}
                        </span>
                      </div>
                      <h4 className="text-lg text-accent-gold mb-4">{edu.degree}</h4>
                      <ul className="space-y-2">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-slate-400 text-sm leading-relaxed flex items-start">
                             <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-accent-gold shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
       </div>
    </section>
  );
};

export default EducationExperience;