import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-[#5651e5] py-4 uppercase text-xl tracking-widest">About Us</p>
          <h2 className="py-3">Who I AM</h2>
          <p className="text-gray-600 py-3">//I am not formal Developer</p>
          <p className="text-gray-600 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nam
            at, totam minima sapiente vero, mollitia adipisci numquam, laborum
            et ipsa beatae laudantium? Laudantium porro laborum rerum facere
            tempora unde?
          </p>
          <p className="text-gray-600 py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            accusamus deserunt nobis aut rerum vitae velit nemo! Provident,
            soluta ipsa. Tempora expedita distinctio dolorum dolor doloremque
            error ipsum ex illo!
          </p>
          <p className="underline text-gray-600 py-2 cursor-pointer">Check out some of my latest Project.</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-500 flex items-center justify-center rounded-xl p-4 hover:scale-105 ease-in duration-300">
          <Image src="/assets/user.png" className="rounded-xl" alt="" height={300} width={350} />
        </div>
      </div>
    </div>
  );
};

export default About;
