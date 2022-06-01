import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-sceen bg-[#64180e] dark:bg-[#090914e5] about "
    >
      <div className="h-screen  w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="md:text-right  p-4">
            <p className="text-4xl text-gray-100 border-b-pink-600 border-b-4 inline  ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] grid md:grid-cols-2  gap-8 w-full px-4   ">
          <div className="md:text-right  text-gray-100 text-4xl md:pl-[100px]  ">
            <p>Hi, im Dave Nice to meet you. please take a look around</p>
          </div>
          <div>
            <p className="text-gray-100 ">
              I am passionate about building excellent software that improves
              the lives of those around me. i specialize in creating software
              for clients ranging from individuals and small business
              organizations all the way to large enterprice corporation. what
              would you do if you had a software expert at you fingertip ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
