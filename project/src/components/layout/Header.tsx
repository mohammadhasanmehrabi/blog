import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Coffee className="h-8 w-8 text-coffee-700" />
            <span className="ml-2 text-2xl font-serif font-bold text-coffee-800">ELIXIR</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="menu-link">Home</Link>
            <Link to="/menu" className="menu-link">Menu</Link>
            <Link to="/about" className="menu-link">About</Link>
            <div className="relative">
              <button 
                className="menu-link flex items-center"
                onClick={() => setIsExperienceOpen(!isExperienceOpen)}
              >
                Experience
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${isExperienceOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isExperienceOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <Link to="/coffee-tasting" className="dropdown-link">Coffee Tasting</Link>
                  <Link to="/barista-classes" className="dropdown-link">Barista Classes</Link>
                  <Link to="/roastery-tours" className="dropdown-link">Roastery Tours</Link>
                  <Link to="/private-events" className="dropdown-link">Private Events</Link>
                </div>
              )}
            </div>
            <Link to="/locations" className="menu-link">Locations</Link>
            <Link to="/gallery" className="menu-link">Gallery</Link>
            <Link to="/contact" className="menu-link">Contact</Link>
            <Link to="/reservation" className="btn-primary">Reserve</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-coffee-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white absolute w-full left-0 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container-custom py-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-coffee-800 hover:text-coffee-600 transition-colors duration-300 font-medium">Home</Link>
            <Link to="/menu" className="text-coffee-800 hover:text-coffee-600 transition-colors duration-300 font-medium">Menu</Link>
            <Link to="/about" className="text-coffee-800 hover:text-coffee-600 transition-colors duration-300 font-medium">About</Link>
            <Link to="/experience" className="text-coffee-800 hover:text-coffee-600 transition-colors duration-300 font-medium">Experience</Link>
            <Link to="/locations" className="text-coffee-800 hover:text-coffee-600 transition-colors duration-300 font-medium">Locations</Link>
            <Link to="/gallery" className="text-coffee-800 hover:text-coffee-600 transition-colors duration-300 font-medium">Gallery</Link>
            <Link to="/contact" className="text-coffee-800 hover:text-coffee-600 transition-colors duration-300 font-medium">Contact</Link>
            <div className="pt-4 border-t border-gray-200">
              <Link to="/reservation" className="btn-primary w-full text-center block">Reserve a Table</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;