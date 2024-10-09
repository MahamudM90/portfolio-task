export default function Hero(){
    return(
        <>
       <div className='w-full md:h-[687px] px-4 md:px-8 flex flex-col  items-center md:items-start'>
    {/* Text Section */}
    <div className='md:w-1/2 flex flex-col space-y-4'>
        <h1 className='text-[#FFFFFF] text-lg md:text-2xl font-[Poppins] font-semibold'>
            Hi, I am
        </h1>
        <span className='text-[#FD6F00] text-2xl md:text-4xl font-[Poppins] font-semibold'>
            Muhammad Umair
        </span>
        <h2 className='text-[#FFFFFF] text-4xl md:text-[90px] leading-tight md:leading-[120px] font-[Poppins] font-bold'>
            UI & UX
            <span className='text-[#FFFFFF] md:w-[780px] text-4xl md:text-[90px] leading-tight md:leading-[120px] font-[Poppins] font-bold flex justify-center'> Designer</span>
        </h2>
          
    </div>

    {/* Paragraph Section */}
    <div className='md:w-1/2 mt-6 md:mt-0'>
        <p className='text-[#FFFFFF] font-[Poppins] text-base md:text-xl leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra.
        </p>
    </div>
    <br></br>
    <div>
        <button className='w-[188px] h-[52px] bg-[#FD6F00] rounded text-[21px] font-normal leading-[32px] text-[#FFFFFF] font-[Poppins] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-amber-900 duration-300'>Hire Me</button>
    </div>
</div>

        </>
    )
}