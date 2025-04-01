
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="section-container">
        <div className="max-w-3xl">
          <p className="text-primary font-mono mb-5 animate-fade-in">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            John Doe.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            I build things for the web.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "800ms" }}>
            <Button size="lg" className="group">
              Check out my work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
