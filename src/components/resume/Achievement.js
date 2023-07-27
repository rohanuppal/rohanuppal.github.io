import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";


const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Infobesity Challenge Winner"
            subTitle="Innovation Boost Zone (Apr 2023)"
            result="1st"
            des="Thrilled to be one of the Infobesity Challenge winners for designing software that fact-checks information in Youtube videos for mindful information consumption."
            article={"https://docs.google.com/presentation/d/1ZhJtCdh3roCm-arWipC8uphTWMqkg0J4vvwKsl_t2_8/edit#slide=id.g229b3bbf4b0_6_68"}
          />
          <ResumeCard
            title="Gold Medal in Mathematica Newton Contest"
            subTitle="Mathematica Centrum (2018)"
            result="1st"
            des="Won the gold medal for the Mathematica Newton Contest!"
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BOLT Hackathon Winner"
            subTitle="BOLT Hackathon (Feb 2023)"
            result="2nd"
            des="Thrilled to win 2nd Place at the McGill University BOLT Hackathon for designing an AR Navigation and Chatbot integrated website to improve the customer service experience for the retail industry."
            article={"https://docs.google.com/presentation/d/1glWIYVIooQNmv6lAElKIHbsubKdC1n8Z/edit?usp=sharing&ouid=114499565964058355137&rtpof=true&sd=true&usp=embed_facebook"}
          />
          <ResumeCard
            title="Citizenship Award"
            subTitle="Bur Oak Secondary School (Jun 2018)"
            des="Recipient of the Citizenship Award for oustanding effort in the school community."
          />
        </div>
      </div>
    </motion.div>
  );
};


export default Achievement;



