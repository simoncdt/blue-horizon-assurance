import { motion } from "framer-motion";
import { Heart, Target, Leaf, Globe } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "L'humain d'abord",
    description: "Nous plaçons les personnes au cœur de toutes nos décisions. Votre bien-être est notre priorité absolue.",
  },
  {
    icon: Target,
    title: "Guidés par notre mission",
    description: "Depuis plus de 60 ans, nous nous engageons à améliorer la santé et le bien-être de nos assurés à travers le monde.",
  },
  {
    icon: Leaf,
    title: "Santé globale intégrée",
    description: "Notre approche holistique combine santé physique, mentale et bien-être en une solution complète et intuitive.",
  },
  {
    icon: Globe,
    title: "Réseau mondial & local",
    description: "Accédez à un réseau de 2,4 millions de professionnels de santé à travers le monde, avec un support dans plus de 50 langues.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center gap-2 justify-center mb-4">
            <div className="h-8 w-1 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Nos atouts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Pourquoi choisir AssurGlobal</h2>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <r.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mt-5 text-base font-bold text-foreground">{r.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
