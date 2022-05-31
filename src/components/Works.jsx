import React from "react";
// import { HTML } from "./imports";
import workImg from "../assets/workImg.png";

const Works = () => {
  return (
    <div
      name="works"
      className="h-full  w-full bg-[#64180e] dark:bg-[#090914e5] works  "
    >
      <div
        className=" max-w-[1000px]
        md:max-w-[750px]
        lg:max-w-[1000px]
       mx-auto h-full w-full flex flex-col justify-center p-8 m "
      >
        <div className="pb-8">
          <h2 className=" text-3xl text-gray-100 inline border-b-4 border-pink-600 ">
            Works
          </h2>
          <p className="text-gray-200 py-3">
            {"// Check out some of ma works"}
          </p>
        </div>

        <div className=" w-full grid md:grid-cols-3 grid-cols-2 gap-4 mb-4 md:ml-8 ">
          {/* work container */}

          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="works-container flex container justify-center group mx-auto rounded-md items-center shadow-md shadow-[#26062e] py-5 "
          >
            <div className="p-3 opacity-0 group-hover:opacity-100 text-gray-200 bg-transparent ">
              <span className="text-2xl tracking-wider ">
                React js Application
              </span>
              <div className="flex justify-between items-center  py-4 text-center  ">
                <button className="border-3 px-5 py-2 bg-pink-300 rounded-md border-pink-600 mx-2 ">
                  Github
                </button>
                <button className="border-3 border-pink-600 px-5 py-2 bg-pink-300 rounded-md ">
                  Demo
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="works-container flex container justify-center group mx-auto rounded-md items-center shadow-md shadow-[#26062e] py-5 "
          >
            <div className="p-3 opacity-0 group-hover:opacity-100 text-gray-200 bg-transparent ">
              <span className="text-2xl tracking-wider ">
                React js Application
              </span>
              <div className="flex justify-between items-center  py-4 text-center  ">
                <button className="border-3 px-5 py-2 bg-pink-300 rounded-md border-pink-600 mx-2 ">
                  Github
                </button>
                <button className="border-3 border-pink-600 px-5 py-2 bg-pink-300 rounded-md ">
                  Demo
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="works-container flex container justify-center group mx-auto rounded-md items-center shadow-md shadow-[#26062e] py-5 "
          >
            <div className="p-3 opacity-0 group-hover:opacity-100 text-gray-200 bg-transparent ">
              <span className="text-2xl tracking-wider ">
                React js Application
              </span>
              <div className="flex justify-between items-center  py-4 text-center  ">
                <button className="border-3 px-5 py-2 bg-pink-300 rounded-md border-pink-600 mx-2 ">
                  Github
                </button>
                <button className="border-3 border-pink-600 px-5 py-2 bg-pink-300 rounded-md ">
                  Demo
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="works-container flex container justify-center group mx-auto rounded-md items-center shadow-md shadow-[#26062e] py-5 "
          >
            <div className="p-3 opacity-0 group-hover:opacity-100 text-gray-200 bg-transparent ">
              <span className="text-2xl tracking-wider ">
                React js Application
              </span>
              <div className="flex justify-between items-center  py-4 text-center  ">
                <button className="border-3 px-5 py-2 bg-pink-300 rounded-md border-pink-600 mx-2 ">
                  Github
                </button>
                <button className="border-3 border-pink-600 px-5 py-2 bg-pink-300 rounded-md ">
                  Demo
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="works-container flex container justify-center group mx-auto rounded-md items-center shadow-md shadow-[#26062e] py-5 "
          >
            <div className="p-3 opacity-0 group-hover:opacity-100 text-gray-200 bg-transparent ">
              <span className="text-2xl tracking-wider ">
                React js Application
              </span>
              <div className="flex justify-between items-center  py-4 text-center  ">
                <button className="border-3 px-5 py-2 bg-pink-300 rounded-md border-pink-600 mx-2 ">
                  Github
                </button>
                <button className="border-3 border-pink-600 px-5 py-2 bg-pink-300 rounded-md ">
                  Demo
                </button>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="works-container flex container justify-center group mx-auto rounded-md items-center shadow-md shadow-[#26062e] py-5 "
          >
            <div className="p-3 opacity-0 group-hover:opacity-100 text-gray-200 bg-transparent ">
              <span className="text-2xl tracking-wider ">
                React js Application
              </span>
              <div className="flex justify-between items-center  py-4 text-center  ">
                <button className="border-3 px-5 py-2 bg-pink-300 rounded-md border-pink-600 mx-2 ">
                  Github
                </button>
                <button className="border-3 border-pink-600 px-5 py-2 bg-pink-300 rounded-md ">
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
