import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Search, Globe, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Nos solutions", href: "#services" },
  { label: "Actualités", href: "#news" },
  { label: "Carrières", href: "#careers" },
  { label: "Développement durable", href: "#sustainability" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-end gap-4 py-2 text-xs text-primary-foreground">
          <a href="#" className="flex items-center gap-1 hover:underline">
            <Globe className="h-3.5 w-3.5" />
            <span>FR</span>
            <ChevronDown className="h-3 w-3" />
          </a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-primary tracking-tight">AssurGlobal</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-foreground hover:text-accent transition-colors" aria-label="Rechercher">
              <Search className="h-5 w-5" />
            </button>
            <a
              href="#quote"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-navy-light transition-colors"
            >
              Obtenir un devis
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-foreground py-2 hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#quote"
              className="block text-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground mt-4"
              onClick={() => setOpen(false)}
            >
              Obtenir un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
