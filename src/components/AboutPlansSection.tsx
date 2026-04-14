import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Soins médicaux essentiels, hospitalisations et traitements",
  "Plans flexibles adaptés à vos besoins et votre budget",
  "Accès prioritaire aux médecins et infirmiers partenaires",
  "Accompagnement santé global via nos outils et solutions digitales",
  "Portail numérique sécurisé pour gérer vos documents",
];

export default function AboutPlansSection() {
  return (
    <section className="py-20 lg:py-28 bg-background" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-1 rounded-full bg-accent" />
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">Nos garanties</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Des plans d'assurance santé internationaux sur mesure
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Quels que soient vos besoins en matière d'assurance santé, nos plans médicaux internationaux peuvent être personnalisés pour y répondre, tout en offrant un réseau mondial d'hôpitaux et de professionnels de santé.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              La santé globale est une nouvelle approche qui permet de prendre en compte l'ensemble des facteurs qui contribuent à votre bien-être. Notre objectif est de vous aider à vivre pleinement, avec un accompagnement dans tous les aspects de votre vie.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">Tous nos plans incluent :</h3>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground leading-relaxed">{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
