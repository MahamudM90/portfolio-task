'use client';

import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="py-4">
            <div className="container mx-auto flex gap-12 max-sm:gap-64 items-center">
                <img className='w-[35px] h-[40px]'></img>
                <div className="hidden md:flex space-x-6">
                    <a href='#home' className='w-[65px] h-[32px] text-[#FFFFFF] font-normal font-[Poppins] text-[21px] leading-8'>Home</a>
                    <a href='#product' className='w-[104px] h-[32px] text-[#FFFFFF] font-normal font-[Poppins] text-[21px] leading-8'>About Me</a>
                    <a href='#cards' className='w-[92px] h-[32px]  text-[#FFFFFF] font-normal font-[Poppins] text-[21px] leading-8'>Services</a>
                    <a href='#home' className='w-[65px] h-[32px] text-[#FFFFFF] font-normal font-[Poppins] text-[21px] leading-8'>Projects</a>
                    <a href='#product' className='w-[104px] h-[32px] text-[#FFFFFF] font-normal font-[Poppins] text-[21px] leading-8'>Testimonials</a>
                    <a href='#cards' className='w-[92px] h-[32px]  text-[#FFFFFF] font-normal font-[Poppins] text-[21px] leading-8'>Contact</a>
                    <button className='text-[#FFFFFF]'>Download Cv</button>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <span className="text-xl text-black">&#9776;</span>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden text-center bg-blue-100">
                    <a href='#home' className="block py-2 text-black text-black font-normal font-family: Arial, sans-serif">Home</a>
                    <a href='#products' className="block py-2 text-black text-black font-normal font-family: Arial, sans-serif">Product</a>
                    <a href='#cards' className="block py-2 text-black text-black font-normal font-family: Arial, sans-serif">Review</a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;