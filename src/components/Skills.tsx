import React from 'react';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-serene-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
            <Cpu className="text-serene-400" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-100">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SKILLS.map((category, index) => (
                <div key={index} className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-serene-200 mb-6 pb-2 border-b border-white/10">
                        {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {category.skills.map((skill, idx) => (
                            <div 
                                key={idx} 
                                className="px-3 py-1.5 rounded-lg bg-serene-900/50 text-slate-300 text-sm border border-serene-700/50 hover:border-serene-500 hover:text-white transition-colors cursor-default"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;