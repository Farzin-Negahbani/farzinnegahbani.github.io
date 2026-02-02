import { ArrowDown, Mail, FileText, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

export function HeroSection() {
  return <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="section-container py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-neural-muted to-secondary overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Farzin Negahbani" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl neural-accent opacity-20 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>Farzin Negahbani</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              I study neuromodulation, with a focus on <span className="text-foreground font-medium">Deep Brain Stimulation</span>, neural circuits, and data-driven therapeutic optimization using electrophysiology, neuroimaging, and computational modeling.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                <Mail size={18} />
                Get in Touch
              </a>
              <a href="#publications" className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors">
                <FileText size={18} />
                Publications
              </a>
              <a href="https://de.linkedin.com/in/farzin-negahbani-567357109" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16 animate-fade-in" style={{
        animationDelay: "0.5s"
      }}>
          <a href="#research" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>;
}