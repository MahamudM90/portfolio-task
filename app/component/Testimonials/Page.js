"use client"
import Slider from "react-slick";
import Image from "next/image";
import './testimonial.css';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // You can modify this to show more slides for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // On small screens
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // On medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides on tablet
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-white mb-6">Testimonials</h2>
        <p className="text-gray-400 mb-12">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
        <Slider {...settings}>
          {/* Testimonial 1 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/path-to-your-image.jpg"
                  alt="Testimonial"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-gray-600 italic mb-4">
                  “Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo vitae vel non neque mattis id tellus arcu condimentum. Augue dictum odio elementum convallis dignissim malesuada commodo ultrices.”
                </p>
                <h3 className="text-lg font-bold">Name</h3>
                <span className="text-sm text-gray-500">CEO</span>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <Image
                  src="/path-to-your-image.jpg"
                  alt="Testimonial"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-gray-600 italic mb-4">
                  “Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Augue dictum odio elementum convallis dignissim malesuada commodo ultrices.”
                </p>
                <h3 className="text-lg font-bold">Name</h3>
                <span className="text-sm text-gray-500">CTO</span>
              </div>
            </div>
          </div>
          {/* Add more testimonials as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
