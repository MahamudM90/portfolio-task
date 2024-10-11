export default function Project() {
    return (
        <>

            <section className="text-center py-10">
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


        </>
    )
}