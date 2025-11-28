import React from "react";
import { PROFILE } from "../constants";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="relative z-0 min-h-screen flex flex-col items-center justify-center pt-15 overflow-hidden"
    >
      {/* Background Ambience - mimicking the dreamy clouds */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-serene-600/30 blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-serene-700/30 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent-gold/10 blur-[60px]"></div>
      </div>

      {/* Main welcome section */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block">
          <span className="py-1 px-3 rounded-full bg-serene-500/10 text-serene-300 text-sm border border-serene-500/20">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-100 mb-6 tracking-tight">
          Hello, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-serene-300 to-accent-gold">
            {PROFILE.name}
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto font-light">
          {PROFILE.title}
        </h2>

        <div className="glass-panel p-8 rounded-2xl max-w-3xl mx-auto mb-10 shadow-lg shadow-serene-900/50">
          {PROFILE.about.map((paragraph, index) => (
            <p
              key={index}
              className={`text-slate-300 text-lg leading-relaxed ${
                index > 0 ? "mt-4" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-serene-600 hover:bg-serene-500 text-white font-medium transition-all shadow-lg shadow-serene-600/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-transparent border border-slate-600 hover:border-serene-300 text-slate-300 hover:text-white transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Arrow below welcome section */}
      <div className="mt-5 animate-bounce text-slate-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
