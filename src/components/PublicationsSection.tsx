import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    year: "2026",
    title: "Propensity-matched multicenter comparison of Parkinson's disease outcomes with and without deep brain stimulation",
    authors: "Gharabaghi A, Negahbani F, Keute M",
    journal: "npj Parkinson's Disease",
    doi: "",
    type: "article",
  },
  {
    year: "2024",
    title: "Machine learning explains response variability of deep brain stimulation on Parkinson's disease quality of life",
    authors: "Ferrea E, Negahbani F, Cebi I, Weiss D, Gharabaghi A",
    journal: "NPJ Digital Medicine",
    doi: "10.1038/s41746-024-01253-6",
    type: "article",
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Publications</h2>
          <p className="section-subtitle mx-auto">
            Selected peer-reviewed publications from my research work.
          </p>
        </div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <article
              key={index}
              className="card-academic group flex flex-col md:flex-row md:items-start gap-4"
            >
              <div className="flex-shrink-0">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                  {pub.year}
                </span>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                <p className="text-sm">
                  <span className="italic text-foreground/80">{pub.journal}</span>
                  {pub.type === "review" && (
                    <span className="ml-2 text-xs px-2 py-0.5 bg-accent/20 text-accent rounded">Review</span>
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <FileText size={16} />
                  PDF
                </a>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  DOI
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent font-medium transition-colors"
          >
            View all publications on Google Scholar
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
