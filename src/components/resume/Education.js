import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';


const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-4 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B Eng. - Computer Engineering"
            subTitle1="Toronto Metropolitan University (2020 - 2025)"
            result="3.6 GPA"
            des="Relevant Courses: Data Algorithms, Software Design, Computer Architecture, Operating Systems"
          />
          <ResumeCard
            title="Grade 12"
            subTitle1="Ontario Science Centre Science School (2019 - 2020)"
            result="HONOR ROLL"
            des="1 of 30 students from all over Ontario to study at the OSCSS."
          />
          <ResumeCard
            title="Grade 9 - 11"
            subTitle1="Bur Oak Secondary School (2016 - 2020)"
            result="HONOR ROLL"
            des="Studied in this school for grades 9 to 11."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-4 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Intermediate SQL for Data Analysis Course"
            subTitle1="Dataquest.io (Feb 2023)"
            des="Learnt SQL for Data Analysis."
          />
          <ResumeCard
            title=" Machine Learning in Python"
            subTitle1="Stanford University (Jun 2021)"
            des="A machine learning course done using Python."
          />
          <ResumeCard
            title="Orange Badge I"
            subTitle1="Ontario Power Generation (Jun 2022)"
            des="Certificate for nuclear power plants."
          />
        </div>
      </div>
    </motion.div>
  );
}


export default Education

