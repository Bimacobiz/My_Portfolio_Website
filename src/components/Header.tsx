import React from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../constants/personal-info';
import { NavLink } from './ui/NavLink';
import { SocialLinks } from './ui/SocialLinks';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">{personalInfo.name}</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#resume">Resume</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          {/* Social Links */}
          <div className="hidden md:block">
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#resume" mobile>Resume</NavLink>
            <NavLink href="#projects" mobile>Projects</NavLink>
            <NavLink href="#contact" mobile>Contact</NavLink>
          </div>
          <div className="px-4 py-3 border-t border-gray-200">
            <SocialLinks />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;