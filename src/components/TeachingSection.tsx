import { BookOpen, Download, Calendar, Users } from "lucide-react";

const courses = [
  {
    code: "NEUR 620",
    title: "Neuroprosthetics and Intelligent Implants",
    term: "Summer 2026",
    level: "Graduate",
    description: "Advanced course covering neural interfaces, brain-machine interfaces, and intelligent implantable devices for therapeutic applications.",
  },
];

const resources = [
  {
    title: "Interactive Aperiodic Estimation GUI",
    type: "Tool",
    description: "Generate simulation data and estimate aperiodic components using FOOOF and Yasa.",
    link: "https://github.com/Farzin-Negahbani/NeNa_aperiodic_GUI",
  },
  {
    title: "Python Starter Course",
    type: "Course",
    description: "Introduction to Python programming for neuroscience applications and data analysis.",
  },
  {
    title: "Electrophysiology Basics",
    type: "Tutorial",
    description: "Fundamentals of neural signal recording, processing, and interpretation techniques.",
  },
];

export function TeachingSection() {
  return (
    <section id="teaching" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Teaching</h2>
          <p className="section-subtitle mx-auto">
            Courses I teach and educational resources for students and researchers.
          </p>
        </div>

        {/* Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
            <BookOpen size={24} className="text-primary" />
            Current Courses
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div key={course.code} className="card-academic">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-medium text-primary">{course.code}</span>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={12} />
                    {course.term}
                  </div>
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-2">
                  {course.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Users size={14} />
                    {course.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-6 flex items-center gap-2">
            <Download size={24} className="text-primary" />
            Teaching Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {resources.map((resource) => {
              const content = (
                <>
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {resource.type}
                  </span>
                  <h4 className="font-medium text-foreground mt-2 mb-1 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </>
              );

              return resource.link ? (
                <a
                  key={resource.title}
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={resource.title}
                  className="p-5 bg-card rounded-lg border border-border"
                >
                  {content}
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-muted-foreground text-center">
            Access to course materials is available for enrolled students via the university portal.
          </p>
        </div>
      </div>
    </section>
  );
}
