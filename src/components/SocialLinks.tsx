import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Code2, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";

const SocialLinks = () => {
  const links = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/_a_viii/profilecard/?igsh=aDZoNno1NjR3MHNr",
      icon: <Instagram />,
    },
    {
      name: "Code2",
      link: "https://leetcode.com/u/avinash516/",
      icon: <Code2 />,
    },
    {
      name: "Linkedin",
      link: "http://linkedin.com/in/avinash-n-a99387286",
      icon: <Linkedin />,
    },
    {
      name: "External",
      link: "https://app.daily.dev/avinashn",
      icon: <ExternalLink />,
    },
  ];
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" })
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
