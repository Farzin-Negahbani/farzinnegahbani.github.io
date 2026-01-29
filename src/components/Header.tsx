import { useState } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [{
  href: "#about",
  label: "About"
}, {
  href: "#research",
  label: "Research"
}, {
  href: "#publications",
  label: "Publications"
}, {
  href: "#teaching",
  label: "Teaching"
}, {
  href: "#contact",
  label: "Contact"
}];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="section-container flex items-center justify-between h-16">
        

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
                {link.label}
              </a>
            </li>)}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && <div className="md:hidden bg-background border-b border-border">
          <ul className="section-container py-4 space-y-4">
            {navLinks.map(link => <li key={link.href}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>)}
          </ul>
        </div>}
    </header>;
}