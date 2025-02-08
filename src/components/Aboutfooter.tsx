import { Circle, Dna, Globe2, Languages } from "lucide-react";

const Aboutfooter = () => {
  const items = [
    {
      name: "Language",
      answer: "English UK",
      icon: <Languages className="h-8 w-8 text-primary" />,
    },
    {
      name: "Nationality",
      answer: "India",
      icon: <Globe2 className="h-8 w-8 text-primary" />,
    },
    {
      name: "Gender",
      answer: "Male",
      icon: <Dna className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {items.map((val, indx) => (
        <div
          key={indx}
          className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-start gap-4"
        >
          {/* Icon and Name */}
          <div className="flex items-center gap-3">
            {val.icon}
            <h2 className="text-2xl font-semibold text-primary">{val.name}</h2>
          </div>

          {/* Answer */}
          <div className="flex items-center gap-2 text-lg text-muted-foreground">
            <Circle className="h-3 w-3 text-primary" />
            <span>{val.answer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aboutfooter;