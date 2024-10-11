import Image from "next/image";
import Navbar from "./component/Navbar/page";
import Hero from "./component/Hero/page";
import AboutMe from "./component/About/Page";
import Service from "./component/Service/Page";
import Project from "./component/Project/Page";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from "./component/Testimonials/Page";




export default function Home() {
  return (
    <div className='bg-[#1E1E1E]'>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Service></Service>
      <Project></Project>
      <Testimonials></Testimonials>
      
    </div>
  );
}
