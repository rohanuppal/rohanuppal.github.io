import React from 'react';
import { FaLinkedinIn, FaMedium } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex justify-center items-center h-full">
      <div>
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-3xl font-bold text-grey">FIND ME ON</h3>
        </div>
        <div className="flex gap-32">
          <div className="flex flex-col items-center">
            <span className="bannerIcon">
              <a href="https://github.com/rohanuppal" target="_blank" rel="noopener noreferrer">
                <SiGithub />
              </a>
            </span>
            <a className="text-white mt-2" href="https://github.com/rohanuppal" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="flex flex-col items-center">
            <span className="bannerIcon">
              <a href="mailto:rohan.uppal@hotmail.com">
                <SiGmail />
              </a>
            </span>
            <a className="text-white mt-2">rohan.uppal@hotmail.com</a>
          </div>
          <div className="flex flex-col items-center">
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/rohan-uppal-756654171/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </span>
            <a className="text-white mt-2" href="https://www.linkedin.com/in/rohan-uppal-756654171/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="flex flex-col items-center">
            <span className="bannerIcon">
              <a href="https://medium.com/@rohanuppal35" target="_blank" rel="noopener noreferrer">
                <FaMedium />
              </a>
            </span>
            <a className="text-white mt-2" href="https://medium.com/@rohanuppal35" target="_blank" rel="noopener noreferrer">Medium</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft;
