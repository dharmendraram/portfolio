import Image from "next/image";
import React from "react";
const SkillsItem = ({title,Img}) => {
  return (
    <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-8 justify-between items-center">
        <div className="m-auto">
          <Image src={Img} alt="" width={64} height={64} />
        </div>
        <div className="flex flex-col justify-between items-center">
          <h3 className="">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
