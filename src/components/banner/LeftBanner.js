import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Data Analyst."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold text-white">
          <span className="text-designColor capitalize">Rohan Uppal</span>
        </h1>
        <h2 className="text-2xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm an undergraduate student at Toronto Metropolitan University (Ryerson) studying Computer Engineering. I have a deep interest in programming, software design, cloud computing, machine learning, AR/VR, cybersecurity, and DevOps.
        </p>
      </div>
     {/* Media */}
     <Media />
     <p className="text-base font-bodyFont leading-6 tracking-wide">
        "How hard can it be?" - Jeremy Clarkson
        </p>
    </div>
  );
}


export default LeftBanner

