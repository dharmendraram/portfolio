import Image from "next/image";
import React from "react";
import Img from "../public/assets/people.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
const Contact = () => {
  return (
    <div id="contacts" className="w-full lg:h-screen md:mb-[300px] mb-20">
      <div className="max-w-[1240px] m-auto px-2 pt-20 w-full">
        <p className="text-xl text-[#5651e5] tracking-widest">Contact Us</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left  */}
          <div className=" col-span-3 lg:col-span-2 h-full w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={Img}
                  alt=""
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h3 className="pt-3 pb-1 text-xl text-[#5651e5]">
                  Dharmendra Kumar Ram
                </h3>
                <p className="text-gray-600 tracking-widest">
                  Front-End Developer
                </p>
                <p className="py-2 text-sm text-gray-500 tracking-wider">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, consequuntur!
                </p>
              </div>
              <div>
                <p className="text-lg font-bold pt-5">Connect With Me</p>
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

          {/* right  */}
          <div className="col-span-3 h-full w-full shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className=" uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className=" uppercase text-sm py-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300"
                      type="number"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className=" uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex flex-col">
                  <label className=" uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300 w-full"
                    type="text"
                    name="subject"
                    id="subject"
                  />
                </div>

                <div className="flex flex-col">
                  <label className=" uppercase text-sm py-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="border-2 p-3 rounded-lg border-gray-300"
                    rows={10}
                  ></textarea>
                </div>
                <button className="w-full p-3 mt-5">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
