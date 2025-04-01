
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application for task management with drag-and-drop interface and team collaboration features.",
    technologies: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location search, forecasts, and interactive weather maps.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Geolocation API"],
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Developer Blog",
    description: "A technical blog platform with markdown support, code syntax highlighting, and comment system.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary/50 dark:bg-secondary/20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="project-card flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2">{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            See More Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
