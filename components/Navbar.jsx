import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineCloudDownload,
  AiOutlineMenu,
} from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Navbar = () => {
  // mobile
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };

  // shadow
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleshadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleshadow);
  }, []);

  return (
    <div id="navbar" className={shadow ? 'fixed w-full h-20 z-[999999] bg-black text-white':"fixed w-full h-20 z-[999999] text-black"}>
      <div className="container flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          {" "}
          <Image src="/assets/navLogo.png" height="10" width="70" />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className=" ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/#contacts">
              <li className=" ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          {/* mobile responsive  */}
          <div onClick={handelNav} className="md:hidden text-[#5651e5]">
            <AiOutlineMenu size="25" />
          </div>
        </div>
        <div className="hidden md:block">
          <button className="p-3 px-4 text-white text-sm flex items-center gap-1">
            <AiOutlineCloudDownload size={20} /> Download CV
          </button>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500 p-8"
              : "fixed left-[-100%] top-0 ease-in duration-500 p-8"
          }
        >
          <div>
            <div className="flex justify-between items-center text-black">
              <div className="inline-block">
              <Link href="/">
              <Image src="/assets/navLogo.png"  width={50} height={20} />
              </Link>
              </div>
              <div
                onClick={handelNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 text-black">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
            <div className="py-4 flex-col">
              <ul className=" uppercase text-black">
                <Link href="/">
                  <li onClick={()=>setNav(false)} className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/#about">
                  <li onClick={()=>setNav(false)} className="py-4 text-sm">About</li>
                </Link>
                <Link href="/#skills">
                  <li onClick={()=>setNav(false)} className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/#projects">
                  <li onClick={()=>setNav(false)} className="py-4 text-sm">Project</li>
                </Link>
                <Link href="/#contacts">
                  <li onClick={()=>setNav(false)} className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div>
                <button className="p-3 px-4 text-white text-sm flex items-center gap-1">
                  <AiOutlineCloudDownload size={20} /> Download CV
                </button>
              </div>
              <div className="pt-20">
                <p className=" uppercase tracking-wider text-blue-500">
                  Let's Connect
                </p>
                <div className="flex justify-between my-4 w-full sm:w-[80%] ">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaInstagram />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <MdOutlineMailOutline />
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaYoutube />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                    <FaFacebook />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
