import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div
      className="AboutBody flex justify-center items-center gap-2.5 relative h-screen
       w-full text-white font-bold bg-cover bg-no-repeat"
      id="about"
    >
      <div className="wrapper flex h-4/5 w-5/6">
        <div className="about-body-left h-full w-1/2 flex items-center justify-center"></div>
        <div className="about-body-right h-full w-1/2 flex flex-col gap-10 items-center justify-center">
          <div className="about-body-right-title h-10 flex items-center justify-center text-3xl  text-amber-400">
            About me:{" "}
          </div>
          <div className="about-body-right-content h-auto flex items-center justify-center text-justify">
          Mechatronics and Digital Enthusiast Currently progressing on Fullstack Web Development.
          Technically adept, billingual with proven record on managing manufacturing and Real Estate Sectors both 
          technically and commercial aspect such as managing budget and cost.
          Currently, he is still studying digital skill on Purwadhika Digital Technology School
          </div>
          <Link to="/resume">
            {" "}
            <div
              className="g-btn-2 hover:scale-110"
              title="Click to view Resume"
            >
              Resume
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
