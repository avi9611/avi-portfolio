import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { Briefcase, Rocket } from "lucide-react";

export const siteConfig = {
  name: "Avinash N",
  description: "I am a Passionate Software Developer",
};

export default function Home() {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "GRID R & D",
      duration: "May 2024 - Present",
      description:
        "At GRID R & D, I am actively involved in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js). My responsibilities include developing and maintaining web applications, implementing RESTful APIs, and managing MySQL databases. I work with AWS cloud infrastructure for deployment and hosting, gaining valuable experience in cloud services. Key contributions include building responsive user interfaces, optimizing database queries, and collaborating with the team to deliver scalable solutions.",
    },
    {
      role: "Java Full Stack Developer Intern",
      company: "Kodnest",
      duration: "Jan 2024 - Apr 2024",
      description:
        "At Kodnest, I worked on developing full-stack web applications using Java, Spring Boot, Hibernate, and MySQL for backend development, along with HTML, CSS, JavaScript, and React for frontend development. My responsibilities included building RESTful APIs, implementing authentication and authorization, optimizing database queries, and ensuring responsive UI design. Additionally, I collaborated with a team to follow Agile methodologies and gained hands-on experience in the full software development lifecycle.",
    },
    {
      role: "MERN Stack Intern",
      company: "Samagra Technologies",
      duration: "Nov 2023 - Jan 2024",
      description:
        "At Samagra Technologies, I developed and maintained full-stack web applications using MongoDB, Express.js, React, and Node.js. My responsibilities included designing and implementing RESTful APIs, developing dynamic and responsive user interfaces, integrating third-party services, and optimizing database queries for performance. I collaborated with cross-functional teams, followed Agile methodologies, and worked on debugging, testing, and deploying applications to enhance scalability and user experience.",
    },
    {
      role: "Open Source Contributor",
      company: "GitHub",
      duration: "Ongoing",
      description:
        "Contributed to various open-source projects, focusing on bug fixes, feature implementations, and documentation improvements.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 p-6 mt-3 sm:mt-16 md:mt-10 relative">
      {/* HERO SECTION */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-8">
        {/* GITHUB BUTTON - Appears Above HeroImage on Mobile */}
        <div className="max-lg:order-1 max-lg:w-full flex justify-center lg:hidden">
          <GithubBtn />
        </div>

        {/* HERO IMAGE - Appears Below GitHub Button on Mobile */}
        <FramerWrapper
          className="lg:w-1/2 max-lg:w-full flex justify-center max-lg:order-2"
          y={0}
          x={100}
        >
          <HeroImage />
        </FramerWrapper>

        {/* LEFT SIDE (Hero Text + Social Links + Resume Button) */}
        <FramerWrapper
          className="lg:w-1/2 flex flex-col justify-start gap-6 max-lg:order-3 max-lg:w-full max-lg:text-center lg:pl-8"
          y={0}
          x={-100}
        >
          <HeroTexts />
          <div className="flex max-lg:justify-center gap-4">
            <SocialLinks />
          </div>
          <div className="flex max-lg:justify-center">
            <DownLoadResumeBtn />
          </div>
        </FramerWrapper>
      </div>

      {/* GITHUB BUTTON */}
      <div className="hidden lg:flex lg:fixed bottom-6 right-6">
        <GithubBtn />
      </div>

      {/* INTERNSHIPS AND EXPERIENCE SECTION */}
      <div className="w-full max-w-4xl mt-12">
        <FramerWrapper y={50} duration={0.3}>
          <h2 className="text-3xl font-bold flex items-center gap-2 mb-6">
            <Briefcase className="h-8 w-8" />
            Internships & Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4">
                  <Rocket className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company} • {exp.duration}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </FramerWrapper>
      </div>
    </div>
  );
};