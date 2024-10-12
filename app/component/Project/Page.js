import Image from 'next/image'
import project1 from '../../public/images/Web1.png'
import project2 from '../../public/images/Web2.png'
import project3 from '../../public/images/Web3.png'
import project4 from '../../public/images/Web4.png'
import project5 from '../../public/images/Web5.png'
import project6 from '../../public/images/Web6.png'

export default function Project() {
    return (
        <>
            {/* project category */}
            <section className="text-center py-32">
                <h1 className="text-[#FFFFFF] text-3xl font-semibold font-[Poppins] leading-[98px] md:text-[65px] lg:text-5xl mb-4">My Projects</h1>
                <p className="text-[#FFFFFF] text-[21px] font-normal font-[Poppins] leading-[32px] mb-8">
                    Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus <span className="block">lectus. Phasellus consequat urna tellus</span>
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <button className="w-[70px] h-[56px] text-[#000000] text-[24px] font-[Poppins] leading-[24px] bg-[#F8F8F8] rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FD6F00] duration-300">
                        All
                    </button>
                    <button className="w-[108px] h-[56px] text-[#000000] text-[24px] font-[Poppins] leading-[24px] bg-[#F8F8F8] rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FD6F00] duration-300">
                        UI/UX
                    </button>
                    <button className="w-[190px] h-[56px] text-[#000000] text-[24px] font-[Poppins] leading-[24px] bg-[#F8F8F8] rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FD6F00] duration-300">
                        Web Design
                    </button>
                    <button className="w-[184px] h-[56px] text-[#000000] text-[24px] font-[Poppins] leading-[24px] bg-[#F8F8F8] rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FD6F00] duration-300">
                        App Design
                    </button>
                    <button className="w-[234px] h-[56px] text-[#000000] text-[24px] font-[Poppins] leading-[24px] bg-[#F8F8F8] rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#FD6F00] duration-300">
                        Graphic Design
                    </button>
                </div>
            </section>
            {/* project details */}
            <section className='px-6 mt-2'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-16'>
                    {/* card 1 */}
                    <div className='relative w-[390px] h-[489px] bg-[#FFEBDB] px-24 rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:bg-[#FFFFFF] duration-300'>
                        <div className='w-[274px] h-[489px]'>
                            <Image src={project6} alt='project6'></Image>
                        </div>
                        <div className='absolute top-[78px] -left-[-20px]'>
                            <Image src={project1} alt='project1'></Image>
                        </div>
                        <div className='-ml-12 mt-4 '>
                            <h1 className='w-[119px] h-[29px] text-[19px] text-[#FD6F00] font-[Poppins] font-normal leading-[29px]'>Web Design</h1>
                            <h2 className='w-[408px] h-[36px] text-[24px] text-[#FFFFFF] font-bold font-[Poppins] leading-[36px]'>AirCalling Landing Page Design</h2>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className='max-sm:mt-[14px] relative w-[390px] h-[489px] bg-[#FFEBDB] px-24 rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:bg-[#FFFFFF] duration-300'>
                        <div className='w-[274px] h-[489px]'>
                            <Image src={project4} alt='project4'></Image>
                        </div>
                        <div className='absolute top-[71px] -left-[-20px]'>
                            <Image src={project5} alt='project5'></Image>
                        </div>

                        <div className='-ml-12 mt-4'>
                            <h1 className='w-[119px] h-[29px] text-[19px] text-[#FD6F00] font-[Poppins] font-normal leading-[29px]'>Web Design</h1>
                            <h2 className='w-[350px] h-[36px] text-[24px] text-[#FFFFFF] font-bold font-[Poppins] leading-[36px]'>Business Landing Page Design </h2>
                        </div>

                    </div>
                    {/* Card 3 */}
                    <div className='max-sm:mt-[14px] relative w-[390px] h-[489px] bg-[#FFEBDB] px-24 rounded transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 hover:bg-[#FFFFFF] duration-300'>
                        <div className='w-[274px] h-[489px]'>
                            <Image src={project2} alt='project2'></Image>
                        </div>
                        <div className='absolute top-[70px] -left-[-20px]'>
                            <Image src={project3} alt='project3'></Image>
                        </div>
                        <div className='-ml-12 mt-4 '>
                            <h1 className='w-[119px] h-[29px] text-[19px] text-[#FD6F00] font-[Poppins] font-normal leading-[29px]'>Web Design</h1>
                            <h2 className='w-[408px] h-[36px] text-[24px] text-[#FFFFFF] font-bold font-[Poppins] leading-[36px]'>Ecom Web Page Design </h2>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}