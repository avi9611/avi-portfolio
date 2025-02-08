import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  num: number;
}

const tagStylesMap: Record<string, string> = {
  Nextjs: "bg-teal-500 text-white",
  Zustand: "bg-yellow-500 text-black",
  "TailwindCSS": "bg-blue-500 text-white",
  Typescript: "bg-red-500 text-white",
  MySQL: "bg-orange-500 text-white",
  MongoDb: "bg-purple-500 text-white",
  Reactjs: "bg-emerald-500 text-white",
  Nodejs: "bg-indigo-500 text-white",
  Javascript: "bg-pink-500 text-white",
  HTML: "bg-cyan-500 text-white",
  CSS: "bg-red-500 text-white",
  "Flask": "bg-violet-500 text-white",
};

const ProjectCard: React.FC<ProjectCardProps> = ({ value, num }) => {
  return (
    <FramerWrapper 
      className="max-w-[30%] max-lg:max-w-full" 
      y={0} 
      scale={0.85} 
      delay={num / 4} 
      duration={0.2}
    >
      <Card className="w-full h-full flex flex-col border-2 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <CardHeader className="pb-3 border-b border-gray-700">
          <CardTitle className="text-2xl font-semibold text-white">{value.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="flex-grow flex flex-col gap-4 p-5">
          <p className="text-md leading-relaxed text-gray-300">{value.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag, index) => (
              <span 
                key={index}
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${tagStylesMap[tag] || 'bg-gray-600 text-white'}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-3 border-t border-gray-700 flex justify-end">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-fit transition-all hover:translate-y-[-3px] hover:shadow-lg group bg-blue-600 text-white px-4 py-2 rounded-lg"
            )}
          >
            Visit Project 
            <ArrowUpRight className="h-5 w-5 ml-2 hidden group-hover:block transition-all duration-200" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCard;