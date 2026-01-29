import { ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    year: "2024",
    title: "Example Publication Title: Deep Brain Stimulation in Parkinson's Disease",
    authors: "Your Name, Co-Author A, Co-Author B",
    journal: "Journal of Neuroscience",
    doi: "10.1000/example",
    type: "article",
  },
  {
    year: "2023",
    title: "Neural Circuit Dynamics During Movement Disorders",
    authors: "Co-Author A, Your Name, Co-Author C",
    journal: "Nature Neuroscience",
    doi: "10.1000/example2",
    type: "article",
  },
  {
    year: "2023",
    title: "A Review of Neuromodulation Techniques for Psychiatric Disorders",
    authors: "Your Name, Co-Author D",
    journal: "Annual Review of Neuroscience",
    doi: "10.1000/example3",
    type: "review",
  },
  {
    year: "2022",
    title: "Electrophysiological Signatures of Effective DBS Therapy",
    authors: "Co-Author B, Co-Author C, Your Name",
    journal: "Brain Stimulation",
    doi: "10.1000/example4",
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
