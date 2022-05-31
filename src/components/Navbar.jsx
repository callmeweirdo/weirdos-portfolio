import React, { useState } from "react";
import Logo from "../assets/Weirdologo.jpg";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  const [mobile, setMobile] = useState(false);

  const onMobile = () => {
    setMobile(!mobile);
  };

  return (
    // ? nav container
    <div className=" fixed w-full flex justify-between items-center px-4 h-[80px] bg-[#64180e] dark:bg-[#090914cb] text-gray-300  ">
      {/* image container */}
      <div className="img z-10 ">
        <img src={Logo} className="h-[60px] rounded-full " alt="Ma Logo" />
      </div>
      {/* list menu */}
      <ul className=" hidden md:flex  ">
        <li>
          <Link to="home" smooth="true" duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth="true" duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth="true" duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="works" smooth="true" duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth="true" duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={() => setDarkTheme(!darkTheme)}
            className="text-xl dark:bg-[#64180e] dark:bg-[#090914e5] dark:text-gray-200 bg-[#64180e] border rounded-full px-2 py-1 hover:shadow-lg "
          >
            {darkTheme ? " 💡" : "  🌚"}
          </button>
        </li>
      </ul>
      {/* hambugger */}
      <div
        className="hambugger md:hidden hover:cursor-pointer z-10 "
        onClick={onMobile}
      >
        {mobile ? <FaTimes /> : <FaBars />}
      </div>
      {/* mobile menu */}
      {mobile && (
        <ul className=" flex flex-col top-0 left-0 justify-center items-center md:hidden absolute h-screen w-full bg-[#64180e] dark:bg-[#090914e5] text-gray-300 ">
          <li className="py-5 text-4xl ">
            <Link onClick={onMobile} to="home" smooth="true" duration={500}>
              Home
            </Link>
          </li>
          <li className="py-5 text-4xl ">
            <Link onClick={onMobile} to="about" smooth="true" duration={500}>
              About
            </Link>
          </li>
          <li className="py-5 text-4xl ">
            <Link onClick={onMobile} to="skills" smooth="true" duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-5 text-4xl ">
            <Link onClick={onMobile} to="works" smooth="true" duration={500}>
              Works
            </Link>
          </li>
          <li className="py-5 text-4xl">
            <Link onClick={onMobile} to="contact" smooth="true" duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      )}

      {/* social */}

      <div className="social fixed top-[35%] left-0 ">
        <ul className=" flex-col  hidden md:flex">
          <li className="flex justify-between ml-[-114px] items-center w-[160px] text-2xl hover:ml-[-15px] duration-300 ">
            <a
              href="!#"
              className="flex justify-between items-center bg-blue-600 w-full "
            >
              <span>LinkedIn</span> <FaLinkedin size={30} />
            </a>
          </li>
          <li className="flex justify-between ml-[-114px] items-center w-[160px] text-2xl hover:ml-[-15px] duration-300 ">
            <a
              href="!#"
              className="flex justify-between items-center bg-blue-600 w-full "
            >
              <span>Facebook</span> <FaFacebook size={30} />
            </a>
          </li>
          <li className="flex justify-between ml-[-114px] items-center w-[160px] text-2xl hover:ml-[-15px] duration-300 ">
            <a
              href="!#"
              className="flex justify-between items-center bg-[#3333333] w-full "
            >
              <span>Github</span> <FaGithub size={30} />
            </a>
          </li>
          <li className="flex justify-between ml-[-114px] items-center w-[160px] text-2xl hover:ml-[-15px] duration-300 ">
            <a
              href="!#"
              className="flex justify-between items-center bg-[#6fc2b0] w-full "
            >
              <span>Mailbox</span> <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="flex justify-between ml-[-114px] items-center w-[160px] text-2xl hover:ml-[-15px] duration-300 ">
            <a
              href="!#"
              className="flex justify-between items-center bg-[#565f69] w-full "
            >
              <span>Contact</span> <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
