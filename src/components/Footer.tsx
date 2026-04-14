import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const footerCols = [
  {
    title: "Pages principales",
    links: ["À propos", "Nos solutions", "Actualités", "Carrières", "Développement durable"],
  },
  {
    title: "Les plus consultées",
    links: ["Assurance santé", "Résultats financiers", "Offres d'emploi", "Rapport annuel"],
  },
  {
    title: "Nous recommandons",
    links: ["Application mobile", "Actions AssurGlobal", "Notre histoire", "Partenaires"],
  },
  {
    title: "Services & Contacts",
    links: ["Contacts dans le monde", "Produits & Services", "Contacts presse", "FAQ"],
  },
];

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-primary-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tagline + social */}
        <div className="mt-16 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-lg font-semibold text-accent">
            Protéger le monde depuis plus de 60 ans.
          </p>
          <div className="mt-6 flex justify-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/50 transition-colors"
                aria-label={s.label}
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-primary-foreground/10 pt-6 flex flex-wrap justify-center gap-4 text-xs text-primary-foreground/50">
          <span>© AssurGlobal 2026. Tous droits réservés.</span>
          <a href="#" className="hover:text-primary-foreground">Mentions légales</a>
          <a href="#" className="hover:text-primary-foreground">Politique de confidentialité</a>
          <a href="#" className="hover:text-primary-foreground">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
}
