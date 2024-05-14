"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


export default function About() {
  const {ref} = useSectionInView("About");

  return (
    <motion.section ref={ref} id="about" className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity: 0, y: 100}} 
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    >
        <SectionHeading>About Me</SectionHeading>

        <p className='mb-3'>
        As a <span className='font-medium'>Software Engineering undergraduate</span> at the <span className='font-medium'>University of Westminster</span>, I am driven by a passion for technology and innovation. Currently immersed in a dynamic academic journey, I am pursuing excellence in my field.
        </p>

        <p className='mb-3'>
        My coursework has endowed me with a rich understanding of software development principles and methodologies. Through rigorous study, I have cultivated analytical prowess and problem-solving acumen, essential for navigating the complexities of software systems. Additionally, my exposure to a diverse array of programming languages and database management has fortified my technical proficiency.
        </p>

        <p>
        Keen on collaboration and continuous learning, I am eager to contribute to team environments, leveraging my skills to deliver impactful solutions. With a fervent dedication to advancing in the realm of software engineering, I am poised to make meaningful contributions to the ever-evolving tech landscape.        
        </p>
    </motion.section>
  );
}
