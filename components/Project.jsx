import React from "react";
import ProjectItem from "./ProjectItem";
import propetyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";

const Project = () => {
  return (
    <div id="projects" className="w-full md:pt-[170px]">
      <div className="max-w-[1240px] mx-auto px-2">
        <p className="text-xl tracking-widest text-[#5651e5] uppercase">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Propety Finder"
            backgroundImg={propetyImg}
            projectUrl="/propety"
          />
           <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/propety"
          />
           <ProjectItem
            title="Propety Finder"
            backgroundImg={netflixImg}
            projectUrl="/propety"
          />
           <ProjectItem
            title="Propety Finder"
            backgroundImg={twitchImg}
            projectUrl="/propety"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
