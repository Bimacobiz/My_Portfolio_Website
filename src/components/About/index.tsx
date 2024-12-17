import React from 'react';
import Bio from './Bio';
import SkillsGrid from './SkillsGrid';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Bio />
        <SkillsGrid />
      </div>
    </section>
  );
};

export default About;