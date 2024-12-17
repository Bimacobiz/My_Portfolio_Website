import React from 'react';
import { Code, Server, Globe, Database } from 'lucide-react';

const skills = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS, Next.js',
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Backend Development',
    description: 'Node.js, Python, Java, RESTful APIs',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Database',
    description: 'PostgreSQL, MongoDB, Redis',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'DevOps',
    description: 'Docker, AWS, CI/CD, Git',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm a passionate software engineer with expertise in full-stack development.
            I love building scalable applications and learning new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;