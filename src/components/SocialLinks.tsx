"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { useState } from "react";

const SocialLinks = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/_a_viii/profilecard/?igsh=aDZoNno1NjR3MHNr",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-50",
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/avinash516/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.981 2.337 1.494 3.834 1.494 1.498 0 2.853-.513 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
        </svg>
      ),
      color: "hover:text-yellow-500",
      bgColor: "hover:bg-yellow-50",
    },
    {
      name: "LinkedIn",
      link: "http://linkedin.com/in/avinash-n-a99387286",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-50",
    },
    {
      name: "Daily.dev",
      link: "https://app.daily.dev/avinashn",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm0 15.428l-3.79-2.144v-2.57L12 12.857l3.79-2.143v2.57L12 15.428z" />
        </svg>
      ),
      color: "hover:text-green-500",
      bgColor: "hover:bg-green-50",
    },
    {
      name: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/avinashpomzls/",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M19.35 4.35a9.46 9.46 0 0 0-13.4 0C3.53 6.77 2.75 9.91 3.34 12.84c.59 2.93 2.5 5.41 5.15 6.67A9.46 9.46 0 0 0 12 20.3a9.46 9.46 0 0 0 3.51-.79c2.65-1.26 4.56-3.74 5.15-6.67.59-2.93-.19-6.07-2.61-8.49zM12 18.3c-4.86 0-8.8-3.94-8.8-8.8S7.14.7 12 .7s8.8 3.94 8.8 8.8-3.94 8.8-8.8 8.8zm1.2-13.2h-2.4v6h2.4v-6zm0 7.2h-2.4v2.4h2.4v-2.4z" />
        </svg>
      ),
      color: "hover:text-emerald-500",
      bgColor: "hover:bg-emerald-50",
    },
    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/avinashpoojary61",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.279.033-.402.099v5.033c.126.069.266.102.402.102.545 0 .987-.452.987-1.012V7.81c0-.56-.443-1.012-.987-1.012zm-4.59 0c-.544 0-.987.452-.987 1.012v3.217c0 .56.443 1.012.987 1.012.141 0 .279-.033.402-.099V6.898c-.126-.069-.266-.102-.402-.102zm6.89 0c-.544 0-.987.452-.987 1.012v3.217c0 .56.443 1.012.987 1.012.141 0 .279-.033.402-.099V6.898c-.126-.069-.266-.102-.402-.102zm-2.3 3.319v-1.307h-.79v1.307h-.79v-1.307h-.79v1.307h-.79v-1.307h-1.208v-1.307h1.208v-1.307h.79v1.307h.79v-1.307h.79v1.307h.79v-1.307h1.208v1.307h-1.208v1.307h1.208z" />
        </svg>
      ),
      color: "hover:text-violet-500",
      bgColor: "hover:bg-violet-50",
    }
  ];

  return (
    <div className="relative w-full max-w-2xl px-8">
      {/* Top flowing line */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="h-full w-full animate-flow-line bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>

      {/* Bottom flowing line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="h-full w-full animate-flow-line-reverse bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </div>

      {/* Links container with padding for the lines */}
      <div className="flex flex-wrap gap-4 items-center justify-center py-4">
        {links.map((item, index) => {
          const timing = 0.55 + index * 0.125;

          return (
            <FramerWrapper key={index} delay={timing} y={50}>
              <div className="relative group">
                <Link
                  target="_blank"
                  href={item.link}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "relative transition-all duration-300 transform",
                    item.color,
                    item.bgColor,
                    "hover:scale-110 hover:shadow-lg",
                    "border-2 hover:border-current",
                    hoveredIndex === index ? "scale-110" : ""
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.icon}
                </Link>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-xs font-medium bg-gray-900 text-white px-2 py-1 rounded-md whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </div>
            </FramerWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;