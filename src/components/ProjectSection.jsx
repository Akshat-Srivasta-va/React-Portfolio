import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "React Login Form",
    description: "A simple login form using React and Tailwind CSS",
    image: "/projects/proj1.png",
    tags: ["React", "Tailwind CSS"],
    githubURL: "https://github.com/Akshat-Srivasta-va/React-Login-Form",
    demoURL: "#",
  },
  {
    id: 2,
    title: "Masala Moods",
    description:
      "A food order app using React, Tailwind CSS and motion framework",
    image: "/projects/proj2.png",
    tags: ["React", "Tailwind CSS", "Motion framework"],
    githubURL: "https://github.com/Akshat-Srivasta-va/Masala-Moods",
    demoURL: "https://masala-moods-1iocvs9al-akshat-srivastavas-projects-c9721192.vercel.app/",
  },
  {
    id: 3,
    title: "LeafPad",
    description: "A notes taking website using MERN Stack",
    image: "/projects/proj3.png",
    tags: ["React", "Tailwind CSS", "MERN Stack"],
    githubURL: "https://github.com/Akshat-Srivasta-va/LeafPad",
    demoURL: "https://leaf-9k47rvxd3-akshat-srivastavas-projects-c9721192.vercel.app/",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My<span className="text-primary"> Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the projects I've worked on, showcasing my practical
          application of skills. Each one represents an opportunity to learn and
          contribute. I'm excited to share the details of these experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover
                   "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.demoURL}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20}/>
                  </a>
                  <a
                    href={project.githubURL}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20}/>
                  </a>
                </div>
                     </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
<a className="cosmic-button w-fit flex items-center mx-auto gap-2"
target="_blank"
href="https://github.com/Akshat-Srivasta-va"
>    
    My Github <ArrowRight size={16}/> 
</a>
      </div>
    </section>
  );
};

export default ProjectSection;
