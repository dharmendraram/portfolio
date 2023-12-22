import Image from "next/image";
import React from "react";
import propetyImg from "../public/assets/projects/property.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
const propety = () => {
  return (
    <div className="w-full mb-20">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-20 left-0 w-full h-[30vh] lg:h-[35vh] bg-black/80 z-10" />
        <Image
          className="absolute pt-32 z-1"
          objectFit="cover"
          layout="fill"
          src={propetyImg}
          alt=""
        />
        <div className=" absolute top-[75%] left-[50%] max-w-[1240px] w-full mx-auto translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Property Finder</h2>
          <h3>React Js / Tailwind </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-16">
        <div className="col-span-4">
          <p className="pt-6 text-xl text-gray-500 tracking-wider">Project</p>
          <h2 className="py-2">Overview</h2>
          <p className=" tracking-wider text-gray-500 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor,
            excepturi recusandae! Officia, maiores tempore. Animi quisquam
            assumenda doloremque doloribus autem, eligendi iusto, rerum
            obcaecati dicta ipsum pariatur. Possimus, enim nulla?
          </p>
          <div className="gap-5 py-3 flex">
            <button className="px-8 rounded-lg py-2">Demo</button>
            <button className="px-8 rounded-lg py-2">Code</button>
          </div>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 mt-4">
          <div className="p-2">
            <p className="text-xl text-[#5651e5] underline">Technologies</p>
            <div className="">
              <p className="flex items-center gap-2 py-2 text-gray-600">
                <RiRadioButtonFill /> React Js
              </p>
              <p className="flex items-center gap-2 py-2 text-gray-600">
                <RiRadioButtonFill /> Tailwind
              </p>
              <p className="flex items-center gap-2 py-2 text-gray-600">
                <RiRadioButtonFill /> JavaScript
              </p>
              <p className="flex items-center gap-2 py-2 text-gray-600">
                <RiRadioButtonFill /> Google Map
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default propety;
