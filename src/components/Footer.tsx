const socials = [
  { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
  { label: "X", path: "M4 4l11.733 16H20L8.267 4H4zM4 20l6.768-6.768M20 4l-6.768 6.768" },
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
