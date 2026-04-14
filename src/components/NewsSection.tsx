import { motion } from "framer-motion";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

const articles = [
  {
    image: article1,
    title: "Résultats annuels 2025 : une croissance soutenue",
    date: "14 avril 2026",
    excerpt: "Simplificateurs Financiers publie ses résultats annuels 2025, confirmant une trajectoire de croissance solide sur l'ensemble de ses marchés internationaux.",
  },
  {
    image: article2,
    title: "Expansion stratégique en Asie-Pacifique",
    date: "31 mars 2026",
    excerpt: "Notre groupe renforce sa présence en Asie-Pacifique avec l'ouverture de nouveaux bureaux régionaux à Singapour et Sydney.",
  },
  {
    image: article3,
    title: "Nouveaux plans santé pour les retraités expatriés",
    date: "26 mars 2026",
    excerpt: "Découvrez nos nouvelles solutions d'assurance santé conçues spécialement pour les retraités vivant à l'étranger.",
  },
];

export default function NewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background" id="news">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Actualités</h2>
          <div className="mt-2 h-1 w-16 bg-accent rounded-full" />
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={512}
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{article.date}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
