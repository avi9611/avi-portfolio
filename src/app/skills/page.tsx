"use client";
import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { motion, useScroll, useTransform } from "framer-motion";

const SkillPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const frontendSkills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
  ];

  const backendSkills = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Spring",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
  ];

  const databaseSkills = [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ];

  const toolsSkills = [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];

  const cloudSkills = [
    {
      name: "Microsoft Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "AWS",
      icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ];

  const containerizationSkills = [
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
  ];

  const csFundamentals = [
    {
      name: "Data Structures & Algorithms",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Object-Oriented Programming (OOPs)",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Database Management Systems (DBMS)",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Operating System",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
  ];

  return (
    <div className="h-full w-full relative flex flex-col items-start gap-6 overflow-hidden mt-3 sm:mt-16 md:mt-10">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>

      <div className="flex flex-col gap-8 w-full">
        <Heading>My Technical Skills.</Heading>
        <FramerWrapper y={0} x={200}>
          <motion.p
            className="font-poppins text-xl w-full text-primary max-sm:text-lg mb-8"
            style={{ y }}
          >
            I am a passionate developer with a strong foundation in web
            development, cloud computing, and containerization.
          </motion.p>
        </FramerWrapper>

        <div className="grid gap-12">
          <FramerWrapper y={50} delay={0.15} className="skill-category">
            <div className="category-header mb-6">
              <h2 className="text-2xl font-poppins text-primary font-semibold relative mb-2">
                Frontend Development
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary-sky rounded-full"></div>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <SkillsFooter items={frontendSkills} />
            </div>
          </FramerWrapper>

          <FramerWrapper y={50} delay={0.25} className="skill-category">
            <div className="category-header mb-6">
              <h2 className="text-2xl font-poppins text-primary font-semibold relative mb-2">
                Backend Development
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary-sky rounded-full"></div>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <SkillsFooter items={backendSkills} />
            </div>
          </FramerWrapper>

          <FramerWrapper y={50} delay={0.35} className="skill-category">
            <div className="category-header mb-6">
              <h2 className="text-2xl font-poppins text-primary font-semibold relative mb-2">
                Database Technologies
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary-sky rounded-full"></div>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <SkillsFooter items={databaseSkills} />
            </div>
          </FramerWrapper>

          <FramerWrapper y={50} delay={0.45} className="skill-category">
            <div className="category-header mb-6">
              <h2 className="text-2xl font-poppins text-primary font-semibold relative mb-2">
                Tools & Technologies
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary-sky rounded-full"></div>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <SkillsFooter items={toolsSkills} />
            </div>
          </FramerWrapper>

          <FramerWrapper y={50} delay={0.55} className="skill-category">
            <div className="category-header mb-6">
              <h2 className="text-2xl font-poppins text-primary font-semibold relative mb-2">
                Cloud Computing
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary-sky rounded-full"></div>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <SkillsFooter items={cloudSkills} />
            </div>
          </FramerWrapper>

          <FramerWrapper y={50} delay={0.65} className="skill-category">
            <div className="category-header mb-6">
              <h2 className="text-2xl font-poppins text-primary font-semibold relative mb-2">
                Containerization
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary-sky rounded-full"></div>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <SkillsFooter items={containerizationSkills} />
            </div>
          </FramerWrapper>

          <FramerWrapper y={50} delay={0.75} className="skill-category">
            <div className="category-header mb-6">
              <h2 className="text-2xl font-poppins text-primary font-semibold relative mb-2">
                Computer Science Fundamentals
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-primary-sky rounded-full"></div>
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              <SkillsFooter items={csFundamentals} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
