import { motion } from "framer-motion";
import heroImg from "@/assets/hero-insurance.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-end overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Famille heureuse protégée par Simplificateurs Financiers"
          className="h-full w-full object-cover"
          width={1920}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight tracking-tight">
            Votre avenir,{" "}
            <span className="text-sky-light">notre engagement.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
            Assurance internationale sur mesure pour les particuliers, les familles et les entreprises. Une protection fiable dans plus de 200 pays.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="rounded-full bg-background px-8 py-3.5 text-sm font-bold text-primary hover:bg-background/90 transition-colors shadow-lg"
            >
              Obtenir un devis gratuit
            </a>
            <a
              href="#services"
              className="rounded-full border-2 border-primary-foreground/40 px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/10 transition-colors"
            >
              Découvrir nos solutions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
