'use client'
import Image from "next/image";
import { useState } from "react";
import Background from '../../public/images/Background.png';

const AboutMe = () => {
    // State for sliders
    const [skills, setSkills] = useState({
        uiux: 80,
        webDesign: 70,
        appDesign: 60,
        graphicDesign: 85,
    });

    const handleSliderChange = (e, skill) => {
        setSkills({ ...skills, [skill]: e.target.value });
    };

    return (
        <div className="text-white p-6 sm:p-8 lg:p-16 flex justify-center items-center min-h-screen">
            <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
                {/* Profile Image */}
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mt-6 md:mt-0">
                    {/* Orange Rectangular Background */}
                    <div className="absolute top-4 md:top-[-12px] left-1 md:-left-[52%] bg-[#FD6F0099] w-36 h-8 sm:w-48 sm:h-8 md:w-[324px] md:h-[83px] z-20"></div>

                    {/* White Circular Background */}
                    <div className="md:w-[321px] md:h-[321px] absolute inset-0 bg-white rounded-full z-10 md:-ml-[120px]"></div>

                    {/* Profile Image */}
                    <Image
                        src={Background}
                        alt="Profile"
                        className="rounded-full object-cover z-30 -mt-8 md:-mt-12 md:-ml-[80px]"
                        layout="fill"
                    />
                </div>

                {/* About Me Text and Skills */}
                <div className="text-left space-y-4 w-full">
                    <h2 className="text-3xl text-[#FFFFFF] sm:text-4xl lg:text-5xl font-semibold font-[Poppins]">About Me</h2>
                    <p className="text-[#FFFFFF]  leading-[32px] text-sm sm:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem modi rerum natus harum ab fugit dolorum voluptas maiores.
                    </p>

                    {/* Slider Section */}
                    <div className="space-y-4">
                        <SkillSlider
                            label="UI/UX"
                            value={skills.uiux}
                            onChange={(e) => handleSliderChange(e, "uiux")}
                        />
                        <SkillSlider
                            label="Website Design"
                            value={skills.webDesign}
                            onChange={(e) => handleSliderChange(e, "webDesign")}
                        />
                        <SkillSlider
                            label="App Design"
                            value={skills.appDesign}
                            onChange={(e) => handleSliderChange(e, "appDesign")}
                        />
                        <SkillSlider
                            label="Graphic Design"
                            value={skills.graphicDesign}
                            onChange={(e) => handleSliderChange(e, "graphicDesign")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable SkillSlider Component
const SkillSlider = ({ label, value, onChange }) => {
    return (
        <div>
            <label className="block text-lg">{label}</label>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={onChange}
                className="w-full h-2 bg-[#FD6F00] rounded-lg appearance-none cursor-pointer"
            />
        </div>
    );
};

export default AboutMe;
