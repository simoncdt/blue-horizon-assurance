import { motion } from "framer-motion";
import imgPro from "@/assets/service-professionals.jpg";
import imgFam from "@/assets/service-families.jpg";
import imgRet from "@/assets/service-retirees.jpg";
import imgStu from "@/assets/service-students.jpg";

const plans = [
  {
    image: imgPro,
    title: "Professionnels internationaux",
    description: "Des couvertures adaptées aux expatriés, nomades digitaux et collaborateurs en mobilité internationale.",
  },
  {
    image: imgFam,
    title: "Familles",
    description: "Des plans familiaux complets pour la santé et le bien-être de vos proches, où que vous soyez.",
  },
  {
    image: imgRet,
    title: "Retraités",
    description: "Des solutions santé complètes pour profiter pleinement de votre retraite à l'étranger.",
  },
  {
    image: imgStu,
    title: "Étudiants",
    description: "Une couverture santé essentielle pour les étudiants qui poursuivent leurs études à l'international.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Nos solutions d'assurance</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Des plans de couverture internationale adaptés à chaque profil et à chaque besoin.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={640}
                  height={512}
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-accent">{plan.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  En savoir plus →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
