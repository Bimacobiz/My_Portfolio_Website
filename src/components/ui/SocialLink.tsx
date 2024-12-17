import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
  return (
    <a 
      href={href}
      className="text-gray-700 hover:text-gray-900 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );
};