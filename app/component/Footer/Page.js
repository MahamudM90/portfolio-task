import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Subtract from '../../public/images/Subtract.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <footer className="text-white py-36">
        <div className="container mx-auto text-center">
          {/* Logo and name */}
          <div className="flex justify-center items-center mb-4">
            <div className=" rounded-full p-2">
              <Image src={Subtract} width={70} height={66} className='w-[50px] h-[50px]'></Image>
            </div>
            <p className='w-[159px] h-[59px] top-[4px] left-[100px] leading-[59px] text-[#FBFBFB] text-2xl md:text-[48px] font-[Montserrat]'>
              <span className='font-bold'>M</span>umair
            </p>
          </div>

          {/* Navigation links */}
          <ul className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 mt-12">
            <li>
              <Link href="/" className="text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:text-[#FD6F00]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:text-[#FD6F00]">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:text-[#FD6F00]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:text-[#FD6F00]">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:text-[#FD6F00]">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:text-[#FD6F00]">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social media icons */}
          <div className="flex justify-center space-x-4 gap-2 mt-16">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-[33px] h-[33px] text-white hover:text-orange-500 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-[33px] h-[33px] text-white hover:text-orange-500 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="w-[33px] h-[33px] text-white hover:text-orange-500 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-[33px] h-[33px] text-white hover:text-orange-500 transition-colors" />
            </a>
          </div>
        </div>
      </footer>
      {/* copyright */}
      <div className='w-full h-[84px] bg-[#121212]'>
        <p className='flex justify-center items-center text-[21px] text-[#FFFFFF] font-bold font-[Poppins] leading-[32px] md:pt-8 max-sm:ml-4 max-sm:w-full max-sm:h-full'>© 2023 <span className='ml-1 mr-1 text-[#FD6F00]'> Mumair </span> All Rights Reserved , Inc.</p>
      </div>

    </>
  );
};

export default Footer;
