import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Pays couverts" },
  { value: "2.4M", label: "Professionnels de santé" },
  { value: "24/7", label: "Support client" },
  { value: "50+", label: "Langues parlées" },
];

export default function StatsBar() {
  return (
    <section className="bg-primary py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-primary-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-primary-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
