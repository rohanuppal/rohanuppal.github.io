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
        <div className="mt-14 w-[585px] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technology Analyst Intern"
            subTitle="Deloitte (May 2023 - Present)"
            result="TORONTO"
            des="Developed webpages, maintained SQL databases, and conduct ediscovery and computer forensics."
          />
          <ResumeCard
            title="Customer Service Rep."
            subTitle="Home Depot (May 2021 - Jan 2023)"
            result="MARKHAM"
            des="Customer service with exceptional communication skills assisting customers proven by; resolving customer complaints and fostering a welcoming environment."
          />
          <ResumeCard
            title="Student Host"
            subTitle="Ontario Science Centre (Sep 2019 - Feb 2020)"
            result="TORONTO"
            des="Ran activities for visitors and assisted scientists in school programs."
          />
        </div>
      </div>
      <div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer Eng. Intern"
            subTitle="Ontario Power Generation (May 2022 - Dec 2022)"
            result="BOWMANVILLE"
            des="Built PowerBI reports, created PowerApps, and worked on projects involving databases."
          />
          <ResumeCard
            title="Swimming Instructor"
            subTitle="City of Markham (Jul 2019 - Jul 2020)"
            result="MARKHAM"
            des="Lead structured swimming classes for various age groups and provided feedback to parents."
          />
          <ResumeCard
            title="Innovator"
            subTitle="The Knowledge Society (TKS) (Aug 2018 - Aug 2019)"
            result="TORONTO"
            des="The Knowledge Society exposes young people to cutting-edge technologies."
          />
        </div>
      </div>
    </motion.div>
  );
};


export default Experience;



