import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SkillCard;