'use client';
import Image from 'next/image'
import Subtract from '../../public/images/Subtract.png'
import React, { useState } from 'react';


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-[full] h-[67px]">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                {/* Logo and Title */}
                <div className="flex items-center space-x-6">
                    <Image src={Subtract} width={70} height={66} alt='logo' className="w-[50px] h-[50px]" />
                    <p className='w-[159px] h-[59px] top-[4px] left-[87px] leading-[59px] text-[#FBFBFB] text-2xl md:text-[48px] font-[Montserrat]'>
                        <span className='font-bold'>M</span>umair
                    </p>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    <a href='#home' className='text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:underline'>Home</a>
                    <a href='#about' className='text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:underline'>About Me</a>
                    <a href='#services' className='text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:underline'>Services</a>
                    <a href='#projects' className='text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:underline'>Projects</a>
                    <a href='#testimonials' className='text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:underline'>Testimonials</a>
                    <a href='#contact' className='text-[#FFFFFF] text-[21px] leading-[32px] font-[Poppins] font-normal hover:underline'>Contact</a>
                    <button className='bg-[#FD6F00] text-white px-4 py-2 rounded text-[21px] font-normal'>Download CV</button>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
                        &#9776;
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#1E1E1E] text-center text-[#FFFFFF]">
                    <a href='#home' className="block py-2 text-lg font-[Poppins] hover:underline">Home</a>
                    <a href='#about' className="block py-2 text-lg font-[Poppins] hover:underline">About Me</a>
                    <a href='#services' className="block py-2 text-lg font-[Poppins] hover:underline">Services</a>
                    <a href='#projects' className="block py-2 text-lg font-[Poppins] hover:underline">Projects</a>
                    <a href='#testimonials' className="block py-2 text-lg font-[Poppins] hover:underline">Testimonials</a>
                    <a href='#contact' className="block py-2 text-lg font-[Poppins] hover:underline">Contact</a>
                    <button className='bg-[#FD6F00] text-[#FFFFFF] text-[21px] font-normal font-[Poppins]  px-4 py-2 mt-2 md:w-[188px] md:h-[52px] w-full leading-[32px]'>Download CV</button>
                </div>
            )}
        </nav>

    );
};

export default NavBar;