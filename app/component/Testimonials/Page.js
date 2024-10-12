"use client"
import Slider from "react-slick";
import Image from "next/image";
import './testimonial.css';
import image1 from '../../public/images/Ellipse 10.png';
import image2 from '../../public/images/Ellipse 11.png';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default to showing 1 slide
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640, // Small screens like phones
        settings: {
          slidesToShow: 1, // Show 1 slide on phones
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablets or small laptops
        settings: {
          slidesToShow: 1, // Show 1 slide on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Larger screens like laptops/desktops
        settings: {
          slidesToShow: 2, // Show 2 slides on larger screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-white text-4xl sm:text-5xl md:text-[65px] leading-tight font-semibold font-[Poppins] mb-6">Testimonials</h2>
        <p className="font-[Poppins] text-lg sm:text-xl md:text-[21px] leading-relaxed text-white mb-12">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus 
          <span className="block">netus in. Aliquet donec morbi convallis pretium.</span>
        </p>
        <Slider {...settings}>
          {/* Testimonial 1 */}
          <div className="w-[1000px] h-[320px] bg-white rounded-lg p-6 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
                <Image
                  src={image1}
                  alt="Testimonial"
                  width={235}
                  height={235}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-[#424242] italic mb-4 text-sm sm:text-base md:text-[21px]">
                  <span className="text-[#FD6F00] text-2xl sm:text-[32px] font-bold">“</span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                  <span className="text-[#FD6F00] text-2xl sm:text-[32px] font-bold">”</span>
                </p>
                <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold text-black font-[Poppins]">Name</h3>
                <span className="text-sm sm:text-base md:text-[19px] text-black font-[Poppins]">CEO</span>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="w-[1000px] h-[320px] bg-white rounded-lg p-6 md:p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden">
                <Image
                  src={image2}
                  alt="Testimonial"
                  width={235}
                  height={235}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-[#424242] italic mb-4 text-sm sm:text-base md:text-[21px]">
                  <span className="text-[#FD6F00] text-2xl sm:text-[32px] font-bold">“</span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
                  <span className="text-[#FD6F00] text-2xl sm:text-[32px] font-bold">”</span>
                </p>
                <h3 className="text-lg sm:text-xl md:text-[24px] font-semibold text-black font-[Poppins]">Name</h3>
                <span className="text-sm sm:text-base md:text-[19px] text-black font-[Poppins]">CEO</span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
