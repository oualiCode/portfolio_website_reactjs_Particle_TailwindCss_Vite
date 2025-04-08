import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200/85 text-black py-8 relative">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright Information */}
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} Mary. All rights reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-800 hover:text-gray-900 transition-colors duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Additional Navigation Links */}
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li>
                <a href="#skills" className="text-gray-700 hover:text-gray-950 transition-colors duration-300">
                  My skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-700 hover:text-gray-950 transition-colors duration-300">
                  My Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-gray-950 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
