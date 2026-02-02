export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Farzin Negahbani. All rights reserved.</p>
          
        </div>
      </div>
    </footer>;
}