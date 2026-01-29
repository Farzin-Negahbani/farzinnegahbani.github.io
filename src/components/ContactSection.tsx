import { ExternalLink } from "lucide-react";
export function ContactSection() {
  return <section id="contact" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle mx-auto">
            Feel free to reach out for collaborations, speaking opportunities, or research inquiries.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Academic Profiles */}
            <div className="bg-muted/50 rounded-xl p-6">
              <h3 className="font-serif font-semibold text-lg mb-4">farzin (dot) negahbani (at) uni-tuebingen.de</h3>
              <div className="space-y-3">
                <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-card rounded-lg hover:shadow-md transition-shadow group">
                  <span className="font-medium text-foreground">Google Scholar</span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="https://orcid.org" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-card rounded-lg hover:shadow-md transition-shadow group">
                  <span className="font-medium text-foreground">ORCID</span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="https://researchgate.net" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-card rounded-lg hover:shadow-md transition-shadow group">
                  <span className="font-medium text-foreground">ResearchGate</span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-card rounded-lg hover:shadow-md transition-shadow group">
                  <span className="font-medium text-foreground">LinkedIn</span>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>;
}