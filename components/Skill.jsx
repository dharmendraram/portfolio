import Image from "next/image";
import React from "react";
import htmlImg from "../public/assets/skills/html.png"
import cssImg from "../public/assets/skills/css.png"
import javascriptImg from "../public/assets/skills/javascript.png"
import typeImg from "../public/assets/skills/typescript.png"
import jqueryImg from "../public/assets/skills/jquery.png"
import reactImg from "../public/assets/skills/react.png"
import nextImg from "../public/assets/skills/nextjs.png"
import bootstrapImg from "../public/assets/skills/bootstrap.png"
import tailwindImg from "../public/assets/skills/tailwind.png"
import githubImg from "../public/assets/skills/github1.png"
import photoImg from "../public/assets/skills/photoshop.png"
import peaImg from "../public/assets/skills/Photopea.png"
import figmaImg from "../public/assets/skills/figma1.png"
import mysqlImg from "../public/assets/skills/mysql.png"
import oracleImg from "../public/assets/skills/oracle.png"
import winImg from "../public/assets/skills/windows.jpg"
import linuxImg from "../public/assets/skills/linux.png"
import kalilinuxImg from "../public/assets/skills/Kali.png"


import SkillsItem from "./SkillsItem";
const Skill = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full my-5">
        <p className="text-[#5651e5] py-4 uppercase text-xl tracking-widest">
          Skills{" "}
        </p>
        <h2 className="py-3">What I can Do</h2>
        {/* web Development tools section start  */}
        <h3 className="text-[#5651e5] text-xl py-5 underline underline-offset-4">Web Development Tools</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* htm section  */}
         <SkillsItem title="HTML" Img={htmlImg} />

          {/* css section  */}
          <SkillsItem title="CSS" Img={cssImg} />

          {/* JavaScript section  */}
          <SkillsItem title="JavaScript" Img={javascriptImg} />
          

           {/* TypeScript section  */}
           <SkillsItem title="TypeScript" Img={typeImg} />


           {/* Jquery section  */}
           <SkillsItem title="JQuery" Img={jqueryImg} />


          {/* react section  */}
          <SkillsItem title="React Js" Img={reactImg} />


           {/* next js section  */}
           <SkillsItem title="Next Js" Img={nextImg} />
          
           {/* bootstrap section  */}
           
           <SkillsItem title="Bootstrap" Img={bootstrapImg} />

          {/* tailwind section  */}
          <SkillsItem title="Tailwind" Img={tailwindImg} />


          {/* github section  */}
          
          <SkillsItem title="Github" Img={githubImg} />

        </div>
        {/* web Development tools section end  */}

        {/* Designer Tools section start */}
        <h3 className="text-[#5651e5] text-xl py-6 underline underline-offset-4">Graphic Designer Tools</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* photoshop section  */}
          <SkillsItem title="Photoshop" Img={photoImg}/>

          {/* photopea section  */}
          
          <SkillsItem title="Photopea" Img={peaImg}/>

          {/* Figma section  */}
          <SkillsItem title="Figma" Img={figmaImg}/>
        </div>
        {/* Designer tools section end  */}

         {/* Database Tools section start */}
         <h3 className="text-[#5651e5] text-xl py-6 underline underline-offset-4">Database Tools</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* mysql section  */}
          <SkillsItem title="MySql" Img={mysqlImg}/>

          {/* oracle section  */}
          <SkillsItem title="Oracle" Img={oracleImg}/>

        </div>
        {/* Database tools section end  */}

         {/* operating Tools section start */}
         <h3 className="text-[#5651e5] text-xl py-6 underline underline-offset-4">Operating System</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* windows section  */}
          <SkillsItem title="Windows" Img={winImg}/>

          {/* linux section  */}
          <SkillsItem title="Linux" Img={linuxImg}/>


           {/* kali linux section  */}
          <SkillsItem title="Kali Linux" Img={kalilinuxImg}/>
        </div>
        {/* Database tools section end  */}

      </div>

    </div>
  );
};

export default Skill;
