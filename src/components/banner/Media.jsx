import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs, FaMedium } from "react-icons/fa";
import { SiMongodb,SiExpress,SiGithub,SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Get In Touch
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/rohanuppal" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="mailto:rohan.uppal@hotmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/rohan-uppal-756654171/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://medium.com/@rohanuppal35" target="_blank" rel="noopener noreferrer">
              <FaMedium /></a>
            </span>
          </div>
        </div>
      </div>
  )
}


export default Media

