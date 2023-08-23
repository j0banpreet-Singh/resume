import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fixers from "@/public/fixers.png";
import pizza from "@/public/pizza.png";
import dashboard from "@/public/dashboard.png";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "404 Fixers",
    description:
      "404 fixers which aims to provide developers share their masterpiece projects and help other developerst tp learn from the best",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Grafbase", "GraphQL"],
    imageUrl: fixers,
    link: "https://nexttype-three.vercel.app",
  },
  {
    title: "PizzaApp",
    description:
      "website where you can Satisfy cravings with ease: Order, customize, and enjoy delicious pizzas!",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: pizza,
    link: "https://pizzahut-bice.vercel.app",
  },
  {
    title: "React Admin Panel",
    description:
      "Efficient control: Manage data seamlessly through a dynamic React admin panel.",
    tags: ["React", "Firebase", "css"],
    imageUrl: dashboard,
    link: "https://github.com/j0banpreet-Singh/jobanAdminPanel",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Python",
] as const;
