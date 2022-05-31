import React from "react";
import {
  HTML,
  CSS,
  JAVASCRIPT,
  GITHUB,
  REACT,
  NODE,
  FIREBASE,
  MONGO,
  TAILWIND,
  AWS,
} from "./imports";

const Skills = () => {
  return (
    <div
      style={{}}
      name="skills"
      className="bg-[#64180e] dark:bg-[#090914e5]  h-screen w-full skills "
    >
      <div className=" max-w-[1000px] w-ful h-full  mx-auto flex flex-col  justify-center md:pl-[18%] lg:pl-[12%] xl:pl-[0%] ">
        <div className=" px-3 ">
          <h2 className="text-gray-100 text-4xl font-bold border-b-4 border-pink-600 inline ">
            Skills
          </h2>
          <div className="text-gray-200">
            <p className="mt-2">
              // These are the technologies i've worked with
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 p-10 ">
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] p-3  hover:scale-110 duration-500">
            <img
              src={HTML}
              className="w-[100px] mx-auto pt-3 "
              alt="HTML LOGO"
            />
            <p className="text-gray-200 p-3 ">HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] p-3  hover:scale-110 duration-500">
            <img src={CSS} className="w-[100px] mx-auto pt-3 " alt="CSS LOGO" />
            <p className="text-gray-200 p-3 ">CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] p-3  hover:scale-110 duration-500">
            <img
              src={JAVASCRIPT}
              className="w-[100px] mx-auto pt-3 "
              alt="JAVASCRIPT LOGO"
            />
            <p className="text-gray-200 p-3 ">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] p-3  hover:scale-110 duration-500">
            <img
              src={REACT}
              className="w-[100px] mx-auto pt-3 "
              alt="REACT  JS LOGO"
            />
            <p className="text-gray-200 p-3 ">REACT JS </p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] p-3  hover:scale-110 duration-500">
            <img
              src={GITHUB}
              className="w-[100px] mx-auto pt-3 "
              alt="GITHUB LOGO"
            />
            <p className="text-gray-200 p-3 ">GITHUB</p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] p-3  hover:scale-110 duration-500">
            <img
              src={NODE}
              className="w-[100px] mx-auto pt-3 "
              alt="NODE JS LOGO"
            />
            <p className="text-gray-200 p-3 ">NODE JS</p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] p-3  hover:scale-110 duration-500">
            <img
              src={MONGO}
              className="w-[100px] mx-auto pt-3 "
              alt="MONGO DB LOGO"
            />
            <p className="text-gray-200 p-3 ">MONGO DB</p>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md shadow-[#040c16] p-3  hover:scale-110 duration-500">
            <img
              src={FIREBASE}
              className="w-[100px] mx-auto pt-3 "
              alt="FIREBASE LOGO"
            />
            <p className="text-gray-200 p-3 ">FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
