import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  type: "frontend" | "backend" | "tools" | "other";
};

const skills: Skill[] = [
  // Frontend skills
  { name: "HTML5", type: "frontend" },
  { name: "CSS3", type: "frontend" },
  { name: "JavaScript", type: "frontend" },
  { name: "TypeScript", type: "frontend" },
  { name: "React", type: "frontend" },
  { name: "Next.js", type: "frontend" },
  { name: "Tailwind CSS", type: "frontend" },
  { name: "Redux", type: "frontend" },
  { name: "Responsive Design", type: "frontend" },
  { name: "Material UI", type: "frontend" },
  
  // Backend skills
  { name: "Node.js", type: "backend" },
  { name: "Express", type: "backend" },
  { name: "MongoDB", type: "backend" },
  { name: "PostgreSQL", type: "backend" },
  { name: "REST APIs", type: "backend" },
  { name: "GraphQL", type: "backend" },
  { name: "Firebase", type: "backend" },
  { name: "AWS", type: "backend" },
  
  // Tools
  { name: "Git", type: "tools" },
  { name: "GitHub", type: "tools" },
  { name: "VS Code", type: "tools" },
  { name: "Webpack", type: "tools" },
  { name: "Docker", type: "tools" },
  { name: "Figma", type: "tools" },
  
  // Other
  { name: "Agile", type: "other" },
  { name: "CI/CD", type: "other" },
  { name: "Testing", type: "other" },
  { name: "Performance Optimization", type: "other" },
];

const skillCategories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
  { id: "other", label: "Other" },
] as const;

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid gap-12">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="mr-2 text-primary">#</span>
                {category.label}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {skills
                  .filter((skill) => skill.type === category.id)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className={cn(
                        "skill-badge",
                        "bg-secondary/50 hover:bg-secondary/80 dark:bg-secondary/30 dark:hover:bg-secondary/50"
                      )}
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
