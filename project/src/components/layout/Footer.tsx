import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee-900 text-cream-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Coffee className="h-8 w-8 text-gold-500" />
              <span className="ml-2 text-2xl font-serif font-bold text-cream-100">ELIXIR</span>
            </div>
            <p className="text-cream-200 leading-relaxed">
              Experience the art of exceptional coffee in an atmosphere of refined luxury. Our commitment to quality makes every sip an unforgettable journey.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold border-b border-coffee-700 pb-2 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">Our Menu</Link>
              </li>
              <li>
                <Link to="/reservation" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">Reservations</Link>
              </li>
              <li>
                <Link to="/locations" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">Locations</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">Gallery</Link>
              </li>
              <li>
                <Link to="/careers" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">Careers</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold border-b border-coffee-700 pb-2 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-2 mt-1" />
                <span className="text-cream-300">123 Coffee Boulevard<br />Espresso District, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-500 mr-2" />
                <a href="tel:+1234567890" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-500 mr-2" />
                <a href="mailto:info@elixircoffee.com" className="text-cream-300 hover:text-gold-500 transition-colors duration-300">info@elixircoffee.com</a>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold border-b border-coffee-700 pb-2 mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-cream-300">Monday - Friday</span>
                <span className="text-gold-500">7:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-cream-300">Saturday</span>
                <span className="text-gold-500">8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-cream-300">Sunday</span>
                <span className="text-gold-500">8:00 AM - 8:00 PM</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link to="/reservation" className="btn-primary bg-gold-600 hover:bg-gold-700 w-full text-center block">Reserve a Table</Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-coffee-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-cream-300 text-sm">&copy; {new Date().getFullYear()} Elixir Coffee House. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4">
            <Link to="/privacy-policy" className="text-cream-300 hover:text-gold-500 transition-colors duration-300 text-sm">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-cream-300 hover:text-gold-500 transition-colors duration-300 text-sm">Terms of Service</Link>
            <Link to="/sitemap" className="text-cream-300 hover:text-gold-500 transition-colors duration-300 text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;