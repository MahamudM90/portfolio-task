import Image from "next/image";
import Navbar from "./component/Navbar/page";
import Hero from "./component/Hero/page";
import AboutMe from "./component/About/Page";

export default function Home() {
  return (
    <div className='bg-[#1E1E1E]'>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    </div>
  );
}
