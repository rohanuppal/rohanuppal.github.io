import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Machine Learning"
          des="This is an article about Machine Learning."
          src={projectOne}
          websiteLink="https://medium.com/@rohanuppal35/the-fastest-learner-machine-learning-3e190f4f36b3"
        />
        <ProjectsCard
          title="Computer Vision"
          des="This is an article about Computer Vision"
          src={projectTwo}
          websiteLink="https://medium.com/@rohanuppal35/computer-vision-for-security-cameras-30a460387a03"
        />
        <ProjectsCard
          title="Augmented Reality"
          des="This is an article about Augmented Reality"
          src={projectThree}
          websiteLink="https://medium.com/@rohanuppal35/what-you-need-to-know-about-augmented-reality-ar-8236940c318"
        />
        <ProjectsCard
          title="Virtual Reality"
          des="This is an article about Virtual Reality"
          src={projectFour}
          websiteLink="https://medium.com/@rohanuppal35/anything-is-possible-in-vr-aec3146b8b3c"
        />
        <ProjectsCard
          title="ObjectSwap"
          des="My AR ObjectSwap Project"
          src={projectFive}
          githubLink="https://github.com/mihirc0111/Weather-Website-UsingAPI--node.js--express.js"
          websiteLink="https://medium.com/@rohanuppal35/objectswap-ar-project-97a97798c115"
        />
        <ProjectsCard
          title="Roll-a-Ball"
          des="My AR Roll-a-Ball Game"
          src={projectSix}
          githubLink="https://github.com/mihirc0111/Face-Detection-ML-Project-Python.git"
          websiteLink="https://medium.com/@rohanuppal35/my-first-ar-game-6d46465f56b2"
        />
      </div>
    </section>
  );
}


export default Projects

