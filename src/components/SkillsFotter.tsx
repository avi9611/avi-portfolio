import Image from "next/image";
import React from "react";

interface MyComponentProps {
  items: Array<{ alt?: string; img?: any; name?: string; icon?: string }>;
}

const SkillsFooter: React.FC<MyComponentProps> = ({ items }) => {
  return (
    <>
      {items?.map((item, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors"
        >
          <div className="relative w-12 h-12">
            <Image 
              src={item.icon || ''} 
              alt={item.name || 'Skill icon'}
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <span className="text-sm text-center font-medium text-muted-foreground">
            {item.name}
          </span>
        </div>
      ))}
    </>
  );
};

export default SkillsFooter;