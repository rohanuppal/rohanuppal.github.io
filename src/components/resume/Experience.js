import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";


const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Analyst Intern"
            subTitle1="Deloitte"
            subTitle2="May 2023 - Aug 2023"
            result="TORONTO"
            des="Developed webpages, maintained SQL databases, and created Python and PowerShell scripts."
          />
          <ResumeCard
            title="Computer Eng. Intern"
            subTitle1="Ontario Power Generation"
            subTitle2="May 2022 - Dec 2022"
            result="BOWMANVILLE"
            des="Built PowerBI reports, created PowerApps, and worked on projects involving databases."
            article={"https://medium.com/@rohanuppal35/my-internship-experience-at-opg-767bb97fab12"}
          />
          <ResumeCard
            title="Customer Service Rep."
            subTitle1="Home Depot"
            subTitle2="May 2021 - Jan 2023"
            result="MARKHAM"
            des="Customer service with exceptional communication skills assisting customers proven by; resolving customer complaints and fostering a welcoming environment."
          />
        </div>
      </div>
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Swimming Instructor"
            subTitle1="City of Markham"
            subTitle2="Jul 2019 - Jul 2020"
            result="MARKHAM"
            des="Lead structured swimming classes for various age groups and provided feedback to parents."
          />
          <ResumeCard
            title="Student Host"
            subTitle1="Ontario Science Centre"
            subTitle2="Sep 2019 - Feb 2020"
            result="TORONTO"
            des="Ran activities for visitors and assisted scientists in school programs."
          />
          <ResumeCard
            title="Innovator"
            subTitle1="The Knowledge Society (TKS)"
            subTitle2="Aug 2018 - Aug 2019"
            result="TORONTO"
            des="The Knowledge Society exposes young people to cutting-edge technologies."
          />
        </div>
      </div>
    </motion.div>
  );
};


export default Experience;



