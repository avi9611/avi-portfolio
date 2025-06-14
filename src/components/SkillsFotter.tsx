import Image from "next/image";
import React from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface MyComponentProps {
  items: Array<{ alt?: string; img?: any; name?: string; icon?: string }>;
}

const getSkillDescription = (name: string) => {
  const descriptions: Record<string, string> = {
    "HTML5": "Advanced - Semantic markup & modern features",
    "CSS3": "Advanced - Modern layouts & animations",
    "JavaScript": "Advanced - ES6+, async programming",
    "TypeScript": "Advanced - Type safety & OOP patterns",
    "React.js": "Advanced - Hooks, context, performance optimization",
    "Next.js": "Advanced - Full-stack development & SSR",
    "Python": "Advanced - Web development & automation",
    "Node.js": "Advanced - REST APIs & microservices",
    "MongoDB": "Advanced - Schema design & aggregation",
    "MySQL": "Advanced - Complex queries & optimization",
    "Git": "Advanced - Version control & collaboration",
    "Docker": "Advanced - Containerization & orchestration"
  };
  return descriptions[name] || `${name} - Professional level`;
};

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <TooltipProvider>
      {items?.map((item, index) => (
        <Tooltip key={index}>
          <TooltipTrigger asChild>
            <div
              className="group flex flex-col items-center justify-center gap-3 p-5 rounded-xl
                bg-opacity-10 backdrop-blur-sm backdrop-filter
                border border-border/5
                hover:bg-accent/30 transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-lg hover:border-primary/20
                hover:shadow-primary/5 cursor-pointer"
            >
              <div className="relative w-14 h-14 transition-all duration-300
                transform group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src={item.icon || ''}
                  alt={item.name || 'Skill icon'}
                  fill
                  className="object-contain drop-shadow-lg transition-transform duration-500
                    group-hover:filter group-hover:brightness-110"
                  sizes="56px"
                />
              </div>
              <span className="text-sm font-medium text-center text-muted-foreground
                transition-colors duration-300 group-hover:text-primary">
                {item.name}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="bg-secondary/95 backdrop-blur-sm">
            <p>{getSkillDescription(item.name || '')}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </TooltipProvider>
  );
};

export default SkillsFooter;