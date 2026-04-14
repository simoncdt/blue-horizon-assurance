import { motion } from "framer-motion";
import { Briefcase, Users, Building2 } from "lucide-react";

const segments = [
  {
    icon: Briefcase,
    title: "Entreprises",
    description: "Avec un réseau mondial de professionnels de santé et d'hôpitaux, AssurGlobal accompagne les entreprises dans la protection de leurs collaborateurs depuis plus de 60 ans.",
  },
  {
    icon: Users,
    title: "Particuliers & Familles",
    description: "Nos plans d'assurance santé internationale protègent les expatriés, retraités et étudiants. Construisez un plan adapté à vos besoins et protégez votre bien-être physique et mental.",
  },
  {
    icon: Building2,
    title: "ONG & Gouvernements",
    description: "Travailler dans un pays étranger peut présenter des situations complexes en matière de soins médicaux. Offrez à vos équipes un accompagnement de qualité.",
  },
];

export default function WhoWeHelpSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-8 w-1 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Notre audience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Qui nous accompagnons</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Notre couverture s'étend à plus de 200 marchés et territoires, avec 2,4 millions de professionnels de santé et un service client 24h/24 et 7j/7.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10">
                <seg.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-accent">{seg.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{seg.description}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                En savoir plus →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
