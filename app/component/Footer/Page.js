import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Logo and name */}
        <div className="flex justify-center items-center mb-4">
          <div className="bg-orange-600 rounded-full p-2">
            <span className="text-white text-lg font-bold">m</span>
          </div>
          <h1 className="text-white text-2xl font-semibold ml-2">Mumair</h1>
        </div>

        {/* Navigation links */}
        <ul className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
          <li>
            <Link href="/" className="text-gray-400 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-400 hover:text-white">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-gray-400 hover:text-white">
              Services
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-gray-400 hover:text-white">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="text-gray-400 hover:text-white">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social media icons */}
        <div className="flex justify-center space-x-4">
          <Link href="https://facebook.com" className="text-gray-400 hover:text-white" passHref>
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link href="https://twitter.com" className="text-gray-400 hover:text-white" passHref>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href="https://instagram.com" className="text-gray-400 hover:text-white" passHref>
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://linkedin.com" className="text-gray-400 hover:text-white" passHref>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
