import { Brain, Zap, Activity, Target } from "lucide-react";

const researchAreas = [
  {
    icon: Brain,
    title: "Deep Brain Stimulation",
    description: "Investigating the mechanisms and applications of DBS in treating movement disorders and psychiatric conditions.",
  },
  {
    icon: Zap,
    title: "Neural Circuit Mapping",
    description: "Understanding the complex neural pathways involved in motor control and cognitive functions.",
  },
  {
    icon: Activity,
    title: "Electrophysiology",
    description: "Recording and analyzing neural activity to understand brain function at cellular and network levels.",
  },
  {
    icon: Target,
    title: "Therapeutic Development",
    description: "Developing novel neuromodulation strategies for improved patient outcomes.",
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Research Focus</h2>
          <p className="section-subtitle mx-auto">
            My research bridges fundamental neuroscience with clinical applications,
            aiming to improve treatments for neurological disorders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className="card-academic group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <area.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
