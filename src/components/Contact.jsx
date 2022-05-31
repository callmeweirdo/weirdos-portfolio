import React from "react";

const contact = () => {
  return (
    <div
      name="contact"
      className=" contact h-screen w-full bg-[#64180e] flex justify-center items-center p-8 "
    >
      <div className=" text-gray-300 flex flex-col justify-center max-w-[600px]  md:max-w-[500px] lg:max-w-[800px] xl:max-w-[1000px] w-full  ">
        <div className="py-4 text-left">
          <p className="text-4xl border-b-4 button border-pink-500 inline">
            Contact
          </p>
          <p className="py-3">
            // Submit the form below or shoot me an email - ogweirdo@onmail.com
          </p>
        </div>
        <form
          action=""
          className=" flex flex-col justify-center align-center  "
          method="post"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 mb-3 bg-[#ccd6f6]"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-3 mb-3 bg-[#ccd6f6]"
          />

          <textarea
            name="message"
            id=""
            placeholder="Message"
            className="p-3  bg-[#ccd6f6]"
            rows="6"
          ></textarea>
          <button
            type="submit"
            value="submit"
            className="my-4 py-3 px-6 opacity-100 border-4 border-white mx-auto 
            bg-gradient-to-r-button "
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
