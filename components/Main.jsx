import Image from "next/image";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
const Main = () => {
  return (
    <div className="w-full pt-[150px] text-center">
      <div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col  justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-wider text-gray-600">
            Let's Build something together
          </p>
          <h2 className="py-3 text-gray-700">
            Hi,I'm <span className="text-[#5651e5]">Dharmendra</span>
          </h2>
          <h2 className="py-3 text-gray-900  border-b-2 border-[#5651e5]">
            <TypeAnimation
              sequence={[
                "Web Designer", // Types 'One'
                2000, // Waits 1s
                "UI/UX Designer", // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                "React-Js Developer", // Types 'Three' without deleting 'Two'
                2000, // Waits 2s
                "Next-Js Developer", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "3rem", display: "inline-block", letterSpacing:"5px",lineHeight:"2.5rem" }}
            />
          </h2>
        </div>
        <p className="max-w-[70%] py-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum
          minima cupiditate sint laborum fugit dolorem nobis alias rem pariatur.
          Alias debitis, facilis quam voluptatibus consequatur magnam qui
          placeat deserunt?
        </p>
        <div className="flex justify-between items-center max-w-[500px] gap-2">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 duration-150">
            <FaLinkedinIn />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 duration-150">
            <FaGithub />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 duration-150">
            <FaInstagram />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 duration-150">
            <MdOutlineMailOutline />
          </div>

          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 duration-150">
            <FaYoutube />
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 duration-150">
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
