import React from 'react'
import {  FaLinkedinIn, FaMedium } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Rohan Uppal</h3>
        <p className="text-lg font-normal text-gray-400">
          Computer Engineering Student
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I'm an undergraduate student at Toronto Metropolitan University (Ryerson) studying Computer Engineering. I have a deep interest in programming, software design, cloud computing, machine learning, AR/VR, cybersecurity, and DevOps.
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
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
  );
}


export default ContactLeft

