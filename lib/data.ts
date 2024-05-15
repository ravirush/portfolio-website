import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import vetziImg from "@/public/vetzi.jpg";
import shoppingImg from "@/public/shopping.jpg";
import ticketImg from "@/public/ticket.jpg";
import tourismImg from "@/public/tourism.jpg";
import gradeImg from "@/public/grade.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Undergraduate",
    location: "University of Westminster, London",
    description:
      "I'm now a Undergraduate student pursuing a path in Software Engineering. I'm currently learning MERN stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "VetZii - A Vet Booking Application",
    description:
      "A complete veterinary booking application with a disease prediction system. worked on the backend of the application with NodeJS.",
    tags: ["Flutter", "NodeJS", "MongoDB"],
    imageUrl: vetziImg,
    link: "https://github.com/Dew-123/VetZii"
  },
  {
    title: "Shopping Managing System",
    description:
      "An online shopping management system (GUI and CLI) that included functionalities to manage customer shopping cart and view total cost and discounts.",
    tags: ["Java", "Java Swing"],
    imageUrl: shoppingImg,
    link: "https://github.com/ravirush/Online-Shopping-System-Java-Swing"
  },
  {
    title: "Ticket Booking System",
    description:
      "A ticket booking system (CLI) that allows users to book a seat in a theater.",
    tags: ["Java"],
    imageUrl: ticketImg,
    link: "https://github.com/ravirush/Theater-Ticket-Booking-System-Java"
  },
  {
    title: "Tourism Website",
    description:
      "A modern-looking Sri Lankan tourism website created with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: tourismImg,
    link: "https://github.com/ravirush/Sri-Lankan-Tourism-Website"
  },
  {
    title: "University Grade Analyser",
    description:
      "A Python-based system (CLI) that allows university students to predict their progression outcomes.",
    tags: ["Python"],
    imageUrl: gradeImg,
    link: "https://github.com/ravirush/Progression-Outcome-System-Python"
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MySQL",
  "PHP",
  "MongoDB",
  "Framer Motion",
  "Git",
  "GitHub",
] as const;