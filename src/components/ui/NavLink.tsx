import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile }) => {
  const baseClasses = "text-gray-700 hover:text-gray-900 transition-colors";
  const mobileClasses = mobile ? "block px-3 py-2" : "";

  return (
    <a href={href} className={`${baseClasses} ${mobileClasses}`}>
      {children}
    </a>
  );
};