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
    title: "Graduated from Lambton College",
    location: "Mississuaga, ON",
    description:
      "I graduated after 16 months of studying. I started working as a Security Guard.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Started Learning Coding",
    location: "Toronto, ON",
    description:
      "Along with working full time job as a security guard i started building interest towards coding and started following online content",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Seeking a junior full-stack dev job",
    location: "Toronto, ON",
    description:
      "I'm now ready to work as full-stack developer and looking for a mentor to learn and apply new concepts",
    icon: React.createElement(FaReact),
    date: "present",
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
