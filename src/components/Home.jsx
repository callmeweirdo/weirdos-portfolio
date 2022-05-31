import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#64180e] home  h-screen w-full ">
      <div className="  h-screen mx-auto flex flex-col max-w-[1000px] justify-center px-8 md:ml-32 ">
        <p className="text-pink p-2 text-gray-200 ">
          Hi, my friends call me OG
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-100">
          David Joseph
        </h2>
        <h2 className="text-gray-300 text-4xl sm:text-5xl font-bold ">
          im a full stack Developer
        </h2>
        <p className="text-gray-300 py-3  w-[75%] ">
          i am a full stack Developer specialized in building responsive and
          exceptional digital experience. im focused on building full stack web
          applications
        </p>
        <button className="px-6 my-3 flex justify-between items-center  py-3 border-2 w-[36%] hover:button group md:w-[30%] lg:w-[17%] text-gray-200 ">
          view Works <HiArrowNarrowRight className="group-hover:rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default Home;
