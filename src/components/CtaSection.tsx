import { motion } from "framer-motion";
import ctaImg from "@/assets/cta-support.jpg";

export default function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary" id="quote">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground leading-tight">
              Besoin d'aide pour choisir votre plan ?
            </h2>
            <p className="mt-6 text-primary-foreground/80 leading-relaxed text-lg">
              Nos conseillers experts en assurance internationale sont disponibles 24h/24 et 7j/7 pour vous accompagner. Obtenez un devis en moins de 2 minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-background px-8 py-3.5 text-sm font-bold text-primary hover:bg-background/90 transition-colors"
              >
                Obtenir un devis gratuit
              </a>
              <a
                href="#"
                className="rounded-full border-2 border-primary-foreground/40 px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={ctaImg}
              alt="Service client Simplificateurs Financiers"
              className="rounded-2xl shadow-2xl"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
