import React from "react";
import Link from "next/link";
import Image from "next/image";
const ProjectItem = ({title,backgroundImg,projectUrl}) => {
  return (
    <div className="relative flex items-center p-4 justify-center group shadow-xl w-full h-auto shadow-gray-400 rounded-xl hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt=""
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
        <h3 className="text-2xl tracking-wider text-white">{title}</h3>
        <p className="pb-4 pt-2 text-center text-white">React Js</p>
        <Link href={projectUrl}>
          <p className="text-center rounded-lg p-3 bg-white text-gray-700 text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
