import React from "react";
import { Code, Laptop, Palette } from 'lucide-react'; // Importing icons from lucide-react

const SkillsSection = () => {
  // Define card data with updated skills: Web Development, Java, and DSA
  const cardsData = [
    {
      icon: Code, // Lucide React Code icon for Web Development
      title: "Web Development",
      description: "Creating responsive and dynamic web applications using modern front-end and back-end technologies."
    },
    {
      icon: Laptop, // Lucide React Laptop icon for Java (can represent software development)
      title: "Java Programming",
      // Updated description to focus on basics, not Spring Boot
      description: "Proficient in fundamental Java concepts and object-oriented programming."
    },
    {
      icon: Palette, // Lucide React Palette icon for DSA (can represent problem-solving/logic)
      title: "Data Structures & Algorithms",
      description: "Proficient in fundamental data structures and algorithms for efficient problem-solving and optimized code."
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      {/* Removed max-w-7xl to allow the container to take full width */}
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary">{" "}Skills</span>
        </h2>

        {/* Container for the responsive cards */}
        <div className="flex items-center justify-center font-sans">
          {/* Grid container for cards: 1 column on small screens, 3 columns on medium/large screens */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {cardsData.map((card, index) => (
              // Individual card container with base styling and hover effect
              // Padding remains p-8 for larger cards
              <div key={index} className="card-base gradient-border card-hover p-8">
                <div className="flex items-start gap-4">
                  {/* Icon container with rounded background */}
                  {/* Icon padding and size remain p-4 and h-8 w-8 for larger icons */}
                  <div className="p-4 rounded-full bg-primary/10">
                    {/* Render the icon component passed in card data */}
                    <card.icon className="h-8 w-8 text-primary" />
                  </div>
                  {/* Text content for the card */}
                  <div className="text-left">
                    {/* Title font size remains text-xl */}
                    <h4 className="font-semibold text-xl text-white">{card.title}</h4>
                    {/* Description font size remains text-base */}
                    <p className="text-base text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
