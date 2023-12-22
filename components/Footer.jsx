import Image from "next/image";
import Link from "next/link";
import React from "react";
import {RxDoubleArrowUp} from "react-icons/rx"
const Footer = () => {
  return (
    <div className="w-full bg-black relative">
      <div className="absolute top-[-5px] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <Link href="/">
        <p className="bg-[#5651e5] rounded-full p-5 text-white shadow-xl"><RxDoubleArrowUp size={25}/></p>
        </Link>
      </div>
      <div className="px-2 py-4 2xl:px-16 h-full m-auto text-white flex justify-between md:flex-row flex-col items-center gap-8">
        <div>
          <Link href="/">
            <Image src="/assets/navLogo.png" alt="" width={70} height={70} />
          </Link>
          <p className="text-gray-400 pt-2 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea
            labore, perferendis voluptas qui sint dolore dolores facere nostrum
            molestiae error sapiente, animi natus odit, esse neque reiciendis
            officiis nam!
          </p>
        </div>

        <div>
          <ul className="flex uppercase">
            <Link href="/">
              <li className="md:mx-3  border-l px-2 hover:border-b border-gray-500">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="md:mx-3  border-l px-2 hover:border-b border-gray-500">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="md:mx-3  border-l px-2 hover:border-b border-gray-500">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="md:mx-3  border-l px-2 hover:border-b border-gray-500">
                Project
              </li>
            </Link>
            <Link href="/#contacts">
              <li className="md:mx-3  border-l px-2 hover:border-b border-gray-500">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="2xl:mx-16 mx-auto border-t border-gray-500 text-center" >
        <p className="text-gray-200 py-3 text-sm">Copyright &copy; 2023-2024. Deep. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
