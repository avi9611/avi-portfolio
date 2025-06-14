"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, X } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    imageOne?: string;
    imageTwo?: string;
  };
  num: number;
}

const tagStylesMap: Record<string, string> = {
  Nextjs: "bg-teal-500 text-white",
  Zustand: "bg-yellow-500 text-black",
  TailwindCSS: "bg-blue-500 text-white",
  Typescript: "bg-red-500 text-white",
  PostgreSQL: "bg-blue-300 text-white",
  MySQL: "bg-orange-500 text-white",
  MongoDb: "bg-purple-500 text-white",
  Reactjs: "bg-emerald-500 text-white",
  Nodejs: "bg-indigo-500 text-white",
  Javascript: "bg-pink-500 text-white",
  HTML: "bg-cyan-500 text-white",
  CSS: "bg-red-500 text-white",
  Flask: "bg-violet-500 text-white",
  "Express.js": "bg-green-500 text-white",
  Expressjs: "bg-green-500 text-white",
  Prisma: "bg-purple-400 text-white",
  Vite: "bg-yellow-400 text-black",
  ApexCharts: "bg-blue-600 text-white",
};

const ProjectCard = ({ value, num }: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 overlay"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      <Card 
        className={cn(
          "w-full h-full flex flex-col border border-gray-800 rounded-xl shadow-lg transition-all duration-300 ease-out",
          "bg-gradient-to-br from-gray-900 to-gray-800 text-white cursor-pointer",
          "hover:shadow-2xl hover:border-gray-700 hover:-translate-y-1",
          isExpanded && "fixed top-[5%] left-[5%] w-[90%] h-[90%] z-50 expanded hover:translate-y-0"
        )}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {isExpanded && (
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(false);
            }}
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className={cn(
          "relative w-full overflow-hidden rounded-t-xl transition-all duration-300",
          isExpanded ? "h-[50%]" : "h-64"
        )}>
          <div className="flex space-x-4 h-full">
            {value.imageOne && (
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={value.imageOne}
                  alt={`${value.title} - Image 1`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHyAiJRwlKicrJSUoLS0tMDcxLy41Njc1ODk7Pj89O1lFS0ZFS2BNW2P/2wBDARUXFxgZGR4eGSNDNy03Q0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX//Z"
                />
              </div>
            )}
            {value.imageTwo && (
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={value.imageTwo}
                  alt={`${value.title} - Image 2`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHyAiJRwlKicrJSUoLS0tMDcxLy41Njc1ODk7Pj89O1lFS0ZFS2BNW2P/2wBDARUXFxgZGR4eGSNDNy03Q0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0P/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX//Z"
                />
              </div>
            )}
          </div>
        </div>

        <CardHeader className="pb-4 border-b border-gray-700/50">
          <CardTitle className="text-2xl font-bold text-white">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className={cn(
          "flex-grow flex flex-col gap-6 p-6 content",
          isExpanded && "overflow-y-auto"
        )}>
          <p className="text-lg leading-relaxed text-gray-300">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2.5">
            {value.tags.map((tag, index) => (
              <span
                key={index}
                className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium transition-transform hover:scale-105 ${
                  tagStylesMap[tag] || "bg-gray-600 text-white"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-4 border-t border-gray-700/50 flex justify-end">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-fit transition-all hover:translate-y-[-2px] hover:shadow-lg group bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            Visit Project
            <ArrowUpRight className="h-5 w-5 ml-2 hidden group-hover:block transition-all duration-200" />
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProjectCard;
