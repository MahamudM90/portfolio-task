"use client"
import { useState } from "react";

const Design= () => {
  const [email, setEmail] = useState("");

  return (
    <section className="px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[65px] text-[#FFFFFF]  md:text-[65px] font-semibold font-[Poppins] leading-[98px] mb-4">
          Let us Design Together
        </h2>
        {/* Description */}
        <p className="md:w-[932px] md:h-[101px] text-[#FFFFFF] text-[21px] leading-[32px] font-normal font-[Poppins] text-lg md:text-xl mb-8">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <span className="block">netus in. Aliquet donec morbi convallis pretium.
         </span> </p>
        {/* Form Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="w-full md:w-[627px] md:h-[75px] px-4 py-3 rounded-lg text-[#797979] text-[21px] font-normal leading-[32px] bg-white border-none focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          {/* Button */}
          <button className="w-full md:w-[222px] md:h-[75px] bg-[#FD6F00] text-[#FFFFFF] text-[24px] leading-[36px] font-[Poppins] text-lg px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Design;
