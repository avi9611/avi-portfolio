"use client";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/button";

const HackerBtn = ({ label }: { label: string }) => {
  const [displayText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/avinashresume.pdf";
    link.download = "avinashresume.pdf";
    link.click();
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
    setTimeout(() => console.log("Submitted"), label.length * 50);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  return (
    <Button
      size={"lg"}
      className="
        px-6 
        py-3 
        text-lg 
        font-bold 
        bg-gradient-to-r 
        from-purple-400 
        to-pink-500 
        hover:from-pink-500 
        hover:to-purple-400 
        active:bg-purple-600 
        text-white 
        rounded-lg 
        shadow-md 
        transition 
        duration-300 
        ease-in-out
      "
      onClick={downloadPDF}
      onMouseEnter={startScrambling}
    >
      <Download className="mx-1 text-2xl" />
      {displayText}
    </Button>
  );
};

export default HackerBtn;
