import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../constants/personal-info';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left md:flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm {personalInfo.name}
              <span className="block text-blue-600">Full Stack Developer</span>
              <span className="block text-2xl md:text-3xl text-gray-600 mt-2">
                Content Writer & Digital Marketer
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Bridging the gap between technology and communication. I build robust
              applications, craft compelling content, and drive digital growth strategies.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={personalInfo.portrait}
                  alt={personalInfo.portraitAlt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000';
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;