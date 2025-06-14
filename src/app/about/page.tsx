"use client";

import React from "react";
import { Circle, Heart, User2, Globe, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import type { FC } from "react";
import Aboutfooter from "@/components/Aboutfooter";
import Image from "next/image";

interface CardItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FlipCardProps {
  item: CardItem;
}

const FlipCard: FC<FlipCardProps> = ({ item }) => (
  <div className="group h-[200px] [perspective:1000px] transform-gpu hover:scale-105 transition-transform duration-300">
    <div className="relative h-full w-full rounded-xl shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* Front */}
      <div className="absolute inset-0">
        <div className="flex h-full flex-col items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm p-4 text-center">
          <div className="mb-2 text-primary transform transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
          <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
        </div>
      </div>
      {/* Back */}
      <div className="absolute inset-0 h-full w-full rounded-xl bg-primary/90 backdrop-blur-sm [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex h-full flex-col items-center justify-center p-4 text-center">
          <p className="text-sm text-primary-foreground">{item.description}</p>
        </div>
      </div>
    </div>
  </div>
);

const AboutPage: FC = () => {
  const hobbies: CardItem[] = [
    {
      title: "Coding",
      description: "Passionate about web development, always exploring new technologies and building creative projects.",
      icon: <Circle className="h-6 w-6" />,
    },
    {
      title: "Gaming",
      description: "Enjoy strategy and RPG games. Gaming helps me develop problem-solving skills and creativity.",
      icon: <Circle className="h-6 w-6" />,
    },
    {
      title: "Astronomy",
      description: "Fascinated by the cosmos, love stargazing and learning about space phenomena.",
      icon: <Circle className="h-6 w-6" />,
    },
    {
      title: "Cycling",
      description: "Love exploring new trails and maintaining bikes. It's both a hobby and a way of life.",
      icon: <Circle className="h-6 w-6" />,
    },
    {
      title: "UI Design",
      description: "Creating intuitive and beautiful interfaces that enhance user experience.",
      icon: <Circle className="h-6 w-6" />,
    },
  ];

  const languages: CardItem[] = [
    {
      title: "English",
      description: "Professional working proficiency",
      icon: <Languages className="h-6 w-6" />,
    },
    {
      title: "Kannada",
      description: "Native proficiency",
      icon: <Languages className="h-6 w-6" />,
    },
    {
      title: "Hindi",
      description: "Native proficiency",
      icon: <Languages className="h-6 w-6" />,
    },
  ];

  const nationality: CardItem[] = [
    {
      title: "Indian",
      description: "Born and raised in India, proud of my cultural heritage and diversity",
      icon: <Globe className="h-6 w-6" />,
    },
  ];

  return (
    <div className="min-h-screen w-full relative flex flex-col items-start gap-8 overflow-hidden p-6 max-w-7xl mx-auto mt-2 sm:mt-10 md:mt-4">
      <Badge variant="secondary" className="gap-1.5 py-1.5 px-3 text-sm">
        <User2 className="h-4 w-4" />
        About me
      </Badge>

      <div className="grid md:grid-cols-2 gap-12 w-full items-start">
        <div className="space-y-8">
          <FramerWrapper y={0} x={0} delay={0.1}>
            <Heading>
              Full Stack Developer & Web Developer
              <br />
              <span className="text-primary">Based In India</span>
            </Heading>
          </FramerWrapper>

          <FramerWrapper y={0} x={0} delay={0.2}>
            <p className="font-poppins text-lg text-muted-foreground leading-relaxed">
              Motivated and detail-oriented Entry-level Full Stack Developer with a
              solid foundation in HTML, CSS, JavaScript, and modern frameworks like
              React, Node.js, Express & MongoDB. I hold a Master of Computer
              Application (MCA) degree. I am passionate about learning new
              technologies and improving my coding skills. Eager to apply strong
              problem-solving abilities and a collaborative mindset to a dynamic
              development team, I aim to create seamless user experiences and
              contribute to innovative projects.
            </p>
          </FramerWrapper>
        </div>

        <FramerWrapper y={0} x={0} delay={0.3}>
          <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
            <Image
              src="/profile.jpg"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FramerWrapper>
      </div>

      <FramerWrapper y={0} x={0} delay={0.3} className="w-full">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="h-6 w-6 text-primary animate-pulse" />
          <h2 className="text-3xl font-semibold text-primary">Hobbies</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {hobbies.map((item, index) => (
            <FlipCard key={index} item={item} />
          ))}
        </div>
      </FramerWrapper>

      <FramerWrapper y={0} x={0} delay={0.4} className="w-full">
        <div className="flex items-center gap-2 mb-6">
          <Languages className="h-6 w-6 text-primary animate-bounce" />
          <h2 className="text-3xl font-semibold text-primary">Languages</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((item, index) => (
            <FlipCard key={index} item={item} />
          ))}
        </div>
      </FramerWrapper>

      <FramerWrapper y={0} x={0} delay={0.5} className="w-full">
        <div className="flex items-center gap-2 mb-6">
          <Globe className="h-6 w-6 text-primary animate-spin-slow" />
          <h2 className="text-3xl font-semibold text-primary">Nationality</h2>
        </div>
        <div className="max-w-md">
          {nationality.map((item, index) => (
            <FlipCard key={index} item={item} />
          ))}
        </div>
      </FramerWrapper>

      <FramerWrapper y={0} x={0} delay={0.6} className="w-full mt-12">
        <Aboutfooter />
      </FramerWrapper>
    </div>
  );
};

export default AboutPage;
