import React from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Express', 'Next.js', 'TailwindCSS']
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'MongoDB']
  },
  {
    title: 'Digital Marketing',
    skills: ['SEO', 'Content Strategy', 'Social Media Marketing', 'Analytics']
  }
];

const Skills = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;