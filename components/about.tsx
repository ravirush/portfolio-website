"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    initial={{opacity: 0, y: 100}} 
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    >
        <SectionHeading>About Me</SectionHeading>

        <p className='mb-3'>
        I am an enthusiastic <span className='font-medium'>Undergraduate</span> student pursuing a degree in <span className='font-medium'>Applied Mathematics and Computing</span>
        {" "} at the University of Jaffna, concurrently pursuing a <span className='font-medium'>Bachelor of Information Technology</span> degree at the University of Colombo School of Computing.
        </p>

        <p className='mb-3'>
        My academic journey has provided me with a unique blend of mathematical rigor and computational expertise. Through my studies in applied mathematics, I have honed analytical thinking and problem-solving skills, 
        essential for dissecting complex software systems and identifying potential areas for improvement. Complementing my <span className='font-medium'>Mathematical background</span>, my BIT degree has equipped me with 
        a solid foundation in <span className='font-medium'>Computer science principles</span> and software development methodologies. From programming languages to database management, I have gained a 
        comprehensive understanding of the intricacies involved in software engineering.
        </p>

        <p>
        I'm highly motivated to learn and contribute to a team environment, working collaboratively with developers and stakeholders to deliver exceptional software.
        </p>
    </motion.section>
  );
}
