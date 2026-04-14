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
    links: ["Application mobile", "Actions Simplificateurs Financiers", "Notre histoire", "Partenaires"],
  },
  {
    title: "Services & Contacts",
    links: ["Contacts dans le monde", "Produits & Services", "Contacts presse", "FAQ"],
  },
];

const legalLinks = [
  "Informations légales",
  "Politique de confidentialité",
  "Politique des cookies",
  "Accessibilité",
  "Réclamations",
  "RGPD",
];

const socials = [
  { label: "X", path: "M4 4l11.733 16H20L8.267 4H4zM4 20l6.768-6.768M20 4l-6.768 6.768" },
  { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
  { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
];

export default function Footer() {
  return (
    <footer className="relative">
      {/* Wave SVG transition */}
      <div className="relative bg-background">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px] sm:h-[80px] lg:h-[120px]"
          fill="none"
        >
          <path
            d="M0,120 L0,80 Q360,0 720,60 Q1080,120 1440,40 L1440,120 Z"
            className="fill-primary"
          />
        </svg>
      </div>

      {/* Main footer on navy */}
      <div className="bg-primary text-primary-foreground">
        {/* Upper section — links grid */}
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-12 lg:pb-16">
          {/* Logo repeat + tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 lg:mb-14">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 ring-1 ring-primary-foreground/20">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">Simplificateurs Financiers</span>
            </div>
            <p className="text-sm text-primary-foreground/60 max-w-xs">
              Protéger le monde depuis plus de 60 ans.
            </p>
          </div>

          {/* Links grid — stacked on mobile, 2 cols on sm, 4 cols on lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary-foreground/40 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="h-px bg-primary-foreground/10" />
        </div>

        {/* Bottom section — copyright, legal links, social */}
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* Copyright */}
            <p className="text-sm text-primary-foreground/50 shrink-0">
              © Simplificateurs Financiers 2026. Tous droits réservés.
            </p>

            {/* Legal links — wrap naturally */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200 underline-offset-2 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-xs font-semibold text-primary-foreground/60 mr-1">Suivez-nous</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/5 ring-1 ring-primary-foreground/15 text-primary-foreground/70 hover:bg-primary-foreground/15 hover:text-primary-foreground transition-all duration-200"
                  aria-label={s.label}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-navy-dark/50">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-4">
            <p className="text-[11px] leading-relaxed text-primary-foreground/35">
              *Veuillez noter que ceci est une présentation des garanties disponibles et ne contient pas les termes, conditions et exclusions spécifiques à chaque garantie. Les garanties peuvent être sujettes à modification.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
