import Image from 'next/image';
import Herow from '../../public/images/hero.png';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


export default function HeroSection() {
    return (
        <>

            <div className="py-8 max-sm:mt-[350px] flex flex-col md:flex-row justify-evenly items-center min-h-screen">
                {/* Left Section: Text */}
                <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left px-4 md:px-8">
                    <h1 className="text-[#FFFFFF] text-3xl md:text-[24px] font-[Poppins] font-semibold">
                        Hi, I am
                    </h1>
                    <span className="text-[#FD6F00] text-[32px] md:text-[32px] font-[Poppins] font-semibold">
                        Muhammad Umair
                    </span>
                    <h2 className="text-[#FFFFFF] text-5xl md:text-[100px] font-bold mt-2">
                        UI & UX
                        <br />
                        <span className="block md:inline mx-6 md:mx-60">Designer</span>
                    </h2>
                    <p className="w-[698px] h-[101px] text-[#FFFFFF] text-[18px] md:text-[21px] font-normal leading-[28px] md:leading-[32px] mt-6 tracking-wide max-w-[90%] mx-auto md:mx-0 font-[Poppins]">
                        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
                    </p>
                    <button className="md:w-[188px] md:h-[52px] w-1/4 h-1/4 max-sm:mx-auto bg-[#FD6F00] hover:bg-orange-600 transition-transform transform hover:scale-105 text-white text-lg px-6 py-3 mt-6 rounded">
                        Hire Me
                    </button>
                </div>

                {/* Right Section: Profile Image */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mt-6 md:mt-0 md:ml-8 max-sm:mt-12">
                    {/* Orange Rectangular Background */}
                    <div className="absolute top-4 md:top-[-18px] left-1 md:left-[-9%] bg-[#FD6F0099] w-48 h-8 md:w-[374px] md:h-[83px] z-20"></div>

                    {/* White Circular Background */}
                    <div className="absolute inset-0 bg-white rounded-full z-10"></div>

                    {/* Profile Image */}
                    <Image
                        src={Herow}
                        alt="Profile"
                        className="rounded-full object-cover z-30 -mt-10 md:-mt-20"
                        layout="fill"
                    />
                </div>

                {/* Social Icons Section */}
                <div className="flex justify-center items-center  space-x-6 z-40 md:mt-[440px] md:-ml-[350px] max-sm:mt-[40px]">
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

        </>

    );
}
