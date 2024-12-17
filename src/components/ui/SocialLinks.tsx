import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from './SocialLink';
import { personalInfo } from '../../constants/personal-info';

export const SocialLinks: React.FC = () => {
  const { socialLinks } = personalInfo;
  
  return (
    <div className="flex items-center space-x-4">
      <SocialLink 
        href={socialLinks.github} 
        icon={Github}
        label="GitHub Profile"
      />
      <SocialLink 
        href={socialLinks.linkedin} 
        icon={Linkedin}
        label="LinkedIn Profile"
      />
      <SocialLink 
        href={socialLinks.email} 
        icon={Mail}
        label="Email Contact"
      />
    </div>
  );
};