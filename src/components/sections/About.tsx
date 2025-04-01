
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="bg-secondary/50 dark:bg-secondary/20">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-lg">
              <p>
                Hello! I'm John, a passionate software developer with a love for creating
                efficient, user-friendly applications that solve real-world problems.
              </p>
              <p>
                My journey in software development began over 5 years ago, and since then,
                I've worked on a variety of projects ranging from web applications to
                mobile apps and everything in between.
              </p>
              <p>
                I believe in writing clean, maintainable code and constantly strive to
                improve my skills and stay up-to-date with the latest technologies and
                best practices in the industry.
              </p>
              <p>
                When I'm not coding, you'll find me hiking, reading sci-fi novels, or
                experimenting with new recipes in the kitchen.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <Card className="w-72 h-72 relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-primary/40 transform rotate-3 z-0"></div>
              <div className="absolute inset-0 bg-card rounded-lg z-10 flex items-center justify-center overflow-hidden">
                <div className="w-64 h-64 rounded-lg bg-muted flex items-center justify-center text-6xl font-bold text-primary">JD</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
