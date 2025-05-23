import React from "react";
import github from "../assets/Github.png";
import linkedin from "../assets/linkedin.png";
import reactLogo from "../assets/React.png";
import reduxLogo from "../assets/Redux.png";
import tailwind from "../assets/Tailwind Css.png";
import hemant from "../assets/Hemant.png";
import hemantimg from "../assets/HemantPatel.jpg"

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Hemant <span className="text-red-500">Patel</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer & Designer</p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React. JS, and
              modern web technologies. I love creating beautiful and functional
              website that solve real world problems.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md">
              <a
                href="https://drive.google.com/file/d/1lh1Pr3SXADlcs9UW2tGO74k6ha9kUo2G/view?usp=sharing"
                download
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <div className="w-[200px] h-[200px] overflow-hidden rounded-full">
              <img src={hemantimg} alt="" className="w-full h-full object-cover" />
            </div>
            <img
              src={reactLogo}
              alt=""
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt=""
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt=""
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
      
       <a href="https://github.com/hemantpatel2001" target="_blank"><img src={github} alt="" className="w-20 " /></a>  
      <a href="https://www.linkedin.com/in/hemant-patel2001/" target="_blank"><img src={linkedin} alt="" className="w-20 " /></a>
      </div>
    </section>
  );
};

export default Hero;
