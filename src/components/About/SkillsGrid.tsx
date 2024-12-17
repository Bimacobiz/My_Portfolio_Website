import React from 'react';
import SkillCard from './SkillCard';
import { skills } from '../../constants/skills';

const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          icon={skill.icon}
          title={skill.title}
          description={skill.description}
        />
      ))}
    </div>
  );
};

export default SkillsGrid;