import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "ClickTalk-Real time Chatting App || MERN Stack",
      description: `This MERN Stack App is a full-stack web application that combines modern technologies to deliver a seamless and interactive user experience. It features real-time messaging with online user status, secured authentication and authorization, and an intuitive user interface styled with TailwindCSS and Daisy UI.`,
      tags: ["Zustand", "MongoDb", "Nodejs", "Reactjs", "Expressjs"],
      link: "https://github.com/avi9611/Click-Talk-MERN-App",
    },

    {
      title: "Freelance-Chemcoach Solutions || Nextjs",
      description:
        "A simple, responsive web application built with Next.js 14, React, Node.js, Tailwind CSS, and written entirely in TypeScript. This app showcases the services of ChemCoach Solutions, highlighting their online chemistry classes. While the site itself does not host classes, it serves as an informative platform for promoting their offerings with a clean design and smooth user experience.",
      tags: ["Nextjs", "Typescript", "TailwindCSS", "Nodejs"],
      link: "https://github.com/avi9611/chemcoach-solutions",
    },
    {
      title: "BookStore App || PERN Stack",
      description:
        "Book Store is a modern web application built with Next.js, featuring a seamless user experience for book discovery, management, and library organization. It includes robust authentication, database management, and an advanced UI/UX design.",
      tags: ["Nextjs", "PostgreSQL", "Typescript", "TailwindCSS"],
      link: "https://github.com/avi9611/book-store-nextjs",
    },
    {
      title: "Task Manager App || Nextjs, MongoDb",
      description:
        "This is a Next.js application designed as a task management tool with robust user authentication powered by Clerk. The application is written in TypeScript, styled with Tailwind CSS, and uses MongoDB to store user data.",
      tags: ["Nextjs", "MongoDb", "Typescript", "Clerk"],
      link: "https://github.com/avi9611/task-app",
    },
    {
      title: "Vulnerability Detection Tool - SQL Injection || Flask, MySql",
      description:
        "Vulnerability Detection System This project is a security-focused system designed to improve the safety of web applications by identifying and mitigating common vulnerabilities like SQL injection, weak passwords, and malicious file uploads. The system uses Python and Flask for backend services, MySQL for data management, and features a user-friendly web interface.",
      tags: ["Flask", "MySQL", "Javascript", "Python"],
      link: "https://github.com/avi9611/VulnerabilityDetection",
    },
    {
      title: "Cyber Store || PERN Stack",
      description:
        "Cyber Store is a simple e-commerce platform designed for gaming enthusiasts. The application enables users to perform basic CRUD operations to manage product listings.",
      tags: ["Nodejs", "Reactjs", "PostgreSQL", "Javascript", "TailwindCSS"],
      link: "https://github.com/avi9611/cyber-store-pern",
    },
    {
      title: "Voyager Travel Agency || HTML5, CSS3",
      description:
        "The Travelers is a web application created to inspire wanderlust and provide users with a seamless experience for planning their dream trips. This website highlights breathtaking travel destinations, exclusive packages, and customer reviews, along with an interactive inquiry form for personalized assistance.",
      tags: ["HTML", "CSS", "Javascript"],
      link: "https://github.com/avi9611/travel-agency-voyager",
    },
    {
      title: "Event Manager App || MERN Stack",
      description:
        "Event Manager App is for handling event for different events and user interaction",
      tags: ["Javascript", "Reactjs", "Nodejs", "MongoDb"],
      link: "https://github.com/avi9611/event-app-mern",
    },

    {
      title: "E-commerce App",
      description:
        "This is a platform for purchasing products online. This project is currently under development",
      tags: ["Nextjs", "MongoDb", "Typescript", "TailwindCSS"],
      link: "https://github.com/avi9611/e-commerce-react",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden mt-2 sm:mt-14 md:mt-4">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love building cool projects! Here, you will find a curated
            collection of my creative and technical work. Each project reflects
            my passion for innovation, problem-solving, and continuous learning.
            From cutting-edge web applications to unique software solutions,
            this showcase highlights my expertise and dedication to building
            impactful digital experiences.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
