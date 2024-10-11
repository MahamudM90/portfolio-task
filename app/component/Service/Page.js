import Image from 'next/image'
import Vector1 from '../../public/images/Vector-1.png'
import Vector2 from '../../public/images/Vector-2.png'
import Vector3 from '../../public/images/vector-3.png'
import Vector4 from '../../public/images/vector-4.png'

const Services = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-[65px] leading-[98px] font-semibold text-[#FFFFFF] mb-6">Services</h2>
                <p className="text-[#FFFFFF] text-[19px] leading-[28px] font-normal font-[Poppins] mb-12">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
                    <span className="block">netus in. Aliquet donec morbi convallis pretium.</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/** Card 1: UI/UX **/}
                    <div className="w-[300px] h-[310px] bg-white p-8 rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300 ">
                        <div className="mb-4 text-orange-500">
                            <i className="fas fa-paint-brush text-4xl"></i>
                        </div>
                        <div>
                            <Image src={Vector1}></Image>
                        </div>
                        <h3 className="w-[95px] h-[48px] text-[#000000] text-[32px] leading-[48px] font-semibold font-[Poppins]  mb-2 mt-2">UI/UX</h3>
                        <p className="w-[200px] h-[120px] text-black text-[19px] leading-[28px] font-normal font-[Poppins] mb-12">
                            Lorem ipsum dolor sit amet consectetur. Morbi diam risus enim nam interdum.
                        </p>
                    </div>
                    {/** Card 2: Web Design **/}
                    <div className="w-[300px] h-[310px] bg-white p-8 rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
                        <div className="mb-4 text-orange-500">
                            <i className="fas fa-laptop-code text-4xl"></i>
                        </div>
                        <div>
                            <Image src={Vector3}></Image>
                        </div>
                        <h3 className="w-[204px] h-[48px] text-[#000000] text-[32px] leading-[48px] font-semibold font-[Poppins] leading-[48px] font-semibold font-[Poppins] mb-2 mt-2">Web Design</h3>
                        <p className="text-black text-[19px] leading-[28px] font-normal font-[Poppins] mb-12">
                            Lorem ipsum dolor sit amet consectetur. Morbi diam risus enim nam interdum.
                        </p>
                    </div>
                    {/** Card 3: App Design **/}
                    <div className="w-[300px] h-[310px] bg-white p-8 rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
                        <div className="mb-4 text-orange-500">
                            <i className="fas fa-mobile-alt text-4xl"></i>
                        </div>
                        <div>
                            <Image src={Vector4}></Image>
                        </div>
                        <h3 className="w-[195px] h-[48px] text-[#000000] text-[32px] leading-[48px] font-semibold font-[Poppins]  mb-2 mt-2">App Design</h3>
                        <p className="text-black text-[19px] leading-[28px] font-normal font-[Poppins] mb-12">
                            Lorem ipsum dolor sit amet consectetur. Morbi diam risus enim nam interdum.
                        </p>
                    </div>
                    {/** Card 4: Graphic Design **/}
                    <div className="w-[300px] h-[310px] bg-white p-8 rounded-lg shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300 ">
                        <div className="mb-4 text-orange-500">
                            <i className="fas fa-pencil-ruler text-4xl"></i>
                        </div>
                        <div>
                            <Image src={Vector2}></Image>
                        </div>
                        <h3 className="w-[264px] h-[48px] text-[#000000] text-[32px] leading-[48px] font-semibold font-[Poppins] font-bold mb-2 mt-4">Graphic Design</h3>
                        <p className="text-black text-[19px] leading-[28px] font-normal font-[Poppins] mb-12">
                            Lorem ipsum dolor sit amet consectetur. Morbi diam risus enim nam interdum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
